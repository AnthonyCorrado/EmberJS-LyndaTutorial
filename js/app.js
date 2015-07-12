App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("collections");
  this.resource("exhibits", function() {
    this.resource("exhibit", {path: "/:exhibit_id"});
  });
  this.route("notes");
});

// collection route
App.CollectionsRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Samoca Photography Collections",
        copy: "The Photography Gallery exhibits over 2,000 rotating examples from the permanent collection",
        image: "images/photo.png"
      },
      {
        title: "Samoca Painting Collections",
        copy: "The Painting Gallery exhibits over 250 rotating examples from all over the world",
        image: "images/painting.png"
      },
      {
        title: "Samoca Sculpture Collections",
        copy: "The Sculpture Gallery exhibits over 80 examples from the Roman collection",
        image: "images/sculpture.png"
      }
    ];
  }
});

App.SingleCollectionComponent = Ember.Component.extend({
  classNames: "collectionList"
});