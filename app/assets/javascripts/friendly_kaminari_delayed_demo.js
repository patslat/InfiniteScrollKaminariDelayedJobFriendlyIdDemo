window.FriendlyKaminariDelayedDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($content) {
    var collection = new FriendlyKaminariDelayedDemo.Collections.Dogs();
    collection.fetch({
      data: { page: 1 },
      success: function () {
        new FriendlyKaminariDelayedDemo.Routers.Dogs({
          collection: collection,
          $content: $content
        });
        Backbone.history.start()
      }
    });
  }
};

$(document).ready(function(){
  FriendlyKaminariDelayedDemo.initialize($("#content"));
});
