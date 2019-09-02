// Persistence(server) Id and Client Id (CId)


let Song3 = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
    model: Song3
});

let songs = new Songs([
    new Song3({title: "title1"}),
    new Song3({title: "title2"}),
    new Song3({title: "title1"}),
]);

console.log(songs);


songs.add(new Song3({title: "title4"}));
// songs.add(new Song3({title: "title4"}), {at: 3});  //at defines the index
console.log(songs);


let firstSong = songs.at(1);
console.log(firstSong);


let songsByCId = songs.get("c5");
console.log(songsByCId);


songs.remove(firstSong);
console.log(songs);


// find
let allSongs = songs.where({"title": "title1"})
let oneSong = songs.findWhere({"title": "title4"})
console.log(allSongs); // list of all find
console.log(oneSong); // only first find

// find by filter
var filterSong = songs.filter((song)=>{
    return song.get("title").length > 5;
});
console.log(filterSong);


// For more operations look in the underscore libraray