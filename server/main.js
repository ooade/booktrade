import { Meteor } from 'meteor/meteor';
import { Books } from '../imports/collections/books';

Meteor.startup(() => {
  Meteor.publish('myBooks', function() {
    return Books.find({ ownerId: this.userId });
  });

  Meteor.publish('books', function() {
    return Books.find();
  });

});
