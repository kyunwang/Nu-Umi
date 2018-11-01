import Tone from 'tone';
import Melody from './Melody';

class MelodyControls extends Melody {
	constructor() {
		super();
	}

	changeBpm(value = 120) {
		Tone.Transport.bpm.value = value;
	}
}

export default MelodyControls;
