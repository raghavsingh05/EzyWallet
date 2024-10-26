module.exports = {
  // ... existing config ...
  webpack: (config, { isServer }) => {
    // Ye line add karo
    config.externals = [...config.externals, '@mapbox/node-pre-gyp'];
    
    return config;
  },
};
