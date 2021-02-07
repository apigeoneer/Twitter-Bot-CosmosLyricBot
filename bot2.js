console.log('The bot is starting');
/**
 * Tweets everytime someone follows the bot
 */

let Twit = require('twit');

let config = require('./config');
let T = new Twit(config);

// Setting up a user stream (user: @CosmosArtBot i.e. the bot itself)
var stream = T.stream('statuses/filter', { track: '@CosmosArtBot' });
// Anytime someone follows me
stream.on('follow', tweetFollowReply);

function tweetFollowReply(eventMsg) {
    console.log("Follow Event!");
    let name = eventMsg.source.name;
    let screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + 'you rock!🔗🤟');
}





// // make a tweet every 12 hrs
// tweetIt();
// setInterval(tweetIt, 1000*60*60*12);

function tweetIt(tweet_text) {

    // let r = Math.floor(Math.random()*100);

    // let tweet_text = { 
    //     status: 'Tweet no.' + r + ' #lyric'
    // }
    
    function postData(err, data, response) {
        if(err) {
            console.log(err, data)
        } else {
            console.log("Tweeted!")
        }
    }
    
    T.post('statuses/update', tweet_text, postData)
}
