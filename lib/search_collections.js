/**
 * Created by user on 2016-06-10.
 */
Search = new Mongo.Collection("search");

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Search.find().count() == 0) {
            Search.insert({name: "Flat Shoes.mp3", artist: "Crucial Star", album: "Flat Shoes"});
            Search.insert({name: "어떻게 생각해.mp3", artist: "CHEEZE", album: "Q"});
            Search.insert({name: "퇴근시간.mp3", artist: "CHEEZE", album: "PLAIN"});
            Search.insert({name: "Good For You.mp3", artist: "에릭남", album: "INTERVIEW"});
            Search.insert({name: "쏘쏘.mp3", artist: "백아연", album: "쏘쏘"});
        }
    })
}