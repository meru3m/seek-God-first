import React from 'react';

interface MoodButtonsProps {
  selectedMood: string | null;
  onMoodSelect: (mood: string | null) => void;
}

const moods = ['Hope', 'Peace', 'Anxiety', 'Joy', 'Gratitude', 'Strength'];

const MoodButtons: React.FC<MoodButtonsProps> = ({ selectedMood, onMoodSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-8">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onMoodSelect(mood === selectedMood ? null : mood)}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-200
            transform hover:scale-105 shadow-md
            ${
              selectedMood === mood
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-blue-800 hover:bg-blue-100'
            }
          `}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodButtons;
