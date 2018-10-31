import '../styles/index.scss';

import Melody from './Melody';

const Audio = new Melody();

Audio.init();

// NOTE: Temporary play button
const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', () => {
	Audio.toggleAudio();
});
