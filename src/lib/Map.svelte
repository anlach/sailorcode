<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { data } from '$lib/data/sailing-tracks.js';

	function loadMap() {
		var map = L.map('map').setView([35.0, -77.0], 5);
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
	}
	onMount(loadMap);

	function handleClick(event) {
		event.stopPropagation();
	}
</script>

<div class="outer">
	<div id="map" transition:fly={{y: -400}} on:click={handleClick} />
</div>

<style>
	#map {
		height: 70vh;
		border-radius: 20px;
		border: 2px solid gray;
	}
    .outer {
        padding: 5% 5%;
    }
</style>
