<script>
	import { transition_in } from 'svelte/internal';

	import Index from '../routes/index.svelte';

	export let pos;

	function getTransform(position) {
		let rotation = '';
		let translation = 'translateZ(5rem)';
		if (position < 0) {
			rotation = 'rotateY(90deg) ';
			translation = `translateX(${-13 + 1.2 * position}rem) `;
		} else if (position > 0) {
			rotation = 'rotateY(-90deg) ';
			translation = `translateX(${13 + 1.2 * position}rem) `;
		}
		// rotation = "";
		return translation + rotation;
	}
</script>

<!-- <span style="color: white">{getTransform(pos)}</span> -->
<div class="container" 
    style="transform: {getTransform(pos)}; transition: transform 0.3s;"
    on:click>
	<div class="black">Nothing to see here yet</div>
</div>

<style>
	.black {
		color: white;
		background-color: black;
		width: 100%;
		height: 100%;
		text-align: center;
		justify-content: center;
		padding: 20px;
	}
	.container {
		box-shadow: 0 0 10px 5px green;
		position: absolute;
		top: 10svh;
		top: 10vh;
		height: 40svh;
		height: 40vh;
		width: 30%;
		left: 35%;
	}
	.container:hover {
		box-shadow: 0 0 20px 15px green;
	}
</style>
