// We run a simple Webpack build to ensure that the code base follows Node ESM
// standards. Any error from Webpack will indicate a problem. This will catch
// cases like missing `.js` etensions in import specifiers, etc.

export default {
  entry: './build.js',
  output: {
    filename:  `esm-test-${Math.random()}.js`,
    path: '/tmp'
  },
  mode: 'development',
};
