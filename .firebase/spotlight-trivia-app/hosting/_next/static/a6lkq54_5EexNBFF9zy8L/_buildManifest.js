(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': [s, 'static/chunks/pages/index-19dfc0fdf0c3b487.js'],
    '/404': [
      'static/chunks/78e521c3-19390034046d4528.js',
      s,
      'static/chunks/pages/404-59a4e91697ef80cf.js',
    ],
    '/_error': ['static/chunks/pages/_error-8353112a01355ec2.js'],
    '/components': [
      'static/chunks/31664189-3c54e41febee8096.js',
      'static/chunks/d64684d8-f3d867a9ada16866.js',
      s,
      'static/chunks/892-f4ffc65d98abca14.js',
      'static/chunks/pages/components-ea52e70f72480686.js',
    ],
    sortedPages: ['/', '/404', '/_app', '/_error', '/components'],
  };
})('static/chunks/292-614e527cb248c895.js')),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
