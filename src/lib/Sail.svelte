<script>
	import { blur, fade } from 'svelte/transition';
	import Map from '$lib/Map.svelte';
	import Story from '$lib/Story.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import { timeIndex } from '$lib/stores.js';
	import stories from '$lib/stories.js';
	import { onMount } from 'svelte';
	import Code from './Code.svelte';
	export let shrink;
	export let grow;

	let coords = [];
	let storyCoords = [];
	let times = [];
	let storyStops = [];
	let data = {};

	let mapIsReady = false;
	// Lazy load the sailing gps data - it's over 1MB
	onMount(async () => {
		const res = await fetch('/data/sailing-tracks.json');
		data = await res.json();
		const nCoords = data.features.reduce((previous, current) => {
			return previous + current.geometry.coordinates.length;
		}, 0);
		coords = new Array(nCoords);
		times = new Array(nCoords);
		let i = 0;
		for (const feature of data.features) {
			let J = feature.geometry.coordinates.length;
			for (let j = 0; j < J; j++) {
				coords[i + j] = [
					feature.geometry.coordinates[j][1],
					feature.geometry.coordinates[j][0]
				];
				times[i + j] = new Date(feature.properties.coordTimes[j]);
			}
			i += J;
		}

		// Add some padding into the timeline for stories
		i = 0;
		storyCoords = stories.map((s) => s.latLng);
		for (let story of stories) {
			while (story.date > times[i]) i++;
			let coordIndex = i;
			if (i > coords.length - 1) coordIndex = coords.length - 1;
			// coords is used for the boat marker, so we just duplicate whatever
			// already there instead of using the story location, which
			// may not happen near the boat.
			coords = [
				...coords.slice(0, i),
				...new Array(20).fill(coords[coordIndex]),
				...coords.slice(i, coords.length)
			];
			times = [
				...times.slice(0, i),
				...new Array(20).fill(story.date),
				...times.slice(i, times.length)
			];
			storyStops.push(20 + i - 1);
		}
		mapIsReady = true;
	});

	// stories are chronologically ordered
	let storyIndex = 0;
	let storyInView = stories[storyIndex];

	timeIndex.set(0);

	function getStopIndex(timeIndex) {
		if (storyStops.length == 0) return 0;

		//  |---S--+--S---S---S|
		let stopIndex = storyStops.length - 1;
		while (timeIndex <= storyStops[stopIndex - 1]) stopIndex--;
		return stopIndex;
	}
	$: storyIndex = getStopIndex($timeIndex);
	$: storyInView = stories[storyIndex];
</script>

<div class="sail">
	<noscript>
		<div class="noscript-stories">
			{#each stories as story}
			<span class="noscript-story">
				<Story {...story}></Story>
			</span>
			{/each}
		</div>
	</noscript>
	{#if grow}
		<div class="links" transition:blur>
			<a
				href="https://www.instagram.com/anlach"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span
					class="fa-brands fa-instagram"
					alt="Instagram"
					title="Instagram"
				/>
			</a>
			<a
				href="https://www.facebook.com/andrewpants/"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span class="fa-brands fa-facebook" alt="Facebook" title="Facebook" />
			</a>
		</div>

		<div class="pad" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }}>
			<div class="split">
				<div class="map-outer">
					{#if mapIsReady}
						<Map
							{coords}
							{data}
							{times}
							{storyCoords}
							{storyIndex}
							{storyStops}
						/>
					{/if}
				</div>
				<div class="story-outer">
					<Story {...storyInView} />
				</div>
			</div>
		</div>
		<Timeline max={times.length - 1} stops={storyStops} {storyIndex} />
	{/if}
	<div class:shrink class:grow class="textbox">
		<h1 class="jsonly">SAIL</h1>
	</div>
</div>

<style>
	.sail {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: linear-gradient(
				to bottom,
				rgba(6, 0, 53, 0.4),
				rgba(6, 0, 53, 0.9)
			),
			url('/img/IMG_4543.JPG');
		background-position: left;
		background-size: auto 90vh;
		background-size: auto 90svh;
		background-repeat: no-repeat;
		--text-color: rgb(148, 182, 255);
		--dark-color: rgb(6, 0, 53);
	}
	@media (min-width: 700px) {
		.sail {
			background-size: 100vw 90vh;
			background-size: 100vw 90svh;
		}
	}
	@media (max-width: 700px) and (max-height: 520px) {
		.sail {
			background-size: 100vw 90vh;
			background-size: 100vw 90svh;
		}
	}
	.sail .textbox {
		bottom: 20%;
		left: 6%;
		position: absolute;
		transition: bottom 0.5s;
		z-index: 5;
	}
	.sail .textbox.grow,
	.sail .textbox.shrink {
		bottom: 0%;
		transition: bottom 0.5s;
	}
	.sail h1 {
		color: var(--text-color);
		text-shadow: 0 0 30px var(--dark-color);
		z-index: 5;
		position: relative;
	}
	.links {
		/* position: absolute; */
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 8vh;
		font-size: 8svh;
	}
	.links a {
		color: var(--text-color);
		text-shadow: 0 0 30px var(--dark-color);
		margin: 5px 5px;
	}
	.pad {
		padding: 0 2% 1% 2%;
		height: 65vh;
		height: 65svh;
		width: 100vw;
	}
	.split {
		display: flex;
		height: 100%;
		box-shadow: 2px 2px 15px 0px var(--dark-color);
	}
	.map-outer,
	.story-outer {
		height: 100%;
		margin: auto;
	}
	.map-outer {
		flex-grow: 1;
		min-width: 112px;
	}
	.noscript-stories {
		width: 100%;
		/* left: 30%; */
		height: 100%;
		overflow: scroll;
		display: flex;
		/* position: absolute; */
		/* justify-content: center; */
		/* margin: auto; */
	}
	.noscript-story {
		/* width: 100%; */
		min-width: 500px;
		height: 100%;
	}
</style>
