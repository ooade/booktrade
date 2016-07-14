import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'books.insert': function(data) {
    return Books.insert({
      createdAt: new Date(),
      ownerId: this.userId,
      purchased: false,
      requestedBy: '',
      thumbnail: data.thumbnail,
      title: data.title
    });
  },

  'book.remove': function(book) {
    if (this.userId !== book.ownerId) { return "UnAuth"; }

    return Books.remove(book);
  },

  'book.request': function(book) {
    return Books.update(book._id, { $set: { requestedBy: this.userId } });
  }
});

export const Books = new Mongo.Collection('books');
