<script>
	import { fade } from 'svelte/transition';
	export let index;
	export let max;
	export let times;
</script>

<div class="outer">
	<input
		in:fade={{ delay: 200 }}
		out:fade={{ duration: 100 }}
		type="range"
		min="0"
		{max}
		bind:value={index}
		id="timeline"
		on:click={(e) => e.stopPropagation()}
	/>
</div>

<style>
	.outer {
		position: relative;
	}
	input {
		-webkit-appearance: none;
		width: 100%;
		height: 15px;
		opacity: 0.8;
		transition: opacity 0.3s;
		box-shadow: 0 0 15px 10px white;
		margin: 10px 0;
	}
	input:hover {
		opacity: 1;
	}
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
		border: none;
	}

	input::-moz-range-thumb {
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
		border: none;
	}
</style>
