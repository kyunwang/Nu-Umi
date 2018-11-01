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
const hWidth = window.innerHeight;
document.addEventListener('mousemove', evt => {
	const wPosRatio = evt.clientX / wWidth;
	const hPosRatio = evt.clientY / hWidth;
	const minBpm = 60;
	const maxBpm = 240 - minBpm;

	const bpm = maxBpm * wPosRatio + minBpm;

	Audio.changeBpm(bpm);
	Audio.changeVolume(hPosRatio);
	Audio.changeReverb(hPosRatio);
	// Audio.changeDampening(evt.clientX);
});
