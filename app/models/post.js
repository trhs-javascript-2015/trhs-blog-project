import DS from 'ember-data';

let Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string')
});

Post.reopenClass({
  FIXTURES: [
    { id: 1, title: 'My First Post', author: 'Kevin', content: "This is a post.\n\n*Isn't it awesome?*" },
    { id: 2, title: 'Another Post', author: 'Kevin', content: "This is another post." }
  ]
});

export default Post;