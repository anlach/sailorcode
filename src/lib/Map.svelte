<script>
	import { onMount } from 'svelte';

	export let index;
	export let coords;
	export let data;

	var boatIcon = L.icon({
		iconUrl: '/favicon.png',
		iconSize: [36, 36]
	});
	function getNewPosition(i) {
		return L.latLng(coords[i][0], coords[i][1]);
	}
	const boat = L.marker(getNewPosition(index), { icon: boatIcon });
	var map = null;
	$: {
		const pos = getNewPosition(index);
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
