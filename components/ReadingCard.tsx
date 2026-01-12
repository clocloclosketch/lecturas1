
import React from 'react';
import { ReadingData } from '../types';

interface ReadingCardProps {
  reading: ReadingData;
  onClick: (id: string) => void;
}

const ReadingCard: React.FC<ReadingCardProps> = ({ reading, onClick }) => {
  const colorMap: { [key: string]: string } = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    amber: 'bg-amber-600 hover:bg-amber-700',
    emerald: 'bg-emerald-600 hover:bg-emerald-700',
  };

  return (
    <div 
      onClick={() => onClick(reading.id)}
      className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={reading.imageUrl} 
          alt={reading.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <span className="text-white text-sm font-medium px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
            {reading.author}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{reading.title}</h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
          {reading.summary}
        </p>
        <button className={`w-full py-3 rounded-xl text-white font-semibold shadow-lg ${colorMap[reading.color]} transition-colors`}>
          Empezar Repaso
        </button>
      </div>
    </div>
  );
};

export default ReadingCard;
