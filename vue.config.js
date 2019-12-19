module.exports = {
  pages: {
    index: {
      entry: 'src/pages/main/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    wallpaper: {
      entry: 'src/pages/wallpaper/main.js',
      template: 'public/wallpaper.html',
      filename: 'wallpaper.html'
    }
  },
}