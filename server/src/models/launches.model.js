const launches = new Map();
let latestFlightNumber = 100;
const launch = {
   flightNumber: 100,
   mission: 'new heart exploration',
   rocket: 'Amerigo Vespucci',
   launchDate: new Date('December 3, 2030'),
   target: 'Kepler-442 b',
   customers: ['NASA', 'ZMT'],
   upcoming: true,
   success: true,
}

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
   return launches.has(launchId);
}

function getAllLaunches() {
   return Array.from(launches.values());
}

function addNewLaunch(launch){
   latestFlightNumber++;
   launches.set(
      latestFlightNumber,
      Object.assign(launch, {
         flightNumber: latestFlightNumber,
         customers: ['NASA', 'MICHELE'],
         upcoming: true,
         success: true,
      })
   )
};

function abortLaunchById(launchId) {
   const aborted = launches.get(launchId);
   aborted.upcoming = false;
   aborted.success = false;
   return aborted;
}

module.exports = {
   existsLaunchWithId,
   getAllLaunches,
   addNewLaunch,
   abortLaunchById
};