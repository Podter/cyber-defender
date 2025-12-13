import type { Hole } from './types';
import { BAD_TARGETS, GOOD_TARGETS } from './constants';

export function randomContent(): Hole {
	const isBad = Math.random() > 0.3;
	const array = isBad ? BAD_TARGETS : GOOD_TARGETS;
	const item = array[Math.floor(Math.random() * array.length)];
	return { content: item, isBad };
}

export function randomTime(min: number, max: number) {
	return Math.round(Math.random() * (max - min) + min);
}
