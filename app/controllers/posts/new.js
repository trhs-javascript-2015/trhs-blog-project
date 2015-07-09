import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createPost: function () {
            var title = this.get('title');
            var author = this.get('author');
            var content = this.get('content');
            
            var post = this.store.createRecord('post', {
                title: title,
                author: author,
                content: content
            });
            
            post.save();

            this.transitionToRoute('index');
        }
    }
});
