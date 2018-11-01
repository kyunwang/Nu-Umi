import '../styles/index.scss';

import Melody from './MelodyControls';

const Audio = new Melody();

Audio.init();

// NOTE: Temporary play button
const playBtn = document.getElementById('play-button');
playBtn.addEventListener('click', () => {
	Audio.toggleAudio();
});

const wWidth = window.innerWidth;
document.addEventListener('mousemove', evt => {
	const posRatio = evt.clientX / wWidth;
	const minBpm = 30;
	const maxBpm = 240;

	const bpm = maxBpm * posRatio;
	Audio.changeBpm(bpm);
});
