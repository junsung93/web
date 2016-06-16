if(Meteor.isClient){
    Template.SearchItem.helpers({
        isOwner: function () {
            return this.owner === Meteor.userId();
        }
    });
    
    Template.SearchList.events({
        "click button[name=add]":function (evt, tmpl) {
            console.log(this);
            Musics.insert(this);
        }
    });
}