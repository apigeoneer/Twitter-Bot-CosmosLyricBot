console.log('bot3 starting!')
/**
 * Retweets the tweets that have a hashtag
 */

let Twit = require('twit')
let config = require('./config')
let T = new Twit(config)

// Setting up a user stream
let stream = T.stream('user')



