# Manytoon-Scrapper

A fun project for scraping manga images and details from Manytoon.

## Bug Fixes

- Fixed an issue where the `/api/image` endpoint returned an "Invalid image URL" error when processing certain image URLs. This was due to incorrect URL validation, which has now been corrected to properly handle valid URLs from Manytoon.

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

### `/api/:manhwaName/details`

Fetches details about a specific manhwa, including title, rating, genre, release year, and status.

**Example URL:**

```
http://localhost:3000/api/secret-hot-spring-inn/details
```

**Response Example:**

```json
{
  "title": "Secret Hot Spring Inn",
  "rating": "5",
  "ratingCount": "3",
  "genres": [
    "Drama",
    "Manhwa",
    "Romance"
  ],
  "status": "OnGoing",
  "releaseYear": "2024",
  "imageUrl": "https://manytoon.org/wp-content/uploads/2024/09/Secret-Hot-Spring-Inn-193x278-1.jpg"
}
```

### `/api/overview/:manhwaName`

Fetches an overview of a specific manhwa, including summary and latest chapters.

**Example URL:**

```
http://localhost:3000/api/overview/your-creepy-bucketlist
```

**Response Example:**

```json
{
  "summary": "A brief synopsis of the manhwa.",
  "chapters": [
    { "title": "Chapter 1", "url": "https://manytoon.com/comic/your-creepy-bucketlist/chapter-1/", "releaseDate": "2025-02-01" },
    { "title": "Chapter 2", "url": "https://manytoon.com/comic/your-creepy-bucketlist/chapter-2/", "releaseDate": "2025-02-02" }
  ]
}
```

### `/api/freemanga/:manhwaName/chapter-:chapterNumber`

Fetches a list of image URLs for a specific manhwa chapter from FreeManga.

**Example URL:**

```
http://localhost:3000/api/freemanga/your-creepy-bucketlist/chapter-1
```

**Response Example:**

```json
{
  "imageUrls": [
    "https://images.freemanga.me/manga3/your-creepy-bucketlist/chapter-1/001.jpg",
    "https://images.freemanga.me/manga3/your-creepy-bucketlist/chapter-1/002.jpg"
  ],
  "processedImageUrls": [
    "http://localhost:3000/api/image?url=https%3A%2F%2Fimages.freemanga.me%2Fmanga3%2Fyour-creepy-bucketlist%2Fchapter-1%2F001.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fimages.freemanga.me%2Fmanga3%2Fyour-creepy-bucketlist%2Fchapter-1%2F002.jpg"
  ]
}
```

