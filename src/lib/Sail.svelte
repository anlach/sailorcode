<script>
	import { blur } from 'svelte/transition';
</script>

<div class="sail">
	<div class="textbox">
		<h1 in:blur>SAIL</h1>
	</div>
</div>

<style>
	.sail {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: url('/img/IMG_4543.JPG');
		background-position: center;
		background-size: cover;
	}
	.sail .textbox {
		bottom: 20%;
		left: 10%;
		position: absolute;
	}
	.sail h1 {
		color: rgb(70, 113, 207);
		text-shadow: 0 0 30px white;
	}
</style>
