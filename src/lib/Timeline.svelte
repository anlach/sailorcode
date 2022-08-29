<script>
	import { fade } from 'svelte/transition';
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
		box-shadow: 0 0 15px 10px rgba(186, 216, 255, 0.856);
		margin: 10px 0;
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
		top: 22px;
		/* top: 0; */
		/* right: 0; */
		/* left: 40%; */
		right: 0;
	}
	span {
		font-size: 2rem;
		color: var(--timeline-color);
		opacity: 0.7;
		transition: opacity 0.3s;
		margin: 10px;
		cursor: pointer;
		text-shadow: 0 -2px 15px rgba(51, 83, 134, 0.856);
		z-index: 10;
		position: relative;
	}
	@media (hover: hover) {
		span:hover {
			color: var(--timeline-color);
			opacity: 1;
			transition: opacity 0.3s;
		}
	}
</style>
