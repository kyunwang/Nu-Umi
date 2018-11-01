import Tone from 'tone';
import Melody from './Melody';

class MelodyControls extends Melody {
	constructor() {
		super();
	}

	changeBpm(value = 120) {
		Tone.Transport.bpm.value = value;
	}

	changeVolume(value = 1) {
		this.masterGain.gain.value = value;
	}

	changeReverb(value) {
		this.freeverb.roomSize.value = value;
	}

	changeDampening(value) {
		this.freeverb.dampening.value = value;
	}
}

export default MelodyControls;
