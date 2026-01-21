
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-gray-500 text-sm">
        <div>
          <span className="text-xl font-bold text-white mb-2 block">umair<span className="text-red-600">.pk</span></span>
          <p>&copy; {new Date().getFullYear()} umair.pk. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Copyright Info</a>
        </div>

        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition-all">
            <span className="sr-only">Twitter</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </div>
          <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition-all">
            <span className="sr-only">Facebook</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-700">
        umair.pk is not affiliated with Google or YouTube. Users are responsible for complying with YouTube's Terms of Service.
      </div>
    </footer>
  );
};

export default Footer;
