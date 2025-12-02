import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, CheckCircle, Navigation, PartyPopper, Star } from 'lucide-react';
import { PlayerCard } from './components/PlayerCard';
import { DetailRow } from './components/DetailRow';
import { PlayerStats } from './types';

// The user's image has been converted to Base64 and embedded directly here.
const BERNARDO_PHOTO_URL = "data:image/jpeg;base64,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";

const CR7_PHOTO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/600px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg";

const App: React.FC = () => {
  const [isRsvped, setIsRsvped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Bernardo's "Stats" for the card
  const bernardoStats: PlayerStats = {
    pace: 99,     // Energy
    shooting: 99, // Goals/Party
    passing: 99,  // Sharing
    dribbling: 95,
    defending: 90,
    physical: 100 // Growing up strong
  };

  const handleRsvp = () => {
    setIsRsvped(true);
    setShowConfetti(true);
    // Reset confetti after animation
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const openMap = () => {
    // Escola Domingo Sávio search query
    window.open("https://www.google.com/maps/search/?api=1&query=Escola+Domingo+Sávio", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 pb-20 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/20 via-blue-950/0 to-transparent z-0 pointer-events-none"></div>
      
      {/* Confetti Effect Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${0.5 + Math.random()}s`,
                            animationDelay: `${Math.random()}s`
                        }}
                    ></div>
                ))}
            </div>
            <div className="font-sports text-6xl text-yellow-400 animate-bounce drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                SIIUUUU!
            </div>
        </div>
      )}

      {/* Main Content Container */}
      <main className="max-w-md mx-auto px-6 py-8 relative z-10 flex flex-col items-center">
        
        {/* Header Section with CR7 Theme */}
        <div className="w-full text-center mb-6 animate-slide-up">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <span className="text-yellow-400 font-bold tracking-widest text-xs bg-blue-800 px-3 py-1 rounded-full uppercase border border-yellow-400/30 shadow-lg">
                    Convite de Aniversário
                </span>
            </div>

            {/* CR7 Badge */}
            <div className="flex justify-center items-center gap-3 mb-4 bg-blue-900/40 p-2 rounded-xl border border-yellow-400/20 backdrop-blur-sm mx-auto w-fit">
                <div className="w-12 h-12 rounded-full border-2 border-yellow-400 overflow-hidden shadow-lg relative">
                     <img src={CR7_PHOTO_URL} alt="Cristiano Ronaldo" className="w-full h-full object-cover" />
                </div>
                <div className="text-left pr-2">
                    <div className="flex items-center gap-1">
                        <p className="text-yellow-400 font-sports text-lg leading-none">CRISTIANO</p>
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    </div>
                    <p className="text-blue-200 text-[10px] font-condensed uppercase tracking-wider">Tema da Festa</p>
                </div>
            </div>

            <h1 className="font-sports text-6xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 drop-shadow-sm tracking-wide leading-tight">
            BERNARDO
            </h1>
            
            <div className="bg-gradient-to-r from-blue-900/0 via-yellow-400/20 to-blue-900/0 py-2 mt-2">
                <p className="font-condensed text-xl text-white tracking-widest uppercase">
                    Vai fazer 7 anos!
                </p>
                <p className="text-yellow-300 font-condensed text-sm mt-1 uppercase tracking-wider opacity-90">
                    O maior fã do CR7 está completando 7 anos!
                </p>
            </div>
        </div>

        {/* The Star Player Card */}
        <div className="mb-10 w-full flex justify-center scale-100 hover:scale-[1.02] transition-transform duration-300">
            <PlayerCard 
                name="BERNARDO"
                rating={7}
                position="ATA" // Atacante (Forward)
                imageUrl={BERNARDO_PHOTO_URL} 
                stats={bernardoStats}
            />
        </div>
        
        {/* Call to Action Text */}
        <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-sports text-3xl text-yellow-400 uppercase leading-none mb-2">
                Você foi escalado<br/>para o meu time!
            </h2>
            <p className="text-blue-200 font-condensed text-lg">
                Venha comemorar essa grande vitória.
            </p>
        </div>

        {/* Details Section */}
        <div className="w-full space-y-4 mb-10">
            <DetailRow 
                icon={Calendar} 
                label="Data da Partida" 
                value="04 de Dezembro (quarta-feira)" 
                delay="0.3s"
            />
             <DetailRow 
                icon={MapPin} 
                label="Estádio (Local)" 
                value="Escola Domingo Sávio" 
                delay="0.4s"
            />
             <div className="flex items-center bg-blue-900/50 border border-yellow-400/30 rounded-xl p-4 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="bg-yellow-400 p-3 rounded-full mr-4 shadow-lg shadow-yellow-400/20">
                     <div className="w-6 h-6 flex items-center justify-center font-bold text-blue-900">7</div>
                </div>
                <div>
                    <p className="text-yellow-400 text-xs font-condensed uppercase tracking-widest mb-0.5 opacity-80">Camisa</p>
                    <p className="text-white font-sports text-xl tracking-wide">Traga sua alegria!</p>
                </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 pb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            
            {/* Map Button */}
            <button 
                onClick={openMap}
                className="w-full group relative bg-blue-800 hover:bg-blue-700 text-white font-condensed font-bold text-xl py-4 rounded-xl border-2 border-blue-600 transition-all active:scale-95 flex items-center justify-center uppercase tracking-wider"
            >
                <Navigation className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Como Chegar
            </button>

            {/* RSVP Button */}
            <button 
                onClick={handleRsvp}
                disabled={isRsvped}
                className={`w-full relative overflow-hidden font-condensed font-bold text-xl py-4 rounded-xl border-b-4 transition-all active:scale-95 flex items-center justify-center uppercase tracking-wider shadow-xl ${
                    isRsvped 
                    ? 'bg-green-600 border-green-800 text-white cursor-default' 
                    : 'bg-yellow-400 hover:bg-yellow-300 border-yellow-600 text-blue-900'
                }`}
            >
                {isRsvped ? (
                    <>
                        <CheckCircle className="w-6 h-6 mr-2" />
                        Presença Confirmada
                    </>
                ) : (
                    <>
                        <PartyPopper className="w-6 h-6 mr-2 animate-pulse" />
                        Confirmar Presença
                    </>
                )}
                
                {/* Shine Effect */}
                {!isRsvped && (
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
                )}
            </button>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="absolute bottom-4 w-full text-center opacity-50">
        <p className="text-blue-300 text-xs font-condensed">TIME BERNARDO • CR7 LEGACY</p>
      </footer>

      {/* Custom Styles for Button Shine */}
      <style>{`
        @keyframes shine {
            100% {
                left: 125%;
            }
        }
        .animate-shine {
            animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
