const http = require('http');
const cluster = require('cluster')
const os = require('os')

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

// NODE cluster module

if (cluster.isMaster) {
   console.log('master has been started...');
   const NUM_Workers = os.cpus().length;
   for (let i = 0; i < NUM_Workers; i++){
      cluster.fork();
   }
} else{
   console.log('Worker process started.');
   startServer();
}
