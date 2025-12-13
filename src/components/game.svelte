<script lang="ts">
	import { onMount } from 'svelte';

	import { GAME_DURATION, MAX_SPEED, MIN_SPEED, NUM_HOLES } from '../lib/constants';
	import { gameState, score, time } from '../lib/store';
	import { randomContent, randomTime } from '../lib/utils';
	import Hole from './hole.svelte';

	let speed = $state({ min: MIN_SPEED, max: MAX_SPEED });
	let lastHole = $state<number | null>(null);

	function randomHole() {
		const hole = Math.floor(Math.random() * NUM_HOLES);
		if (hole === lastHole) {
			return randomHole();
		}
		lastHole = hole;
		return hole;
	}

	function peepHole() {
		const hole = randomHole();
		const content = randomContent();

		const event = new CustomEvent(`peep:${hole}`, {
			detail: content
		});
		window.dispatchEvent(event);

		const time = randomTime(speed.min, speed.max);
		setTimeout(() => {
			const event = new CustomEvent(`unpeep:${hole}`);
			window.dispatchEvent(event);
			if ($gameState === 'playing') peepHole();
		}, time);
	}

	onMount(() => {
		score.set(0);
		time.set(GAME_DURATION);
		speed = { min: MIN_SPEED, max: MAX_SPEED };
		lastHole = null;

		const gameTimer = setInterval(() => {
			time.update((time) => {
				if (time <= 0) {
					clearInterval(gameTimer);
					gameState.set('gameover');
					return 0;
				} else {
					if (time === 45) {
						speed = { min: 700, max: 1500 };
					} else if (time === 30) {
						speed = { min: 500, max: 1200 };
					} else if (time === 15) {
						speed = { min: 300, max: 800 };
					}
					return time - 1;
				}
			});
		}, 1000);

		peepHole();

		() => clearInterval(gameTimer);
	});
</script>

<div class="grid">
	{#each Array(NUM_HOLES) as _, index}
		<Hole holeId={index - 1} />
	{/each}
</div>
