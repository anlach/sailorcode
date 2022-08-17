<script>
	import { blur, fade } from 'svelte/transition';
	import Map from '$lib/Map.svelte';
	import Story from '$lib/Story.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import { data } from '$lib/data/sailing-tracks.js';
	import story1 from '$lib/stories/urist-1.js';
	import story2 from '$lib/stories/haul-florida.js';
	export let shrink;
	export let grow;

	// stories are chronologically ordered
	const stories = [story1, story2];
	let storyIndex = 1;
	let storyInView = stories[storyIndex];

	const nCoords = data.features.reduce((previous, current) => {
		return previous + current.geometry.coordinates.length;
	}, 0);
	let coords = new Array(nCoords);
	let times = new Array(nCoords);
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
	let storyStops = [];
	const storyCoords = stories.map((s) => s.latLng);
	for (let story of stories) {
		while (story.date > times[i]) i++;
		let coordIndex = i;
		if (i > coords.length - 1) coordIndex = coords.length - 1;
		coords = [
			...coords.slice(0, i),
			...new Array(20).fill(coords[coordIndex]),
			...coords.slice(i, coords.length)
		];
		console.log("timeslice ", times.slice(coordIndex, times.length), coordIndex, times.length);
		times = [
			...times.slice(0, i),
			...new Array(20).fill(story.date),
			...times.slice(i, times.length)
		];
		storyStops.push(20 + i - 1);
	}
	let timeIndex = times.length - 1;

	function getStopIndex(timeIndex) {
		//  |---S--+--S---S---S|
		let stopIndex = storyStops.length - 1;
		while (timeIndex <= storyStops[stopIndex - 1]) stopIndex--;
		console.log('new stopindex', stopIndex, 'from', timeIndex);
		return stopIndex;
	}
	$: storyIndex = getStopIndex(timeIndex);
	$: storyInView = stories[storyIndex];
</script>

<div class="sail">
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
					<Map {coords} {timeIndex} {data} {times} {storyCoords} {storyIndex} />
				</div>
				<div class="story-outer">
					<Story {...storyInView} />
				</div>
			</div>
		</div>
		<Timeline
			max={times.length - 1}
			bind:index={timeIndex}
			stops={storyStops}
			{storyIndex}
		/>
	{/if}
	<div class:shrink class:grow class="textbox">
		<h1>SAIL</h1>
	</div>
</div>

<style>
	.sail {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: url('/img/IMG_4543.JPG');
		background-position: left;
		background-size: auto 90vh;
		background-size: auto 90svh;
		background-repeat: no-repeat;
		--text-color: rgb(70, 113, 207);
	}
	@media screen and (min-device-width: 700px) {
		.sail {
			background-size: 100vw 90vh;
			background-size: 100vw 90svh;
		}
	}
	.sail .textbox {
		bottom: 20%;
		left: 10%;
		position: absolute;
		transition: bottom 0.5s;
	}
	.sail .textbox.grow,
	.sail .textbox.shrink {
		bottom: 0%;
		transition: bottom 0.5s;
	}
	.sail h1 {
		color: var(--text-color);
		text-shadow: 0 0 30px white;
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
		font-size: 3rem;
	}
	.links a {
		color: var(--text-color);
		text-decoration: none;
		margin: 5px 5px;
	}
	.pad {
		padding: 2%;
		height: 63vh;
		height: 63svh;
		width: 100vw;
	}
	.split {
		display: flex;
		height: 100%;
		box-shadow: 0px 0px 15px 5px rgb(18, 18, 59, 0.7);
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
</style>
