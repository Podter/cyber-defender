<script lang="ts">
	import { score, time } from '../lib/store';
</script>

<header>
	<div>
		<h1>🛡️ CYBER DEFENDER</h1>
	</div>
	<div class="stats">
		<div class="stat-box">
			คะแนน: <span id="score">{$score}</span>
		</div>
		<div class="stat-box">
			เวลา: <span id="time-left">{$time}</span>s
		</div>
	</div>
</header>
