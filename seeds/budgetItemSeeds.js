const {BudgetItem} = require('../models');

const budgetItemData = [
    {
        BudgetCategoryId: 1,
        price: 900,
        description: 'Hotel cost for 9 days in Paris'
    },
    {
        BudgetCategoryId: 2,
        price: 800,
        description: 'Round trip tickets to Paris'
    },
    {
        BudgetCategoryId: 2,
        price: 120,
        description: '7 day train pass'
    },
    {
        BudgetCategoryId: 3,
        price: 1000,
        description: '~ $100 for food per day!'
    },
    {
        BudgetCategoryId: 4,
        price: 200,
        description: 'Spend the day around the Eiffel Tower!, head to the top'
    },
    {
        BudgetCategoryId: 5,
        price: 900,
        description: 'Hotel cost for 9 days in Paris'
    },
    {
        BudgetCategoryId: 6,
        price: 800,
        description: 'Round trip tickets to Paris'
    },
    {
        BudgetCategoryId: 6,
        price: 120,
        description: '7 day train pass'
    },
    {
        BudgetCategoryId: 7,
        price: 1000,
        description: '~ $100 for food per day!'
    },
    {
        BudgetCategoryId: 8,
        price: 40,
        description: `Entry cost for the Louvre`
    },
    {
        BudgetCategoryId: 8,
        price: 30,
        description: `Entry cost for the Musée d'Orsay`
    },
    {
        BudgetCategoryId: 8,
        price: 55,
        description: `Entry cost for the The Centre Pompidou`
    },
    {
        BudgetCategoryId: 9,
        price: 900,
        description: 'Hotel cost for 9 days in Paris'
    },
    {
        BudgetCategoryId: 10,
        price: 800,
        description: 'Round trip tickets to Paris'
    },
    {
        BudgetCategoryId: 10,
        price: 600,
        description: '9 days worth of uber rides around Paris'
    },
    {
        BudgetCategoryId: 11,
        price: 1500,
        description: '~ $100 for food per day! Plus money for smokes and caffeine  '
    },
    {
        BudgetCategoryId: 12,
        price: 2000,
        description: 'Money for all the SHOPPING!!!!'
    },
    {
        BudgetCategoryId: 13,
        price: 400,
        description: '9 day hostel cost for Paris'
    },
    {
        BudgetCategoryId: 14,
        price: 120,
        description: '7 day train pass'
    },
    {
        BudgetCategoryId: 15,
        price: 700,
        description: 'Food money for each day!'
    },
    {
        BudgetCategoryId: 16,
        price: 1000,
        description: 'Spending 9 days with my friends'
    },
    {
        BudgetCategoryId: 17,
        price: 300,
        description: '5 Day Seattle Hilton cost split 4 ways'
    },
    {
        BudgetCategoryId: 18,
        price: 700,
        description: `5 days worth of food in seattle ain't cheap`
    },
    {
        BudgetCategoryId: 19,
        price: 1200,
        description: 'New Graphics Card'
    },
    {
        BudgetCategoryId: 19,
        price: 500,
        description: 'New keyboards and mice'
    },
    {
        BudgetCategoryId: 20,
        price: 300,
        description: '5 Day Seattle Hilton cost split 4 ways'
    },
    {
        BudgetCategoryId: 21,
        price: 700,
        description: `5 days worth of food in seattle ain't cheap`
    },
    {
        BudgetCategoryId: 22,
        price: 800,
        description: 'New video game themed swag'
    },
    {
        BudgetCategoryId: 23,
        price: 300,
        description: '5 Day Seattle Hilton cost split 4 ways'
    },
    {
        BudgetCategoryId: 24,
        price: 700,
        description: `5 days worth of food in seattle ain't cheap`
    },
    {
        BudgetCategoryId: 25,
        price: 1000,
        description: `Pins are like pokemon, I must collect them all!`
    },
    {
        BudgetCategoryId: 26,
        price: 300,
        description: '5 Day Seattle Hilton cost split 4 ways'
    },
    {
        BudgetCategoryId: 27,
        price: 700,
        description: `5 days worth of food in seattle ain't cheap`
    },
    {
        BudgetCategoryId: 28,
        price: 400,
        description: `Forgot to bring my board games so i have to buy a bunch more so we have stuff to do!`
    },
    {
        BudgetCategoryId: 29,
        price: 400,
        description: `Cost for 6 days in Tijuana beach house`
    },
    {
        BudgetCategoryId: 30,
        price: 200,
        description: `Cost for 6 days worth of tacos in Tijuana! They be cheap`
    },
    {
        BudgetCategoryId: 31,
        price: 600,
        description: `Tijuana flight is super expensive!`
    },
    {
        BudgetCategoryId: 32,
        price: 300,
        description: `Gotta spend money on beer and tequila while in Mexico baby!!`
    },
    {
        BudgetCategoryId: 33,
        price: 400,
        description: `Cost for 6 days in Tijuana beach house`
    },
    {
        BudgetCategoryId: 34,
        price: 1000,
        description: `Cost for 6 days worth of tacos in Tijuana! They be cheap but I eat a lot!`
    },
    {
        BudgetCategoryId: 35,
        price: 600,
        description: `Tijuana flight is super expensive!`
    },
    {
        BudgetCategoryId: 36,
        price: 600,
        description: `Gotta spend money on beer and tequila while in Mexico baby!!`
    },
    {
        BudgetCategoryId: 37,
        price: 400,
        description: `Cost for 6 days in Tijuana beach house`
    },
    {
        BudgetCategoryId: 38,
        price: 400,
        description: `Cost for 6 days worth of tacos in Tijuana! They be cheap`
    },
    {
        BudgetCategoryId: 39,
        price: 600,
        description: `Tijuana flight is super expensive!`
    },
    {
        BudgetCategoryId: 40,
        price: 300,
        description: `Gotta spend money on beer and tequila while in Mexico baby!!`
    },
    {
        BudgetCategoryId: 41,
        price: 400,
        description: `Cost for 6 days in Tijuana beach house`
    },
    {
        BudgetCategoryId: 42,
        price: 400,
        description: `Cost for 6 days worth of tacos in Tijuana! They be cheap`
    },
    {
        BudgetCategoryId: 43,
        price: 600,
        description: `Tijuana flight is super expensive!`
    },
    {
        BudgetCategoryId: 44,
        price: 300,
        description: `Gotta spend money on beer and tequila while in Mexico baby!!`
    },
    {
        BudgetCategoryId: 45,
        price: 700,
        description: `Hotels in Italy be expensive! this is for 6 days!`
    },
    {
        BudgetCategoryId: 46,
        price: 100,
        description: `Food and drinks on the beach all day baby!!!`
    },
    {
        BudgetCategoryId: 47,
        price: 1300,
        description: `Round trip tickets to Italy hurt my wallet!`
    },
    {
        BudgetCategoryId: 48,
        price: 900,
        description: `All I will eat is pasta! Pasta budget is big!!`
    },
    {
        BudgetCategoryId: 49,
        price: 700,
        description: `Hotels in Italy be expensive! this is for 6 days!`
    },
    {
        BudgetCategoryId: 50,
        price: 300,
        description: `Train to the leaning towers of Piza and food for day`
    },
    {
        BudgetCategoryId: 51,
        price: 1300,
        description: `Round trip tickets to Italy hurt my wallet!`
    },
    {
        BudgetCategoryId: 52,
        price: 900,
        description: `Pizza is my favorite food, all I want is pizza!!`
    },
    {
        BudgetCategoryId: 53,
        price: 700,
        description: `Hotels in Italy be expensive! this is for 6 days!`
    },
    {
        BudgetCategoryId: 54,
        price: 200,
        description: `Train ride to and from the Vatican, and food for the day!`
    },
    {
        BudgetCategoryId: 55,
        price: 1300,
        description: `Round trip tickets to Italy hurt my wallet!`
    },
    {
        BudgetCategoryId: 56,
        price: 900,
        description: `Pizza or pasta not sure all I know is love Italian food!!!`
    },
    {
        BudgetCategoryId: 57,
        price: 700,
        description: `Hotels in Italy be expensive! this is for 6 days!`
    },
    {
        BudgetCategoryId: 58,
        price: 200,
        description: `Train to and from Rome, food for the day!!`
    },
    {
        BudgetCategoryId: 59,
        price: 1300,
        description: `Round trip tickets to Italy hurt my wallet!`
    },
    {
        BudgetCategoryId: 60,
        price: 900,
        description: `I don't care as long as its Italian food!!!`
    },

];

const seedBudgetItem = () => BudgetItem.bulkCreate(budgetItemData);

module.exports = seedBudgetItem;