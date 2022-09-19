import VPlayer from '@vimeo/player';
import Trottle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new VPlayer(iframe);
const timeKey = 'videoplayer-current-time';

function durationLokalStorage({ seconds }) {
    localStorage.setItem(timeKey, seconds);
};

window.addEventListener('load', newStart);
player.on('timeupdate', Trottle(durationLokalStorage, 500));

function newStart() {
    if (!localStorage.getItem(timeKey)) {
        return;
    }
    const currentVideoTime = localStorage.getItem(timeKey);



player.setCurrentTime(currentVideoTime).then(() => {
    player.play()
    // seconds = the actual time that the player seeked to
})
.catch (function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
    
});
};