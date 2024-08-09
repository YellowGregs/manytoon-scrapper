# manytoon-scrapper
something that i did for fun


# Endpoints

- ## `/api/images/:manhwaName/chapter-:chapterNumber`

Example: `http://localhost:3000/api/images/your-creepy-bucketlist/chapter-1`


```json
{
  "imageUrls": [
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/001.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/002.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/003.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/004.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/005.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/006.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/007.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/008.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/009.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/010.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/011.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/012.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/013.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/014.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/015.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/016.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/017.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/018.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/019.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/020.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/021.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/022.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/023.jpg",
    "https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/024.jpg"
  ],
  "processedImageUrls": [
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F001.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F002.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F003.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F004.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F005.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F006.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F007.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F008.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F009.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F010.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F011.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F012.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F013.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F014.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F015.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F016.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F017.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F018.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F019.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F020.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F021.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F022.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F023.jpg",
    "http://localhost:3000/api/image?url=https%3A%2F%2Fmanytoon.com%2Fwp-content%2Fuploads%2FWP-manga%2Fdata%2Fmanga_6645adb9a383d%2F0b8ec3888b807c293372246a6b9e670a%2F024.jpg"
  ]
}

```

- ## `/api/image`

Example: `http://localhost:3000/api/image?url=https://manytoon.com/wp-content/uploads/WP-manga/data/manga_6645adb9a383d/0b8ec3888b807c293372246a6b9e670a/024.jpg`

- When entering the url a image will show that's all.
