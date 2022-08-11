<script>
	import { onMount } from 'svelte';

	export let index;
	export let coords;
	export let data;
	export let times;

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

<div class="outer">
	<div id="map" on:click={handleClick} />
	<span class="time">
		<h2>
			{times[index].toDateString()}
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
	.time {
	}
</style>
