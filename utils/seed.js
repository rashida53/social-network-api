const connection = require('../../config/connection');
const User = require('../User');
const Thought = require('../Thought');
const { sampleUsers } = require('./data');

console.time('seeding');


connection.once('open', async () => {

    await User.deleteMany({});
    await Thought.deleteMany({});


    console.info('Seeding completed!');

    process.exit(0);
})