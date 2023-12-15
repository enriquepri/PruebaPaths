export const swaggerConfig = {
  swaggerDefinition: {
    info: {
      title: '',
      description: '',
      version: '1.0.1'
    },
    host: 'http:localhost:3030',
    basePath: '/api',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'token'
      }
    }
  },
  basedir: __dirname,
  files: ['./controller/*.*']
}
