Template.tweets.helpers({
    'tweets' : function(){
        return tweets.find()
    },

    'tracks' : function(){
    	var _tracks = []
    	var selected = Session.get('track')
    	_.each(tracks, function(x){
    		if(x['name'] === selected){
    			x['selected_class'] = 'btn-success'
    		}
    		else
    			x['selected_class'] = ''
    		_tracks.push(x)
    	})
    	return _tracks
    }

})

Template.tweets.events({
	'click .track' : function(evt, ui){
		console.log(this)
		Session.set('track', this.name)
	}
})