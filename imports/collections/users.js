Meteor.methods({
  updateProfile : function(newProfile) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : { profile : newProfile }});
  }
});
