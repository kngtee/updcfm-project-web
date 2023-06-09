const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
  ? env.ASPNETCORE_URLS.split(';')[0]
  : 'https://localhost:60205';

const context = [
  '/weatherforecast',
  '/api/auths',
  '/api/residents',
  '/api/residents/clusters',
  '/api/residents/clusters/:id/estates',
  '/api/residents/estates/:id/units',
  '/api/interventionjobs',
  '/api/interventionjobs/:id',
  '/api/staffs',
  '/api/clusters',
  '/api/estates',
];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive',
    },
  });

  app.use(appProxy);
};
