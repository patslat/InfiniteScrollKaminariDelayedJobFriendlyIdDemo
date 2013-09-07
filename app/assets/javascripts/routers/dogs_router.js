FriendlyKaminariDelayedDemo.Routers.Dogs = Backbone.Router.extend({
  initialize: function (opts) {
    this.collection = opts.collection;
    this.$content = opts.$content;
  },

  routes: {
    "":"index"
  },

  index: function () {
    var view = new FriendlyKaminariDelayedDemo.Views.DogsIndex({
      collection: this.collection
    });
    this.$content.html(view.render().$el);
  }

});
