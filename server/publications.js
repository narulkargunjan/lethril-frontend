Meteor.publish('tweets', function(){
    return tweets.find()
})