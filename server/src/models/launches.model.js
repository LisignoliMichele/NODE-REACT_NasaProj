const launches = new Map();
let latestFlightNumber = 100;
const launch = {
   flightNumber: 100,
   mission: 'new heart exploration',
   rocket: 'Amerigo Vespucci',
   launchDate: new Date('December 3, 2030'),
   target: 'Kepler-442 b',
   customer: ['NASA', 'ZMT'],
   upcoming: true,
   success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
   return Array.from(launches.values());
}

function addNewLaunch(launch){
   latestFlightNumber++;
   launches.set(
      latestFlightNumber,
      Object.assign(launch, {
         flightNumber: latestFlightNumber,
         customer: ['NASA', 'MICHELE'],
         upcoming: true,
         success: true,
      })
   )
};

module.exports = {
   getAllLaunches,
   addNewLaunch
};