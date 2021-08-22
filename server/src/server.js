const http = require('http');

const app = require('./app');

const planetModel = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


async function startServer() {
  await planetModel.loadPlanetsData();
   server.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
   });
}

startServer();