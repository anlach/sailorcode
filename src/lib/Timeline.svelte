<script>
	import { fade } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';
	import { timeIndex } from '$lib/stores.js';

	export let max;
	export let stops;
	export let storyIndex;

	function toStart(e) {
		e.stopPropagation();
		timeIndex.set(0);
	}

	function toEnd(e) {
		e.stopPropagation();
		timeIndex.set(max);
	}

	function back(e) {
		e.stopPropagation();
		if (storyIndex < 1) {
			timeIndex.set(0);
		} else {
			timeIndex.set(stops[storyIndex - 1]);
		}
	}

	function advance(e) {
		e.stopPropagation();
		if (storyIndex >= stops.length - 1) {
			timeIndex.set(max);
		} else {
			timeIndex.set(stops[storyIndex + 1]);
		}
	}

	function handleArrow(e) {
		if (e.key == 'ArrowRight') {
			advance(e);
		} else if (e.key == 'ArrowLeft') {
			back(e);
		}
	}
	onMount(async () => {
		document.addEventListener('keydown', handleArrow);
	});
	onDestroy(async () => {
		document.removeEventListener('keydown', handleArrow);
	});
</script>

<div class="outer" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }}>
	<input
		type="range"
		min="0"
		{max}
		bind:value={$timeIndex}
		id="timeline"
		on:click={(e) => e.stopPropagation()}
	/>
	<div class="buttons" on:click={(e) => e.stopPropagation()}>
		<span class="fa-solid fa-arrow-rotate-left" on:click={toStart} />
		<span class="fa-solid fa-backward-step" on:click={back} />
		<span class="fa-solid fa-forward-step" on:click={advance} />
		<span class="fa-solid fa-arrow-rotate-right" on:click={toEnd} />
	</div>
</div>

<style>
	.outer {
		position: relative;
		/* --timeline-color: rgb(208, 234, 255); */
		--timeline-color: var(--text-color);
	}
	input {
		-webkit-appearance: none;
		width: 100%;
		height: 15px;
		opacity: 0.8;
		transition: opacity 0.3s;
		box-shadow: 0 0 5px 5px rgba(186, 216, 255, 0.856);
		margin: 0 0;
		color: var(--timeline-color);
	}
	input:hover {
		opacity: 0.9;
	}
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
		border: none;
		box-shadow: none;
		color: var(--timeline-color);
	}
	input::-moz-range-thumb {
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
		border: none;
		color: var(--timeline-color);
	}
	.buttons {
		position: absolute;
		right: 0;
		margin: -2px 0;
	}
	span {
		font-size: 8vh;
		font-size: 8svh;
		color: var(--timeline-color);
		opacity: 0.7;
		transition: opacity 0.3s;
		margin: 5px;
		cursor: pointer;
		text-shadow: 0 -2px 15px rgba(51, 83, 134, 0.856);
		z-index: 10;
		position: relative;
	}
	@media (max-height: 525px) {
		input {
			height: 10px;
		}
		input::-webkit-slider-thumb {
			margin: -5px;
		}
		input::-moz-range-thumb {
			margin: -5px;
		}
		.buttons {
			margin: -10px 0;
		}
		span {
			font-size: 6vh;
			font-size: 6svh;
		}
	}
	@media (max-width: 450px) {
		span {
			font-size: 10vw;
			font-size: 10svw;
		}
	}
	@media (hover: hover) {
		span:hover {
			color: var(--timeline-color);
			opacity: 1;
			transition: opacity 0.3s;
		}
	}
</style>
