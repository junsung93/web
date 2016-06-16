Template.list.helpers({
    listName: function () {
        return "All List";
    },
    Allcount: function () {
        return Search.find({}).count();
    },
   list: function () {
       return Search.find({});
   } 
});

Template.list.events({
    "click button[name=add]":function (evt, tmpl) {
        console.log(this);
        Musics.insert(this);
    }
});