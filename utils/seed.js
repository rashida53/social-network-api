const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { sampleUsers } = require('./data');

console.time('seeding');

// connection.once('open', async () => {
//     await User.deleteMany({});


//     const users = [];

//     for (let i = 0; i < sampleUsers.length; i++) {
//         const newUser = {
//             username: sampleUsers[i].username,
//             email: sampleUsers[i].email,
//         };
//         users.push(newUser);
//     };

//     await User.collection.insertMany(users);

//     console.table(users);
//     console.timeEnd('seeding complete');
//     process.exit(0);
// });


connection.once('open', async () => {

    await User.deleteMany({});
    await Thought.deleteMany({});


    console.info('Seeding completed!');

    process.exit(0);
})