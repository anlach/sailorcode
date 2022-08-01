<script>
	import { transition_in } from 'svelte/internal';

	import Index from '../routes/index.svelte';

	export let pos;
	export let title;

	function getTransform(position) {
		let rotation = '';
		let translation1 = 'translateZ(40vw)';
		let translation2 = '';
		if (position < 0) {
			rotation = 'rotateY(90deg) ';
			translation1 = `translateX(${-50 + 10 * position}%) `;
			translation2 = 'translateX(-50%)';
		} else if (position > 0) {
			rotation = 'rotateY(-90deg) ';
			translation1 = `translateX(${50 + 10 * position}%) `;
			translation2 = 'translateX(50%)';
		}
		// rotation = "";
		return translation1 + rotation + translation2;
	}
</script>

<!-- <span style="color: white">{getTransform(pos)}</span> -->
<div class="container" 
    style="transform: {getTransform(pos)};"
    on:click>
	<div class="black">{title}</div>
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
		height: 80%;
		top: 10%;
		width: 50%;
		left: 25%;
		transition: transform 0.3s;
		z-index: 10;
	}
	.container:hover {
		box-shadow: 0 0 20px 15px green;
	}
</style>
