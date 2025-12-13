<script lang="ts">
	import { gameState, rank, score } from '../lib/store';
</script>

<div id="game-over-screen" class="overlay">
	<h1 style="color: var(--neon-red);">MISSION ENDED</h1>
	<p>คะแนนสรุปของคุณ</p>
	<div id="final-score" class="score-summary">{$score}</div>
	<div id="rank-display" class="rank-badge">RANK: {$rank}</div>
	<button class="btn" onclick={() => gameState.set('playing')}> เล่นอีกครั้ง </button>
</div>
