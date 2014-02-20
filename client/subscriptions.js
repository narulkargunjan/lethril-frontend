Meteor.autorun(function(){

	Meteor.subscribe('tweets', Session.get('track'));

})