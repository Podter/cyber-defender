<script lang="ts">
	import GameOver from './components/game-over.svelte';
	import Game from './components/game.svelte';
	import Header from './components/header.svelte';
	import StartScreen from './components/start-screen.svelte';
	import { gameState } from './lib/store';
</script>

<Header />

<main class="game-container">
	{#if $gameState === 'playing'}
		<Game />
	{:else if $gameState === 'gameover'}
		<GameOver />
	{:else}
		<StartScreen />
	{/if}
</main>
