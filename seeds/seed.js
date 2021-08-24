const seedTrips = require('./tripSeeds');
const seedUsers = require('./userSeeds');
const seedBudgets = require('./budgetSeeds');
const seedComments = require('./commentSeeds');
const seedPlans = require('./planSeeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTrips();
  console.log('\n----- TRIPS SEEDED -----\n');

  await seedPlans();
  console.log('\n----- PLANS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedBudgets();
  console.log('\n----- BUDGETS SEEDED -----\n');

  process.exit(0);
};

seedAll();