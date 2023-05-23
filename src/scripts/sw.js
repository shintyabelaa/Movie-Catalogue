<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
import { precacheAndRoute } from 'workbox-precaching';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');
<<<<<<< HEAD

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };

  event.waitUntil(self.registration.showNotification(notification.title, notification.options));
=======
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
<<<<<<< HEAD

=======
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
  const chainPromise = async () => {
    console.log('Notification has been clicked');
    await self.clients.openWindow('https://www.dicoding.com/');
  };
<<<<<<< HEAD

=======
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
  event.waitUntil(chainPromise());
});
