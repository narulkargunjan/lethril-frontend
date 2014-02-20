Meteor.publish('tweets', function(track){ 
    return tweets.find({
    	'track' : track

    },
    {
    	sort : {
    		'_id' : -1
    	},
	    limit : 10
    })
})