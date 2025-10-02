import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import html2canvas from 'html2canvas';
import VerseCard from '../components/VerseCard';
import MoodButtons from '../components/MoodButtons';
import MusicPlayer from '../components/MusicPlayer';

type Verse = {
  reference: string;
  text: string;
};

type Reflection = {
  title: string;
  reflection: string;
  prayer: string;
};

export default function Home() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [reflection, setReflection] = useState<Reflection | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Fetch verse and reflection
  const fetchContent = async (mood: string | null = null) => {
    setLoading(true);
    try {
      const moodParam = mood ? `?mood=${mood}` : '';
      
      const [verseRes, reflectionRes] = await Promise.all([
        axios.get(`/api/verse${moodParam}`),
        axios.get(`/api/reflect${moodParam}`)
      ]);

      setVerse(verseRes.data);
      setReflection(reflectionRes.data);
      
      // Update background image
      setBackgroundImage(`https://source.unsplash.com/1600x900/?nature,peaceful&sig=${Date.now()}`);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchContent();
  }, []);

  // Handle mood selection
  const handleMoodSelect = (mood: string | null) => {
    setSelectedMood(mood);
    fetchContent(mood);
  };

  // Handle regenerate
  const handleRegenerate = () => {
    fetchContent(selectedMood);
  };

  // Handle download image
  const handleDownload = async () => {
    const card = document.getElementById('verse-card');
    if (!card) return;

    try {
      const canvas = await html2canvas(card, {
        backgroundColor: '#ffffff',
        scale: 2,
      });
      
      const link = document.createElement('a');
      link.download = `verse-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Seek God First - Daily Bible Verses</title>
        <meta name="description" content="Find peace and inspiration with daily Bible verses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="min-h-screen bg-cover bg-center bg-fixed transition-all duration-500"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(to bottom, #bfdbfe, #dbeafe)',
        }}
      >
        {/* Overlay */}
        <div className="min-h-screen bg-black/20 backdrop-blur-[2px]">
          <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <header className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
                Seek God First
              </h1>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow">
                Find peace and hope in His Word
              </p>
            </header>

            {/* Loading State */}
            {loading && (
              <div className="text-center text-white text-xl mb-8">
                Loading...
              </div>
            )}

            {/* Verse Card */}
            {verse && reflection && !loading && (
              <VerseCard verse={verse} reflection={reflection} />
            )}

            {/* Mood Buttons */}
            {!loading && (
              <MoodButtons
                selectedMood={selectedMood}
                onMoodSelect={handleMoodSelect}
              />
            )}

            {/* Action Buttons */}
            {!loading && (
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <button
                  onClick={handleRegenerate}
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Regenerate Verse
                </button>

                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Image
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Music Player */}
        <MusicPlayer />
      </main>
    </>
  );
}
