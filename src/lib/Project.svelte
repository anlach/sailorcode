<script>
	export let pos;
	export let title;
	export let image;

	function getTransform(position) {
		let rotation = '';
		let translation1 = 'translateZ(50vw)';
		let translation2 = '';
		if (position < 0) {
			rotation = 'rotateY(80deg) ';
			translation1 = `translateX(${-50 + 20 * position}%) `;
			translation2 = 'translateX(-50%)';
		} else if (position > 0) {
			rotation = 'rotateY(-80deg) ';
			translation1 = `translateX(${50 + 20 * position}%) `;
			translation2 = 'translateX(50%)';
		}
		// rotation = "";
		return translation1 + rotation + translation2;
	}
</script>

<!-- <span style="color: white">{getTransform(pos)}</span> -->
<div
	class="container"
	style="transform: {getTransform(pos)};"
	on:pointerdown
	on:pointerup
	on:pointermove
	on:pointercancel
	on:click|stopPropagation
>
	<div class="black">
		<div class="image" style="background-image: url({image});" />
		<h2>{title}</h2>
	</div>
</div>

<style>
	.black {
		color: white;
		background-color: black;
		width: 100%;
		height: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.container {
		box-shadow: 0 0 10px 5px green;
		position: absolute;
		height: 60%;
		top: 20%;
		width: 30%;
		left: 35%;
		transition: transform 0.5s;
		z-index: 10;
	}
	@media (hover: hover) {
		.container:hover {
			box-shadow: 0 0 20px 15px green;
		}
	}
	h2 {
		color: var(--text-color);
		padding: 5px;
		flex-grow: 1;
		text-align: center;
	}
	@media (max-width: 865px) {
		h2 {
			font-size: 1.2em;
		}
	}
	@media (max-width: 710px) {
		h2 {
			font-size: 1em;
		}
	}
	@media (max-width: 600px) {
		h2 {
			font-size: 0.7em;
		}
	}
	@media (max-width: 440px) {
		h2 {
			font-size: 0.5em;
		}
	}
	.image {
		width: 100%;
		flex-grow: 20;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: auto;
		text-align: center;
	}
</style>
