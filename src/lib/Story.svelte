<script>
	import { fade } from 'svelte/transition';
</script>

<div class="outer" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }}>
	<div class="content" />
	<img src="/img/stories/gcs-haul.jpg" alt="hauled boat" />
	<h2>Hauling Out</h2>
	<p>The boat was stored in Florida up the St. Johns River.</p>
</div>

<style>
	img {
		width: 100%;
		max-width: 500px;
		height: auto;
		align-self: center;
	}
	.outer {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
		width: 100%;
		max-width: 500px;
		color: white;
		background-color: rgba(18, 18, 59, 0.4);
		box-shadow: 0px 0px 15px 5px rgb(18, 18, 59, 0.7);
	}
</style>
