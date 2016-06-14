Template.player.events({
    'click #play': function() {
        var player = document.getElementById('audio');
        player.play();
    }
});
Template.player.events({
    'click #pause': function() {
        var player = document.getElementById('audio');
        player.pause();
    }
});
Template.player.events({
    'click #volumeUp': function() {
        var player = document.getElementById('audio');
        
        if(player.volume >= 0) {
            player.volume = player.volume + (0.1)
        }
    }
});
Template.player.events({
    'click #volumeDown': function() {
        var player = document.getElementById('audio');

        if(player.volume <= 1) {
            player.volume = player.volume - (0.1)
        }
    }
});