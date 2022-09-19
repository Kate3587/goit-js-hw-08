import VPlayer from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const timeKey = 'videoplayer-current-tim';

player.on('timeupdate', durationLokalStorage);

function durationLokalStorage({ seconds }) {
    localStorage.setItem(timeKey, seconds);
};


// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });