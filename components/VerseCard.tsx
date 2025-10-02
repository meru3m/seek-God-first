import React from 'react';

interface VerseCardProps {
  verse: {
    reference: string;
    text: string;
  };
  reflection: {
    title: string;
    reflection: string;
    prayer: string;
  };
}

const VerseCard: React.FC<VerseCardProps> = ({ verse, reflection }) => {
  return (
    <div
      id="verse-card"
      className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12"
    >
      {/* Verse Section */}
      <div className="mb-8 text-center">
        <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4 leading-relaxed">
          &quot;{verse.text}&quot;
        </blockquote>
        <cite className="text-lg md:text-xl font-semibold text-blue-600 not-italic">
          — {verse.reference}
        </cite>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Reflection Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          {reflection.title}
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          {reflection.reflection}
        </p>
      </div>

      {/* Prayer Section */}
      <div className="mt-6 p-6 bg-blue-50 rounded-lg">
        <h4 className="text-xl font-semibold text-blue-900 mb-3">Prayer</h4>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed italic">
          {reflection.prayer}
        </p>
      </div>
    </div>
  );
};

export default VerseCard;
