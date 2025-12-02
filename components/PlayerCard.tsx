import React from 'react';
import { PlayerStats } from '../types';

interface PlayerCardProps {
  name: string;
  rating: number;
  position: string;
  imageUrl: string;
  stats: PlayerStats;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ name, rating, position, imageUrl, stats }) => {
  return (
    <div className="relative w-80 h-[480px] mx-auto animate-float perspective-1000 group/card">
      {/* Golden Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 rounded-t-3xl rounded-b-xl border-4 border-yellow-200 shadow-2xl overflow-hidden animate-glow">
        
        {/* Card Pattern Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        
        {/* Top Info */}
        <div className="absolute top-8 left-5 flex flex-col items-center z-30">
          <span className="font-sports text-5xl text-blue-900 leading-none drop-shadow-sm">{rating}</span>
          <span className="font-condensed text-2xl text-blue-900 font-bold uppercase">{position}</span>
          <div className="w-10 h-10 mt-2 flex items-center justify-center bg-blue-900 rounded-full shadow-md">
            <span className="text-yellow-400 font-bold text-sm">CR7</span>
          </div>
          <div className="w-8 h-6 mt-2 flex items-center justify-center bg-white/20 rounded-sm overflow-hidden shadow-sm">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png" alt="Brazil" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>

        {/* Player Image - Larger Rectangular Area for the full photo */}
        <div 
          className="absolute top-8 right-5 w-48 h-60 z-20 transition-transform duration-300"
        >
             <div className="relative w-full h-full rounded-xl border-[3px] border-yellow-200/50 shadow-inner overflow-hidden bg-blue-900/20 backdrop-blur-sm">
               <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover"
               />
             </div>
        </div>

        {/* Name Plate */}
        <div className="absolute top-72 left-0 right-0 text-center z-30 mt-2">
          <h2 className="font-sports text-5xl uppercase tracking-widest text-blue-900 drop-shadow-lg mx-2">
            {name}
          </h2>
          <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent mx-auto mt-1 opacity-80"></div>
        </div>

        {/* Stats Grid */}
        <div className="absolute bottom-8 left-0 right-0 px-8 grid grid-cols-2 gap-x-6 gap-y-2 z-30">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl text-blue-900">{stats.pace}</span>
            <span className="text-blue-800 text-sm font-condensed uppercase tracking-tighter">VEL</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl text-blue-900">{stats.dribbling}</span>
            <span className="text-blue-800 text-sm font-condensed uppercase tracking-tighter">DRI</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl text-blue-900">{stats.shooting}</span>
            <span className="text-blue-800 text-sm font-condensed uppercase tracking-tighter">CHU</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl text-blue-900">{stats.defending}</span>
            <span className="text-blue-800 text-sm font-condensed uppercase tracking-tighter">DEF</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl text-blue-900">{stats.passing}</span>
            <span className="text-blue-800 text-sm font-condensed uppercase tracking-tighter">PAS</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl text-blue-900">{stats.physical}</span>
            <span className="text-blue-800 text-sm font-condensed uppercase tracking-tighter">FIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
