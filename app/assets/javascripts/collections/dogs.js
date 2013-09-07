FriendlyKaminariDelayedDemo.Collections.Dogs = Backbone.Collection.extend({
  url: "/dogs",

  parse: function(response) {
    console.log("in parse here's the response");
    console.log(response);
    this.page_number = parseInt(response.page_number);
    this.total_pages = parseInt(response.total_pages);
    return response.models;
  },

  model: FriendlyKaminariDelayedDemo.Models.Dog

});
