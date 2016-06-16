Meteor.methods({
   add: function () {
       if(!Meteor.userId()) {
           throw new Meteor.Error("비회원입니다.");
       }
   }
});