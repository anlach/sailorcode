<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	function loadMap() {
		var map = L.map('map').setView([35.000, -77.00], 5);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '© OpenStreetMap'
		}).addTo(map);
	}
	onMount(loadMap);

    function handleClick(event){
        event.stopPropagation();
    }
</script>

<div id="map" transition:fly={{ y: -2000, duration: 800 }} on:click={handleClick}/>

<style>
	#map {
		height: 80vh;
	}
</style>
