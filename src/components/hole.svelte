<script lang="ts">
	import { onMount } from 'svelte';

	import type { Hole as HoleData } from '../lib/types';
	import { score } from '../lib/store';

	interface Props {
		holeId: number;
	}

	let { holeId }: Props = $props();

	let data = $state<HoleData | null>(null);
	let up = $state(false);
	let disabled = $state(false);

	onMount(() => {
		function handlePeep(event: CustomEvent<HoleData>) {
			data = event.detail;
			up = true;
		}

		function handleUnpeep() {
			up = false;
			disabled = false;
		}

		window.addEventListener(`peep:${holeId}`, handlePeep as EventListener);
		window.addEventListener(`unpeep:${holeId}`, handleUnpeep);

		return () => {
			window.removeEventListener(`peep:${holeId}`, handlePeep as EventListener);
			window.removeEventListener(`unpeep:${holeId}`, handleUnpeep);
		};
	});

	function wack(e: MouseEvent) {
		if (e.isTrusted && up && data && !disabled) {
			if (data.isBad) {
				score.update((n) => n + 100);
				up = false;
			} else {
				score.update((n) => n - 200);
				disabled = true;
				document.body.classList.add('shake');
				setTimeout(() => {
					document.body.classList.remove('shake');
				}, 500);
			}
		}
	}
</script>

<div class={['hole', up && 'up']}>
	<button
		class={['popup', data && (data.isBad ? 'type-bad' : 'type-good')]}
		onclick={wack}
		{disabled}
	>
		<div class="popup-icon">{data?.content.emoji}</div>
		<div class="popup-text">{data?.content.text}</div>
	</button>
</div>
