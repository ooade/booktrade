import { Meteor } from 'meteor/meteor';
import { Books } from '../imports/collections/books';
import {} from '../imports/collections/users'; // Let the Client Feel the user's presence

Meteor.startup(() => {
  Meteor.publish('myBooks', function() {
    return Books.find({ ownerId: this.userId });
  });

  Meteor.publish('books', function() {
    return Books.find();
  });

  // Deny all client-side updates to user documents
  Meteor.users.deny({
    update() { return true; }
  });
});
