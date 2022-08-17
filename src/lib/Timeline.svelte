<script>
	import { fade } from 'svelte/transition';
	export let index;
	export let max;
	export let stops;
	export let storyIndex;

	function toStart(e) {
		e.stopPropagation();
		index = 0;
	}

	function toEnd(e) {
		e.stopPropagation();
		index = max;
	}

	function back(e) {
		e.stopPropagation();
		if (storyIndex < 1) {
			index = 0;
		} else {
			index = stops[storyIndex - 1];
		}
	}

	function advance(e) {
		e.stopPropagation();
		if (storyIndex >= stops.length - 1) {
			index = max;
		} else {
			index = stops[storyIndex + 1];
		}
	}
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
	<div class="buttons">
		<span class="fa-solid fa-backward-fast" on:click={toStart} />
		<span class="fa-solid fa-backward" on:click={back} />
		<span class="fa-solid fa-forward" on:click={advance} />
		<span class="fa-solid fa-forward-fast" on:click={toEnd} />
	</div>
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
		box-shadow: 0 0 15px 10px rgba(186, 216, 255, 0.856);
		margin: 10px 0;
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
	}

	input::-moz-range-thumb {
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
		border: none;
	}
	.buttons {
		position: absolute;
		top: -12px;
		left: calc(50% - 6.5rem);
	}
	span {
		font-size: 2rem;
		color: rgba(255, 255, 255, 0.6);
		transition: color 0.3s;
		margin: 10px;
		cursor: pointer;
	}
	@media (hover: hover) {
		span:hover {
			color: rgba(255, 255, 255, 0.9);
			transition: color 0.3s;
		}
	}
</style>
