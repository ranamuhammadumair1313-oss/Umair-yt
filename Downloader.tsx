
import React, { useState } from 'react';
import { analyzeYouTubeLink, VideoInfo } from '../services/gemini';

const Downloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [analysis, setAnalysis] = useState<VideoInfo | null>(null);
  const [progress, setProgress] = useState(0);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      alert('Please enter a valid YouTube URL');
      return;
    }

    setStatus('loading');
    setProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    // AI Analysis bonus
    const videoData = await analyzeYouTubeLink(url);
    
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setAnalysis(videoData);
      setStatus('success');
    }, 2000);
  };

  const reset = () => {
    setUrl('');
    setStatus('idle');
    setAnalysis(null);
    setProgress(0);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-sm">
        {status === 'idle' || status === 'loading' ? (
          <form onSubmit={handleDownload} className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste YouTube Link (e.g., https://youtube.com/watch?v=...)"
                className="w-full bg-[#2a2a2a] text-white px-6 py-5 rounded-2xl border-2 border-transparent focus:border-red-600 outline-none transition-all text-lg pr-16"
                disabled={status === 'loading'}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center space-x-3 ${
                status === 'loading' 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-red-600 hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/20'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Fetching Video Data... {progress}%</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Now</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-500 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Video Processed Successfully!
              </h2>
              <button 
                onClick={reset}
                className="text-gray-400 hover:text-white underline text-sm"
              >
                Download another
              </button>
            </div>

            {analysis && (
              <div className="bg-[#2a2a2a] p-6 rounded-2xl space-y-4">
                <h3 className="text-lg font-semibold text-red-500">AI Video Insights (umair.pk)</h3>
                <div className="text-gray-300 leading-relaxed text-sm max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {analysis.description}
                </div>
                {analysis.sources.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-bold">References Found:</p>
                    <div className="flex flex-wrap gap-2">
                      {analysis.sources.slice(0, 3).map((s, idx) => (
                        <a 
                          key={idx} 
                          href={s.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-[#1a1a1a] px-3 py-1 rounded-full text-xs hover:text-red-500 border border-white/5"
                        >
                          {s.title.length > 25 ? s.title.substring(0, 25) + '...' : s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-[#2a2a2a] p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold">MP4 Video (1080p)</p>
                    <p className="text-xs text-gray-400">High Definition</p>
                  </div>
                  <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700">Download</button>
               </div>
               <div className="bg-[#2a2a2a] p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold">MP4 Video (720p)</p>
                    <p className="text-xs text-gray-400">Standard HD</p>
                  </div>
                  <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700">Download</button>
               </div>
               <div className="bg-[#2a2a2a] p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold">MP3 Audio</p>
                    <p className="text-xs text-gray-400">320kbps Quality</p>
                  </div>
                  <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700">Download</button>
               </div>
               <div className="bg-[#2a2a2a] p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold">WEBM (4K)</p>
                    <p className="text-xs text-gray-400">Ultra High Def</p>
                  </div>
                  <button className="bg-gray-600 px-4 py-2 rounded-lg text-sm font-bold cursor-not-allowed opacity-50">Locked</button>
               </div>
            </div>
            
            <p className="text-center text-xs text-gray-500 italic">
              Note: This is a prototype downloader interface. Actual video streaming requires a server-side proxy for final delivery.
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-12 text-center text-gray-500 text-sm">
        Trusted by 100K+ users daily for fast content saving.
      </div>
    </div>
  );
};

export default Downloader;
