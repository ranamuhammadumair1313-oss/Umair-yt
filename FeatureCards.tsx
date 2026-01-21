
import React from 'react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "Ultra Fast",
      desc: "Get your videos in seconds with our optimized processing engines.",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Any Quality",
      desc: "Support for 4K, 1080p, 720p, and high-quality MP3 conversions.",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )
    },
    {
      title: "AI Analysis",
      desc: "Powered by Gemini to summarize video content before you download.",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl font-bold mb-4">{f.title}</h3>
            <p className="text-gray-400 font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
