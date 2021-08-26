const Comment = require('../models/Comment');

const commentData = [
    {
        content: "What are we going to do in Paris for 9 days?",
        UserId:3,
        TripId:1
    },
    {
        content: "I'm super excited for PAX this year!",
        UserId:1,
        TripId:2
    },
    {
        content: "Early Christmas in Tijuana!",
        UserId:2,
        TripId:3
    },
    {
        content: "I can't wait to ride a gondola around Venice!",
        UserId:3,
        TripId:4
    },
    {
        content: "The Eifel Tower is so cool! I can't wait to see it in person!",
        UserId:2,
        TripId:1
    },
    {
        content: "This is the first year I've been able to get PAX passes in a long time! Super excited",
        UserId:2,
        TripId:2
    },
    {
        content: "Can't wait to see you guys there!",
        UserId:3,
        TripId:2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;