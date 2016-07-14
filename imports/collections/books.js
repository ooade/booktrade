import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'books.insert': function(data) {
    return Books.insert({
      createdAt: new Date(),
      ownerId: this.userId,
      thumbnail: data.thumbnail,
      title: data.title
    });
  }
});

export const Books = new Mongo.Collection('books');
