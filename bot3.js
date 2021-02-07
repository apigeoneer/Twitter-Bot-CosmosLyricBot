console.log('bot3 starting!')
/**
 * Retweets the tweets that w/ a particular hashtag
 */

const Twit = require('twit')
const config = require('./config')
const T = new Twit(config)

// // Setting up a user stream
// let stream = T.stream('user') *DEPRICATED, *NOT_REQUIRED




const retweet = () => {
    // Search for the tweets w/ your #
    let params = {
        q: '#CosmosLyrics',
        result_type: 'recent',
        lang: 'en'
    };

    T.get('search/tweets', params, (err, data) => {
        console.log('Searching #s...');
        
        // grab the id of the tweet to be retweeted
        let retweetId = data.statuses[0].id_str;

        if (err) {
            console.log("Error w/ # serach! Failed to retweet!", err);
        }

        // tell Twitter we want to retweet the tweet if retweetId
        T.post('statuses/retweet/:id', { id: retweetId }, (err, response) => {
            if(err) {
                console.log("Failed to retweet a tweet w/ your # !");
            }
            console.log("Retweeted a tweet w/ your # !"); 
        });
    });
};

// try to retweet as soon as the program is run
retweet();
// & every 1 min
setInterval(retweet, 1000*60);