
function getPublicPath() {
  switch(process.env.NODE_ENV) {
    case 'gh-production':
      return '/jjocram.github.io/';
    case 'glab-production':
      return '/jjocram.gitlab.io/';
    default:
      return '/test';
  }
}

module.exports = {
  publicPath: getPublicPath(),
  css: {
    extract: true
  }
}
