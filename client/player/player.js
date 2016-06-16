if(Meteor.isClient) {
    Template.player.helpers({
        music_name:function(){
            return Session.get('music');
        }
    });

    Template.player.events({
        'click #play': function () {
            var myAudio = document.getElementById('audio');
            myAudio.play();
        },
        'click #stop': function () {
            var myAudio = document.getElementById('audio');
            myAudio.load();
        },
        'click #pause': function () {
            var myAudio = document.getElementById('audio');
            myAudio.pause();
        },
        'click #volumeUp': function () {
            var myAudio = document.getElementById('audio');
            if (myAudio.volume >= 0) {
                myAudio.volume = myAudio.volume + (0.1)
            }
        },
        'click #volumeDown': function () {
            var myAudio = document.getElementById('audio');
            if (myAudio.volume <= 1) {
                myAudio.volume = myAudio.volume - (0.1)
            }
        },
        'click #rewind': function () {
            var myAudio = document.getElementById('audio');
            if (myAudio.currentTime > 0) {
                myAudio.currentTime -= 10;
            }
        },
        'click #ff': function () {
            var myAudio = document.getElementById('audio');
            myAudio.currentTime += 10;
        }
    })
}
