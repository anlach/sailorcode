<script>
	import { blur } from 'svelte/transition';
	export let shrink;
	export let grow;
</script>

<div class="sail">
	<div class:shrink class:grow class="textbox">
		<h1 in:blur out:blur>SAIL</h1>
	</div>
</div>

<style>
	.sail {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: url('/img/IMG_4543.JPG');
		background-position: left;
		background-size: auto 90vh;
		background-repeat: no-repeat;
	}
	@media (min-aspect-ratio: 1.35) {
		.sail {
			background-size: 100vw auto;
		}
	}
	.sail .textbox {
		bottom: 20%;
		left: 10%;
		position: absolute;
		transition: bottom 0.5s;
	}
	.sail .textbox.shrink,
	.sail .textbox.grow {
		bottom: 0%;
		transition: bottom 0.5s;
	}
	.sail h1 {
		color: rgb(70, 113, 207);
		text-shadow: 0 0 30px white;
	}
</style>
