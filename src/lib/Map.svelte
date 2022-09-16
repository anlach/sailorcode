<script>
	import { onMount } from 'svelte';
	import { timeIndex } from '$lib/stores.js';

	export let coords;
	export let data;
	export let times;
	export let storyCoords;
	export let storyIndex;
	export let storyStops;

	let map = null;
	let stopMarkers = [];
	let boat = null;
	let mapReady = false;

	async function loadMap() {
		const iconsCreated = createIcons();
		map = L.map('map').setView([36.5, -75.0], 5);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap'
		}).addTo(map);
		L.geoJSON(data).addTo(map);
		L.control.scale({ position: 'topleft' }).addTo(map);
		await iconsCreated;
		boat.addTo(map);
		for (let stopMarker of stopMarkers) {
			stopMarker.addTo(map);
		}
		mapReady = true;
	}

	async function loadLeaflet() {
		var x = document.createElement('script');
		x.src = 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.js';
		x.integrity =
			'sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ==';
		x.crossOrigin = "";
		x.onload = loadMap;
		document.getElementsByTagName('head')[0].appendChild(x);
	}
	loadLeaflet();

	function getNewPosition(i) {
		return L.latLng(coords[i][0], coords[i][1]);
	}

	async function createIcons() {
		var boatIcon = L.icon({
			iconUrl: '/favicon.png',
			iconSize: [36, 36]
		});
		boat = L.marker(getNewPosition(parseInt($timeIndex)), {
			icon: boatIcon
		});
		for (let i = 0; i < storyStops.length; i++) {
			let marker = L.marker(storyCoords[i], { opacity: 0.5 });
			marker.on('click', () => timeIndex.set(storyStops[i]));
			stopMarkers.push(marker);
		}
	}

	$: {
		if (mapReady) {
			const pos = getNewPosition(parseInt($timeIndex));
			boat.setLatLng(pos);
		    if (map != null) map.panTo(pos);
		}
	}
	$: stopMarkers.map((marker, i) =>
		i == storyIndex ? marker.setOpacity(1.0) : marker.setOpacity(0.5)
	);

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
