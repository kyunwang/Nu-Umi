import Tone from 'tone';
import teoria from 'teoria';

import { getRandomItemFromArr } from './helpers';

// From Rampsophone
const melody = {
	key: getRandomItemFromArr('c,c#,d,d#,e,f,f#,g,g#,a,bb,b'.split(',')),
	octave: getRandomItemFromArr('2,3,4'.split(',')),
	mode: getRandomItemFromArr(
		'major,minor,harmonicminor,blues,chromatic,mixolydian'.split(',')
	),
	degree: 1,
	quality: getRandomItemFromArr(
		'maj7,maj7,maj7,maj7,maj7,maj7,maj7,maj7,min7,7b5,aug7,dim7'.split(',')
	),
};

class Melody {
	constructor() {
		this.synth = null;
		this.melody = melody;
		this.sequence = null;

		this.isPlaying = false;

		// NOTE: Maybe add modes?
		this.bpmMode = false;

		/*==========================
		=== Nodes initialization
		===========================*/
		this.freeverb = new Tone.Freeverb(0).toMaster();
		this.masterGain = new Tone.Gain();

		/*==========================
		=== Bindings
		===========================*/
		this.generateMelody = this.generateMelody.bind(this);
		this.toggleAudio = this.toggleAudio.bind(this);
	}

	init() {
		this.synth = new Tone.Synth();
		// this.synth.toMaster();
		this.synth.connect(this.freeverb);
		this.freeverb.connect(this.masterGain);

		this.masterGain.toMaster();

		this.sequence = new Tone.Pattern(
			(time, note) => {
				this.synth.triggerAttackRelease(note, '8n', time + 0.05);
			},
			[],
			'upDown'
		);

		this.sequence.interval = '8n';
		this.sequence.start('0m');
		this.sequence.loop = true;

		this.generateMelody();
	}

	generateMelody() {
		const { key, octave, mode, degree, quality } = this.melody;

		const base = teoria.note(`${key}${octave}`);
		const scale = base.scale(mode);
		const chord = scale.get(degree).chord(quality);
		const notesArr = chord.notes();
		notesArr.push(chord.notes()[0].interval('P8'));

		const noteNames = notesArr.map(note => note.toString());

		this.sequence.values = noteNames;
	}

	toggleAudio() {
		this.isPlaying = !this.isPlaying;

		this.isPlaying ? Tone.Transport.start() : Tone.Transport.stop();
	}
}

export default Melody;
