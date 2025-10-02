import type { NextApiRequest, NextApiResponse } from 'next';
import reflections from '../../data/reflections.json';

type Reflection = {
  title: string;
  reflection: string;
  prayer: string;
};

type ReflectionsData = {
  [key: string]: Reflection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reflection | { error: string }>
) {
  const { mood } = req.query;

  try {
    const reflectionsData = reflections as ReflectionsData;
    
    if (mood && typeof mood === 'string' && reflectionsData[mood]) {
      return res.status(200).json(reflectionsData[mood]);
    }

    // Return a random reflection if no mood specified
    const allMoods = Object.keys(reflectionsData);
    const randomMood = allMoods[Math.floor(Math.random() * allMoods.length)];
    
    return res.status(200).json(reflectionsData[randomMood]);
  } catch (error) {
    console.error('Error fetching reflection:', error);
    return res.status(500).json({ error: 'Failed to fetch reflection' });
  }
}
