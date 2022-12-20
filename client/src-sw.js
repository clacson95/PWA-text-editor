const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { StaleWhileRevalidate, CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

if (process.env.NODE_ENV === "production") {
  precacheAndRoute(self.__WB_MANIFEST);
}

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// cache warming
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);


// reference this website
// https://developer.chrome.com/docs/workbox/modules/workbox-strategies/

const cacheName = "staticResources";

const matchCallback = ({ request }) => {
  console.log(request);
  return request.destination === "style" || request.destination === "script";
};

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);


registerRoute(
  ({ request }) =>
    ["style", "script", "worker"].includes(request.destination) === "image",

  new CacheFirst({

    cacheName: "image-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),

      // The "ExpirationPlugin" plugin will cache responses with these headers to a maximum-age of 30 days
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],

  })
);