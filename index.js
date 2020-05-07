// import { fifaData } from './fifa.js';
const fifaData = require('./fifa.js');
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 



(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function indexSearch(array, year, search){
    let newArray =[];
    for (let i= 0; i < array.length; i++){
        if(array[i]['Year'] === year && array[i]['Stage'] === 'Final'){
        newArray.push(array[i][search]);
        }
    }
    return newArray;
};

// const searchA = 'Home Team Name';
// const searchB = 'Away Team Name';
// const searchC = 'Home Team Goals';
// const searchD = 'Away Team Goals';
// const searchE = 'Win conditions';

// console.log(indexSearch(fifaData, 2014, searchA));
// console.log(indexSearch(fifaData, 2014, searchB));
// console.log(indexSearch(fifaData, 2014, searchC));
// console.log(indexSearch(fifaData, 2014, searchD));
// console.log(indexSearch(fifaData, 2014, searchE));

function indexSearch(array, year){
    let newArray =[];
    for (let i= 0; i < array.length; i++){
        if(array[i]['Year'] === year && array[i]['Stage'] === 'Final'){
        newArray.push(array[i]['Home Team Name']);
        newArray.push(array[i]['Away Team Name']);
        newArray.push(array[i]['Home Team Goals']);
        newArray.push(array[i]['Away Team Goals']);
        newArray.push(array[i]['Win conditions']);
        }
    }
    return newArray;
};

const worldCupFinal = fifaData.filter(match => match.Year === 2014 && match.Stage === 'Final')[0];
console.log(worldCupFinal['Home Team Name']);
console.log(worldCupFinal['Away Team Name']);
console.log(worldCupFinal['Home Team Goals']);
console.log(worldCupFinal['Away Team Goals']);
console.log(worldCupFinal['Win conditions'].split(' ')[0]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(match => match.Stage = 'Final');
};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    return cb(fifaData).map(match => match.Year);
};


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
return cb(getFinals).map(match => {
        if (match['Home Team Goals'] > match['Away Team Goals']){
            return match['Home Team Name'];
        } else {
            return match['Away Team Name'];
        }
    });
};

console.log(getWinners(getfinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    const year = cb2(getFinals);
    return cb1(getFinals).map((teamName, index) => `In ${year[index]}, ${teamName} won the world cup!` )
};

getWinnersByYear();

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    return get

};

// function getCountryWins (data, teamInitials) {
//     data.reduce(teamInitials, ) = > {
//         Match.Stage === "Finals" ? 
//     }
//     return 
// };
  consol.log(getCountryWins(fifaData, USA)


/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTeamArray = data.map(data['Home Team Goals']);
    let awayTeamArray = data.map(data['Away Team Goals']);
    data.map()
    

};

getAverageGoals();


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` 
and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` 
and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
