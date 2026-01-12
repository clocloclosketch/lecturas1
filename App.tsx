
import React, { useState } from 'react';
import { readings } from './data/readings';
import { ReadingData, ReadingType } from './types';
import ReadingCard from './components/ReadingCard';
import QuizGame from './components/QuizGame';
import { generateSpeech } from './services/geminiService';

const App: React.FC = () => {
  const [selectedReading, setSelectedReading] = useState<ReadingData | null>(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);

  const handleListenSummary = async () => {
    if (!selectedReading) return;
    setIsGeneratingAudio(true);
    await generateSpeech(selectedReading.summary);
    setIsGeneratingAudio(false);
  };

  const colorMap: { [key: string]: string } = {
    indigo: 'text-indigo-600 bg-indigo-50',
    amber: 'text-amber-600 bg-amber-50',
    emerald: 'text-emerald-600 bg-emerald-50',
  };

  const btnColorMap: { [key: string]: string } = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    amber: 'bg-amber-600 hover:bg-amber-700',
    emerald: 'bg-emerald-600 hover:bg-emerald-700',
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSelectedReading(null); setIsGameActive(false); }}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">EduStudy</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <button onClick={() => { setSelectedReading(null); setIsGameActive(false); }} className="hover:text-indigo-600 transition-colors">Inicio</button>
            <a href="https://github.com" target="_blank" className="hover:text-indigo-600 transition-colors">Descargar en GitHub</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {!selectedReading ? (
            <>
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Potencia tu Memorización</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Resúmenes en audio generados por IA y juegos interactivos para repasar las lecturas clave de 3º de Primaria y Literatura.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {readings.map((reading) => (
                  <ReadingCard 
                    key={reading.id} 
                    reading={reading} 
                    onClick={(id) => setSelectedReading(readings.find(r => r.id === id) || null)} 
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button 
                onClick={() => { setSelectedReading(null); setIsGameActive(false); }}
                className="mb-6 flex items-center gap-2 text-slate-500 font-semibold hover:text-slate-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver
              </button>

              {isGameActive ? (
                <QuizGame 
                  questions={selectedReading.quiz} 
                  onClose={() => setIsGameActive(false)} 
                />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left Column: Summary Content */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-1">{selectedReading.title}</h2>
                          <p className="text-slate-500 font-medium">{selectedReading.author}</p>
                        </div>
                        <button 
                          onClick={handleListenSummary}
                          disabled={isGeneratingAudio}
                          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white shadow-lg transition-all ${btnColorMap[selectedReading.color]} ${isGeneratingAudio ? 'opacity-70 cursor-wait' : 'hover:-translate-y-1'}`}
                        >
                          {isGeneratingAudio ? (
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                          {isGeneratingAudio ? 'Generando Voz...' : 'Escuchar Resumen'}
                        </button>
                      </div>

                      <div className="prose prose-slate max-w-none">
                        <p className="text-lg leading-relaxed text-slate-700">
                          {selectedReading.summary}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${colorMap[selectedReading.color]}`}>📌</span>
                        Conceptos Clave
                      </h3>
                      <ul className="grid gap-4">
                        {selectedReading.keyPoints.map((point, i) => (
                          <li key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-100 transition-all">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-slate-700 font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Interaction Card */}
                  <div className="lg:col-span-1">
                    <div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl sticky top-28 overflow-hidden">
                      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">¿Listo para el desafío?</h3>
                        <p className="text-indigo-100 mb-8 leading-relaxed">
                          Pon a prueba lo que has aprendido con un juego interactivo de preguntas y respuestas. ¡Es la mejor forma de memorizar!
                        </p>
                        <button 
                          onClick={() => setIsGameActive(true)}
                          className="w-full py-4 bg-white text-indigo-900 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
                        >
                          Jugar Ahora
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">E</div>
            <span className="text-slate-800 font-bold">EduStudy</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Proyecto Educativo - Desarrollado para Claudia López García</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
