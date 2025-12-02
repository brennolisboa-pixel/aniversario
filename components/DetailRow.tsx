import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DetailRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: string;
}

export const DetailRow: React.FC<DetailRowProps> = ({ icon: Icon, label, value, delay = '0s' }) => {
  return (
    <div 
      className="flex items-center bg-blue-900/50 border border-yellow-400/30 rounded-xl p-4 backdrop-blur-sm animate-slide-up hover:bg-blue-800/50 transition-colors duration-300"
      style={{ animationDelay: delay }}
    >
      <div className="bg-yellow-400 p-3 rounded-full mr-4 shadow-lg shadow-yellow-400/20">
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <div>
        <p className="text-yellow-400 text-xs font-condensed uppercase tracking-widest mb-0.5 opacity-80">{label}</p>
        <p className="text-white font-sports text-xl tracking-wide">{value}</p>
      </div>
    </div>
  );
};
