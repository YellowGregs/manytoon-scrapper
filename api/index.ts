import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/images/:manhwaName/chapter-:chapterNumber', async (req, res) => {
    const { manhwaName, chapterNumber } = req.params;

    try {
        if (!manhwaName || !chapterNumber || isNaN(Number(chapterNumber))) {
            return res.status(400).json({ error: 'Invalid manhwa name or chapter number.' });
        }

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
            if (imageUrl && imageUrl.startsWith('https://')) {
                imageUrls.push(imageUrl);
                processedImageUrls.push(`https://manytoon-scrapper.vercel.app/api/image?url=${encodeURIComponent(imageUrl)}`);
            }
        });

        if (imageUrls.length === 0) {
            return res.status(404).json({ error: 'No images found for the specified chapter.' });
        }

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

        const contentType = response.headers['content-type'];
        if (!contentType || !contentType.startsWith('image/')) {
            return res.status(400).json({ error: 'Invalid content type for an image.' });
        }

        res.setHeader('Content-Type', contentType);
        response.data.pipe(res);
    } catch (error) {
        console.error(`Error fetching image: ${(error as Error).message}`);
        res.status(500).json({ error: 'Failed to fetch image.' });
    }
});

export default app;
