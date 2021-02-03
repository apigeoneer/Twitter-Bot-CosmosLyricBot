console.log('The bot is starting');

/**
 * Importing the twit module
 */
let Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

/**
 * Searching twitter for all tweets containing the word 'banana' since July 11, 2011
 */
let params = {
    q: '#xoxoxo',
    count: 10,
}

T.get('search/tweets', params, gotData)

// Callback func - will be triggered when the data has been returned from the api
function gotData(err, data, response) {
    // statuses <- an array of objects (each obj has info about 1 tweet)
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
};
