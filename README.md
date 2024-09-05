# manytoon-scrapper

A fun project for scraping manga images from Manytoon.

## Endpoints

### `/api/images/:manhwaName/chapter-:chapterNumber`

Fetches a list of image URLs for a specific manhwa chapter.

**Example URL:**

```
http://localhost:3000/api/images/your-creepy-bucketlist/chapter-1
```

**Response Example:**

```json
{
  "imageUrls": [
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/001.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/002.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/003.jpg",
    // More URLs...
  ],
  "processedImageUrls": [
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F001.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F002.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F003.jpg",
    // More URLs...
  ]
}
```

### `/api/image`

Proxies and serves images from Manytoon.

**Example URL:**

```
http://localhost:3000/api/image?url=https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/024.jpg
```

When you enter the URL, the image will be displayed directly.

