import { Meteor } from 'meteor/meteor';

import { Posts } from '/lib/collection/posts.js';

Meteor.startup(() => {
  // code to run on server at startup
    if (Posts.find().count() === 0) {
        Posts.insert({
            title: 'introducing Telescope1',
            url: 'http://meteor.com'
        });
        Posts.insert({
            title: 'introducing Telescope2',
            url: 'http://meteor.com'
        });
        Posts.insert({
            title: 'introducing Telescope3',
            url: 'http://meteor.com'
        });
    }
});
