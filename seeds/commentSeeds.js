const {Comment} = require('../models');

const commentData = [
    {
        TripId:1,
        content: "What are we going to do in Paris for 9 days?",
        UserId:3,
    },
    {
        TripId:2,
        content: "I'm super excited for PAX this year!",
        UserId:1,
    },
    {
        TripId:3,
        content: "Early Christmas in Tijuana!",
        UserId:2,
    },
    {
        TripId:4,
        content: "I can't wait to ride a gondola around Venice!",
        UserId:3,
    },
    {
        TripId:1,
        content: "The Eifel Tower is so cool! I can't wait to see it in person!",
        UserId:2,
    },
    {
        TripId:2,
        content: "This is the first year I've been able to get PAX passes in a long time! Super excited",
        UserId:2,
    },
    {
        TripId:2,
        content: "Can't wait to see you guys there!",
        UserId:3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;