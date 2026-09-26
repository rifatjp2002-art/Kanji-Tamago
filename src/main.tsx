import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register Service Worker for PWA offline capabilities
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('Kanji Tamago PWA: New content available, reloading...');
  },
  onOfflineReady() {
    console.log('Kanji Tamago PWA: Ready for offline use!');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

