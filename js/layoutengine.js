
var Topic = Backbone.Model.extend({ });
var TopicList = Backbone.Collection.extend({ model: Topic });

var TopicView = Backbone.View.extend({
  tagName: 'div',
  //events: { 'click button#zoom': 'zoom', 'click': 'zoom', },
  initialize: function() {
    _.bindAll(this,'render','zoom');
    //this.model.bind('zoom',this.zoom);
  },
  render: function() {
    this.art = this.model.get("art");
    this.label = this.model.get("label");
    var blob = jQuery('<a/>', { class: 'folder', });
    blob.css("background-image", "url('/images/"+this.art+"')");
    blob.append("<h2>"+this.label+"</h2>");
    blob.attr('href',this.label);
    blob.on('click', this.zoom);
    return blob;
  },
  zoom: function(ev) {
    app_router.navigate(this.label,{trigger:true});
    return false;
  },
});

var TopicListView = Backbone.View.extend({
  el: $('body'),
  initialize: function(options){
    _.bindAll(this, 'render');
    this.collection = this.model.children; 
    //this.collection.bind('add',this.appendItem);
    //this.listenTo(this.collection,'reset',this.render);
    this.render();
  },
  cleanup: function() {
    _.each(this.collection,function(handle){ handle.remove(); },this);
  },
  render: function(){
    var self = this;
    var label = this.model.get("label").toUpperCase();
    var art = this.model.get("art").toUpperCase();
    document.title = label;
    $(this.el).append("<h1>"+label+"</h1>");
    $(this.el).css("background-image", "url('/images/"+art+"')");
    _(this.collection.models).each(function(item){ self.appendItem(item); },this);
    $(this.el).append("<br style=clear:both;/>");
    $(this.el).append("<br/>");
    $(this.el).append("<p></p>");
  },
  appendItem: function(item) {
    var view = new TopicView({model:item});
    $(this.el).append(view.render());
  },
  close: function(){
    this.remove();
    this.unbind();
  },
});

/////////////////////////////////////////////////////////////////////////////////
// hack - make backbone objects because backbone prefers them
// we don't actually load/save to a server or have any dynamic stuff right now
/////////////////////////////////////////////////////////////////////////////////

var topics_by_name = {};

// debatable if this is best...
function convert_to_backbone(parent) {
  var collection = new TopicList();
  for(var i=0 ; parent.children && i<parent.children.length;i++) {
    var thing = convert_to_backbone(parent.children[i]);
    collection.add(thing);
  }
  parent.children = 0;
  parent = new Topic(parent);
  parent.children = collection;
  topics_by_name[parent.get("label")] = parent;
  return parent;
}

var backbonetopics = convert_to_backbone(topic_main);

/////////////////////////////////////////////////////////////////////////////////
// backbone routing
/////////////////////////////////////////////////////////////////////////////////

var active_view = 0;

var AppRouter = Backbone.Router.extend({
  routes: {
    "*actions": "defaultRoute"
  }
});

var app_router = new AppRouter;
app_router.on('route:defaultRoute', function (actions) {
  var area = topics_by_name[actions];
  if(!area) area = backbonetopics;
  if(active_view) {

console.log("trying a reset");
active_view.cleanup();
console.log("cleanup done");
active_view.collection.reset(area.children);
console.log("made new area");
return;

    active_view.close();
    //active_view.remove();
    //active_view.unbind();
  }
  console.log("making");
  active_view = new TopicListView({model:area});
});

/////////////////////////////////////////////////////////////////////////////////
// start up everything
/////////////////////////////////////////////////////////////////////////////////

(function($) {
  Backbone.history.start();
})(jQuery);

