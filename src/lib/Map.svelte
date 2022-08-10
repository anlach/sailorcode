<script>
	import { onMount } from 'svelte';
	import { data } from '$lib/data/sailing-tracks.js';

	export let timelineValue;

	let coords = [];
	for (const feature of data.features) {
		coords = coords.concat(feature.geometry.coordinates);
	}

	var boatIcon = L.icon({
		iconUrl: '/favicon.png',
		iconSize: [36, 36]
	});
	function getNewPosition(v) {
		let i = parseInt((v / 10000.0) * coords.length) - 1;
		if (i < 0) i = 3; // Don't start in Albany or be -1
		return L.latLng(coords[i][1], coords[i][0]);
	}
	console.log(getNewPosition(100.0));
	const boat = L.marker(getNewPosition(100.0), { icon: boatIcon });
	var map = null;
	$: {
		const pos = getNewPosition(timelineValue);
		boat.setLatLng(pos);
		if (map != null) map.panTo(pos);
	}

	function loadMap() {
		map = L.map('map').setView([36.5, -75.0], 5);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap'
		}).addTo(map);
		L.geoJSON(data).addTo(map);
		boat.addTo(map);
	}
	onMount(loadMap);

	function handleClick(event) {
		event.stopPropagation();
	}
</script>

<div
	id="map"
	on:click={handleClick}
/>

<style>
	#map {
		width: 100%;
		height: 100%;
		z-index: 0;
	}
</style>
