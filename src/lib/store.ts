import { derived, writable } from 'svelte/store';

import { GAME_DURATION } from './constants';

export const gameState = writable<'playing' | 'gameover' | null>(null);
export const score = writable(0);
export const time = writable(GAME_DURATION);

export const rank = derived(score, ($score) => {
	if ($score >= 3000) {
		return 'Cyber Ninja (สุดยอดผู้พิทักษ์)!';
	} else if ($score >= 1000) {
		return 'Cyber Agent (เจ้าหน้าที่ฝึกหัด)';
	} else {
		return 'Cyber Newbie (มือใหม่)';
	}
});
