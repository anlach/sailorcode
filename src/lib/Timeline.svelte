<script>
	import { fade } from 'svelte/transition';
    export let value;

</script>

<input
	in:fade={{ delay: 200 }}
	out:fade={{ duration: 100 }}
	type="range"
	min="0"
	max="10000"
	bind:value={value}
	id="timeline"
	on:click={(e) => e.stopPropagation()}
/>

<style>
	input {
		width: 100%;
		height: 0px;
		opacity: 0.8;
		transition: opacity 0.3s;
		box-shadow: 0 0 25px 20px white;
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
