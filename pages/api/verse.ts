import type { NextApiRequest, NextApiResponse } from 'next';
import verses from '../../data/verses.json';

type Verse = {
  reference: string;
  text: string;
};

type VersesData = {
  [key: string]: Verse[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Verse | { error: string }>
) {
  const { mood } = req.query;

  try {
    const versesData = verses as VersesData;
    
    if (mood && typeof mood === 'string') {
      // Get verses for specific mood
      const moodVerses = versesData[mood];
      if (moodVerses && moodVerses.length > 0) {
        const randomIndex = Math.floor(Math.random() * moodVerses.length);
        return res.status(200).json(moodVerses[randomIndex]);
      }
    }

    // Get random verse from all moods
    const allMoods = Object.keys(versesData);
    const randomMood = allMoods[Math.floor(Math.random() * allMoods.length)];
    const moodVerses = versesData[randomMood];
    const randomIndex = Math.floor(Math.random() * moodVerses.length);
    
    return res.status(200).json(moodVerses[randomIndex]);
  } catch (error) {
    console.error('Error fetching verse:', error);
    return res.status(500).json({ error: 'Failed to fetch verse' });
  }
}
