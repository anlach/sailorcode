<script>
	import { onMount } from 'svelte';
	import { timeIndex } from '$lib/stores.js';

	export let coords;
	export let data;
	export let times;
	export let storyCoords;
	export let storyIndex;
	export let storyStops;

	let intTimeIndex = 0;
	var boatIcon = L.icon({
		iconUrl: '/favicon.png',
		iconSize: [36, 36]
	});
	function getNewPosition(i) {
		return L.latLng(coords[i][0], coords[i][1]);
	}
	const boat = L.marker(getNewPosition(parseInt($timeIndex)), { icon: boatIcon });
	var map = null;
	$: {
		const pos = getNewPosition(parseInt($timeIndex));
		boat.setLatLng(pos);
		if (map != null) map.panTo(pos);
	}
	var stopMarkers = []
	for (let i=0; i<storyStops.length; i++){
		let marker = L.marker(storyCoords[i], {opacity: 0.5});
		marker.on('click', ()=>timeIndex.set(storyStops[i]));
		stopMarkers.push(marker);
	}
	$: stopMarkers.map((marker, i) =>
		i == storyIndex ? marker.setOpacity(1.0) : marker.setOpacity(0.5)
	);

	function loadMap() {
		map = L.map('map').setView([36.5, -75.0], 5);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap'
		}).addTo(map);
		L.geoJSON(data).addTo(map);
		L.control.scale({'position': 'topleft'}).addTo(map);
		boat.addTo(map);
		for (let stopMarker of stopMarkers) {
			stopMarker.addTo(map);
		}
	}
	onMount(loadMap);

	function handleClick(event) {
		event.stopPropagation();
	}
</script>

<div class="outer">
	<div id="map" on:click={handleClick} />
	<span class="time">
		<h2>
			{times[parseInt($timeIndex)].toDateString()}
		</h2>
	</span>
</div>

<style>
	.outer {
		width: 100%;
		height: 100%;
		position: relative;
	}
	#map {
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	.time {
		text-align: center;
		bottom: 0;
		left: 0;
		color: rgb(70, 113, 207);
		position: absolute;
	}
	.time > h2 {
		background-color: rgba(255, 255, 255, 0.4);
		display: inline-block;
		font-family: monospace;
	}
</style>
