import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

<<<<<<< HEAD
  const wb = new WorkboxWindow.Workbox('/sw.bundle.js');
=======
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
