console.log('bot3 starting!')
/**
 * Retweets the tweets that have a hashtag
 */

let Twit = require('twit')
let config = require('./config')
let T = new Twit(config)

// // Setting up a user stream
// let stream = T.stream('user')

// Search for the tweets w/ #CosmosLyricBot
 let params = {
    q: '#CosmosLyricBot OR #CosmosLyricsBot #cosmoslyricbot OR #cosmoslyricsbot OR #COSMOSLYRICBOT OR #COSMOSLYRICSBOT OR #Cosmoslyricbot OR #Cosmoslyricsbot'
        , result_type: 'recent'
};

function retweetHashtag() {

    T.get('search/tweets', params, (err, data) => {
        // log out any errors & responses
        console.log(error, data)
        if (!err) {
            // grab the id of the tweet to be retweeted
            let retweetId = data.statuses[0].id_str;
            // tell Twitter we want to retweet the tweet if retweetId
            T.post('statuses/retweet/' + retweetId, {}, (error, response) => {
                if(response) {
                    console.log("Retweeted a tweet w/ #CosmosArtBot!");
                } else if(error) {
                    console.log("Failed to retweet a tweet w/ #CosmosArtBot!");
                }
            });
        } else {
            console.log("Error w/ hashtag serach! Failed to retweet!", error);
        }
    });

    // try to retweet as soon as the program is run
    retweetHashtag();
    // & every 15 mins
    setInterval(retweetHashtag, 1000*60*15);
}

