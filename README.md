# Manytoon-Scrapper

A fun project for scraping manga images and details from Manytoon.

---

## 📂 Endpoints

Url if you dont want to use your own vercel: https://manytoon-scrapper.vercel.app

### `/api/latest?page=<number>`

Fetches the **latest manhwa updates** from Manytoon with pagination.

**Example URL:**
[http://localhost:3000/api/latest?page=3](http://localhost:3000/api/latest?page=3)


**Response Example:**
```json
{
  "page": 3,
  "next_page": "http://localhost:3000/api/latest?page=4",
  "prev_page": "http://localhost:3000/api/latest?page=2",
  "count": 36,
  "results": [
    {
      "title": "Love Potion Panic",
      "url": "https://manytoon.com/comic/love-potion-panic/",
      "cover_image": "https://manytoon.com/wp-content/uploads/2025/10/Love-Potion-Panic-Manhwa-193x278-1.jpg",
      "latest_chapter": {
        "name": "Chapter 13",
        "url": "https://manytoon.com/comic/love-potion-panic/chapter-13/"
      },
      "rating": "7.4"
    },
    {
      "title": "His Rose-Colored XXX",
      "url": "https://manytoon.com/comic/his-rose-colored-xxx/",
      "cover_image": "https://manytoon.com/wp-content/uploads/2025/10/His-Rose-Colored-XXX-Manhwa-193x278-1.jpg",
      "latest_chapter": {
        "name": "Chapter 23",
        "url": "https://manytoon.com/comic/his-rose-colored-xxx/chapter-23/"
      },
      "rating": "9.4"
    }
  ]
}
````

---

### `/api/images/:manhwaName/chapter-:chapterNumber`

Fetches all image URLs for a given manhwa chapter.

**Example URL:**

```
http://localhost:3000/api/images/your-creepy-bucketlist/chapter-1
```

**Response Example:**

```json
{
  "imageUrls": [
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/.../001.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/.../002.jpg"
  ],
  "processedImageUrls": [
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2F...%2F001.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2F...%2F002.jpg"
  ]
}
```

---

### `/api/image?url=<image_url>`

Proxies and serves images from Manytoon directly, bypassing CORS restrictions.

**Example URL:**

```
http://localhost:3000/api/image?url=https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/.../024.jpg
```

> 🖼️ When you open this URL, the image will display directly in your browser.

---

### `/api/:manhwaName/details`

Fetches metadata and details for a specific manhwa.

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
  "genres": ["Drama", "Manhwa", "Romance"],
  "status": "OnGoing",
  "releaseYear": "2024",
  "imageUrl": "https://manytoon.org/wp-content/uploads/2024/09/Secret-Hot-Spring-Inn-193x278-1.jpg"
}
```

---

## Setup

**Install dependencies**

```bash
npm install
```

**Run the development server**

```bash
npm run dev
```

**Build for production**

```bash
npm run build
npm start
```
