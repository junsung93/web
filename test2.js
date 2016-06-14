if (Meteor.isClient) {

  Template.layout.events({
    'click #play': function() {
      var player = document.getElementById('audio');
      player.play();
      var elem = document.getElementById('progressBar');
      var width = 1;
      var id = setInterval(frame, 10);

      function frame () {
        if(width  >= 100) {
          clearInterval(id);
        }
        else {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  });

  Template.layout.events({
    'click #pause': function() {
      var player = document.getElementById('audio');
      player.pause();
      var elem = document.getElementById('progressBar');
      var id = setInterval(frame, 10);

      function frame() {
        width.stop();
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
