# Seek God First - Bible Verse App

A beautiful, modern web application that displays Bible verses with mood-based selection, reflections, prayers, and background music. Built with Next.js, TypeScript, and Tailwind CSS, and designed to be 100% free to host on Vercel.

![Seek God First App](https://github.com/user-attachments/assets/f2a64e8f-297b-4222-87c4-326f3d28e96d)

## 🎯 Features

- **Mood-Based Verse Selection**: Choose from 6 moods (Hope, Peace, Anxiety, Joy, Gratitude, Strength)
- **Random Verses**: Get a random Bible verse if no mood is selected
- **Inspirational Reflections**: Each verse includes a Problem-Agitate-Solution (PAS) style reflection
- **Prayers**: Personalized prayers for each mood
- **Beautiful Backgrounds**: Dynamic background images from Unsplash
- **Regenerate**: Get a new verse within the selected mood
- **Download as Image**: Export verse cards as PNG images
- **Background Music**: Optional calm instrumental music (Play/Pause toggle)
- **Mobile-Friendly**: Fully responsive design
- **Modern UI**: Clean, minimal design with frosted glass effects

## 🛠 Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Image Export**: html2canvas
- **API Routes**: Next.js API routes
- **Deployment**: Vercel (free tier)

## 📂 Project Structure

```
seek-god-first/
├── pages/
│   ├── index.tsx           # Main app page
│   ├── _app.tsx            # App wrapper
│   └── api/
│       ├── verse.ts        # Verse API (random or mood-based)
│       └── reflect.ts      # Reflection API
├── components/
│   ├── VerseCard.tsx       # Displays verse, reflection, prayer
│   ├── MoodButtons.tsx     # Mood selection buttons
│   └── MusicPlayer.tsx     # Background music player
├── data/
│   ├── verses.json         # Bible verses grouped by mood
│   └── reflections.json    # Reflections and prayers for each mood
├── public/
│   └── music/              # Background music files
├── styles/
│   └── globals.css         # Global styles with Tailwind
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meru3m/seek-God-first.git
cd seek-God-first
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🎵 Adding Background Music

1. Download a free calm piano/instrumental MP3 from:
   - [Free Music Archive](https://freemusicarchive.org/)
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary/music)
   - [Incompetech](https://incompetech.com/)

2. Place the MP3 file as `calm-piano.mp3` in the `public/music/` directory

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your app will be live in minutes with automatic HTTPS!

## 📖 Data Structure

### Verses (data/verses.json)

Each mood contains an array of verses:
```json
{
  "Hope": [
    {
      "reference": "Jeremiah 29:11",
      "text": "For I know the plans I have for you..."
    }
  ]
}
```

### Reflections (data/reflections.json)

Each mood has a reflection with title, reflection text, and prayer:
```json
{
  "Hope": {
    "title": "Hope Anchors the Soul",
    "reflection": "We all face moments...",
    "prayer": "Dear Lord, when I feel hopeless..."
  }
}
```

## 🎨 Customization

### Adding New Moods

1. Add verses to `data/verses.json`
2. Add reflection to `data/reflections.json`
3. The mood will automatically appear in the UI

### Changing Colors

Edit the Tailwind classes in the components:
- Mood buttons: `components/MoodButtons.tsx`
- Verse card: `components/VerseCard.tsx`

### Background Images

The app uses Unsplash Source API. To change the theme, edit the URL in `pages/index.tsx`:
```typescript
setBackgroundImage(`https://source.unsplash.com/1600x900/?nature,peaceful&sig=${Date.now()}`);
```

## 📱 Usage

1. **Browse Random Verses**: The app loads with a random verse
2. **Select a Mood**: Click any mood button to get relevant verses
3. **Regenerate**: Click "Regenerate Verse" for a new verse in the same mood
4. **Download**: Click "Download Image" to save the verse card as PNG
5. **Play Music**: Click the music button (bottom right) to play/pause background music

## 🙏 Bible Verses Included

The app includes 24+ Bible verses covering:
- **Hope**: Jeremiah 29:11, Romans 15:13, Psalm 42:11, 1 Peter 1:3
- **Peace**: John 14:27, Philippians 4:7, Isaiah 26:3, Colossians 3:15
- **Anxiety**: Philippians 4:6-7, 1 Peter 5:7, Matthew 6:34, Psalm 94:19
- **Joy**: Psalm 16:11, Nehemiah 8:10, Romans 15:13, John 16:24
- **Gratitude**: 1 Thessalonians 5:18, Psalm 100:4-5, Colossians 3:17, Ephesians 5:20
- **Strength**: Philippians 4:13, Isaiah 40:31, Psalm 46:1, 2 Corinthians 12:9

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more Bible verses
- Add new moods
- Improve reflections and prayers
- Enhance the UI/UX
- Fix bugs

## 📄 License

ISC License

## 🌟 Screenshots

### Main View
![Main View](https://github.com/user-attachments/assets/f2a64e8f-297b-4222-87c4-326f3d28e96d)

### Peace Mood Selected
![Peace Mood](https://github.com/user-attachments/assets/fcd57422-6656-4e66-9cc6-9188bb3b98c3)

## 💡 Future Enhancements

- [ ] Add search functionality for specific verses
- [ ] User favorites/bookmarks
- [ ] Share directly to social media
- [ ] Dark mode toggle
- [ ] More mood categories
- [ ] Daily verse notifications
- [ ] Multi-language support
- [ ] AI-generated reflections using HuggingFace API

## 🎯 Credits

- Bible verses from various translations
- Background images from [Unsplash](https://unsplash.com)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ for spreading God's Word**