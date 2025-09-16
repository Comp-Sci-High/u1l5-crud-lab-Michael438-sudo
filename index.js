// ARRAY SECTION
// Task 1: Create an empty array called playlist
let playlist = [];

// Task 2: Push 3 songs to the playlist array
playlist.push("lofi");
playlist.push("rap");
playlist.push("Old school")

// Task 3: Update the value of the last element to be "Test"
playlist[playlist.length - 1] = 'Test';

// Task 4: Delete the "Test" element 
playlist.pop(test);

// Console log the array
console.log(playlist);


// Commit your changes with an appropriate message.
// ----------------------------------
// OBJECTS SECTION
// Task 5: Create an object called 'song' with 'title', 'artist', and 'duration' properties
let song = {
  title: "My Song",
  artist: "Cool Artist",
  duration: 210 // duration in seconds, for example
};

// Task 6: Add a property 'listenedTo' to the 'song' object and set it to false
song.listenedTo = false;


// Task 7: Delete the 'artist' property
delete song.artist;


// Commit your changes with an appropriate message.
// ----------------------------------
// NESTED ARRAYS & OBJECTS SECTION
// Task 8: Create an object called 'album' with properties song's album's 'name', 'year', and 'songs' (leave 'songs' as empty array for now)

let album = {
  name: "Vibes",
  year: 2025,
  songs: []
};

// Task 9: Add your song object (task 5) to the empty songs array in the album object
album.songs.push(song);


// Console log the length of the album's songs array to confirm it worked
console.log(album.songs.length); // Should print 1

// Task 10: Update the title of the song to be all lowercase. 
album.songs[0].title = album.songs[0].title.toLowerCase();

// Console log the album object to check your change
console.log(album);


// Commit your changes with an appropriate message.
// ----------------------------------
// EXTRA CREDIT
// Use prompt-sync to prompt the user to enter the title, artist, and duration

// Use the user info to create a new song object

// Add it to the songs array in your album object

// Print out the album information with the following formatting
// "Album: [name] ([year])"

// Loop through the songs array in the album object and print out the song information with the following formatting
// "Song [index]: [title] ([duration])"
