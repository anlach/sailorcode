<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { data } from '$lib/data/sailing-tracks.js';

	function loadMap() {
		var map = L.map('map').setView([36.5, -75.0], 5);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap'
		}).addTo(map);
		// console.log("Number of featues:", data.features);
		// for (const feature of data.features){
		//     if (feature.geometry.coordinates.length == 3){
		//         console.log(feature);
		//     }
		// }
		L.geoJSON(data).addTo(map);
		var myIcon = L.icon({
			iconUrl: '/favicon.png',
			iconSize: [36, 36]
		});

		L.marker([29.996151, -81.672363], { icon: myIcon }).addTo(map);
	}
	onMount(loadMap);

	function handleClick(event) {
		event.stopPropagation();
	}
</script>

<div id="map" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }} on:click={handleClick} />

<style>
	#map {
		width: 94%;
		height: 94%;
		z-index: 0;
		box-shadow: 0px 0px 15px 5px rgb(18, 18, 59);
		margin: 3% 3%;
	}
</style>
