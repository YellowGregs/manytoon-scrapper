import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/images/:manhwaName/chapter-:chapterNumber', async (req, res) => {
    const { manhwaName, chapterNumber } = req.params;

    try {
        const chapterUrl = `https://manytoon.com/comic/${manhwaName}/chapter-${chapterNumber}/`;

        const { data } = await axios.get(chapterUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(data);

        const imageUrls: string[] = [];
        const processedImageUrls: string[] = [];

        $('.reading-content .wp-manga-chapter-img').each((_, element) => {
            const imageUrl = $(element).attr('src');
            if (imageUrl) {
                imageUrls.push(imageUrl);
                processedImageUrls.push(`http://localhost:3000/api/image?url=${encodeURIComponent(imageUrl)}`);
            }
        });

        res.json({
            imageUrls,
            processedImageUrls
        });
    } catch (error) {
        console.error(`Error scraping images: ${(error as Error).message}`);
        res.status(500).json({ error: 'Failed to scrape images.' });
    }
});

app.get('/api/image', async (req, res) => {
    const imageUrl = req.query.url as string;

    if (!imageUrl) {
        return res.status(400).json({ error: 'Missing image URL query parameter.' });
    }

    try {
        if (!imageUrl.startsWith('https://manytoon.com/')) {
            return res.status(400).json({ error: 'Invalid image URL.' });
        }

        const response = await axios.get(imageUrl, {
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
            }
        });

        res.setHeader('Content-Type', response.headers['content-type']);
        response.data.pipe(res);
    } catch (error) {
        console.error(`Error fetching image: ${(error as Error).message}`);
        res.status(500).json({ error: 'Failed to fetch image.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
