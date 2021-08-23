const launches = new Map();

const launch = {
   flightNumber: 103,
   mission: 'new heart exploration',
   rocket: 'Amerigo Vespucci',
   lauchDate: new Date('December 3, 2030'),
   destination: 'Kepler-442 b',
   customer: ['NASA', 'ZMT'],
   upcoming: true,
   success: true,
}

launches.set(launch.flightNumber, launch);

module.exports = {
   launches,
};