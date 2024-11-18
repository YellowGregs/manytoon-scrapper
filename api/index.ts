import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(cors());

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 60, // 60 requests per minute
    message: 'Too many requests, please try again later.'
});
app.use(limiter);

// (alphanumeric + hyphen allowed) 
// i dont know what the fuck im doing i just wanna update this file ok
const IDontKnowWhatImDoing = (name: string) => /^[a-zA-Z0-9-]+$/.test(name);

app.get('/api/images/:manhwaName/chapter-:chapterNumber', async (req, res) => {
    const { manhwaName, chapterNumber } = req.params;

    if (!manhwaName || !chapterNumber || !IDontKnowWhatImDoing(manhwaName) || isNaN(Number(chapterNumber))) {
        return res.status(400).json({ error: 'Wrong manhwa name or chapter number.' });
    }

    const chapterUrl = `https://manytoon.com/comic/${manhwaName}/chapter-${chapterNumber}/`;

    try {
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
        if (!imageUrl.startsWith('https://manytoon.com/') && !imageUrl.startsWith('https://manytoon.org/')) {
            return res.status(400).json({ error: 'Invalid image URL.' });
        }

        const response = await axios.get(imageUrl, {
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
            },
            maxRedirects: 5
        });

        const contentType = response.headers['content-type'];
        if (!contentType || !contentType.startsWith('image/')) {
            return res.status(400).json({ error: 'Invalid content type for an image.' });
        }

        res.setHeader('Content-Type', contentType);
        res.setHeader('X-Content-Type-Options', 'nosniff');
        response.data.pipe(res);
    } catch (error) {
        console.error(`Error fetching image: ${(error as Error).message}`);
        res.status(500).json({ error: 'Failed to fetch image.' });
    }
});

app.get('/api/:manhwaName/details', async (req, res) => {
    const { manhwaName } = req.params;
    const mangaUrl = `https://manytoon.org/comic/${manhwaName}/`;

    try {
        const { data } = await axios.get(mangaUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(data);

        // Extracting details 
        const title = $('.post-title h1').clone().children().remove().end().text().trim(); // :3
        const rating = $('.box-rating-text .score').text().trim();
        const ratingCount = $('#countrate').text().trim();
        const genres = $('.genres-content a').map((_, el) => $(el).text().trim()).get();
        const status = $('.post-status .summary-content').last().text().trim();
        const releaseYear = $('.post-status .summary-content a[rel="tag"]').text().trim();
        const imageUrl = $('.summary_image img').attr('src') || '';

        res.json({
            title,
            rating,
            ratingCount,
            genres,
            status,
            releaseYear,
            imageUrl
        });
    } catch (error) {
        console.error(`Error scraping manga details: ${(error as Error).message}`);
        res.status(500).json({ error: 'Failed to scrape manga details.' });
    }
});

export default app;
