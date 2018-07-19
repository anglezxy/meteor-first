import {Template} from 'meteor/templating';
import { Posts } from '/lib/collection/posts.js';
import './post_item.js';
import './posts_list.html';

/*var postsData = [
    {
        title: 'title1',
        url: 'http://baidu.com'
    },
    {
        title: 'title2',
        url: 'http://meteor.com'
    },
    {
        title: 'title3',
        url: 'http://meteor.com'
    }
];*/

Template.postsList.helpers({
    posts() {
        console.log(Posts.find({}).count());
        return Posts.find({});
    },
});

