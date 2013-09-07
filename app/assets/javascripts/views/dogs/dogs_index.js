FriendlyKaminariDelayedDemo.Views.DogsIndex = Backbone.View.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "add", this.render);
  },

  template: JST['dogs/index'],

  render: function () {
    var renderedTemplate = this.template({
      dogs: this.collection
    });
    this.$el.html(renderedTemplate);
    this.listenForScroll();
    return this;
  },

  listenForScroll: function () {
    $(window).off("scroll"); // remove past view's listeners
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var self = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      console.log("scrolled to bottom!");
      if (self.collection.page_number < self.collection.total_pages) {
        self.collection.fetch({
          data: { page: self.collection.page_number + 1 },
          remove: false,
          wait: true,
          success: function () {
            console.log("successfully fetched page " + self.collection.page_number);
          }
        });
      }
    }
  },


});
