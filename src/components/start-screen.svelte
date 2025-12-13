<script lang="ts">
	import { gameState } from '../lib/store';
</script>

<div id="start-screen" class="overlay">
	<div class="title-screen">
		<h1>CYBER DEFENDER</h1>
		<p style="color: var(--neon-blue);">ภารกิจปราบไวรัสและข่าวลวง</p>
	</div>
	<div class="instruction">
		<p>
			🔴 <strong>คลิก!</strong> ที่ ไวรัส, ข่าวปลอม, โฆษณาหลอกลวง (+100 คะแนน)
		</p>
		<p>
			🟢 <strong>ห้ามคลิก!</strong> เว็บโรงเรียน, ข่าวจริง, ความรู้ (-200 คะแนน)
		</p>
	</div>
	<button class="btn" onclick={() => gameState.set('playing')}> เริ่มภารกิจ </button>
</div>
