import withPWA from '@ducanh2912/next-pwa';

const isDevelopment = process.env.NODE_ENV === 'development';

const withPWAConfig = (nextConfig = {}) => {
  return withPWA({
    pwa: {
      disable: isDevelopment,
      dest: 'public',
      register: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts',
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        {
          urlPattern: /\.(?:js)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'javascript',
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60 * 60 * 24, // 1 day
            },
          },
        },
        {
          urlPattern: /\.(?:css)$/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'stylesheets',
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60 * 60 * 24, // 1 day
            },
          },
        },
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'others',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24, // 1 day
            },
          },
        },
      ],
    },
  })(nextConfig);
};

const nextConfig = {
  // Your Next.js configuration options here...
};

export default withPWAConfig(nextConfig);
