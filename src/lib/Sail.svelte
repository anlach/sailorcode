<script>
	import { blur } from 'svelte/transition';
	import Map from '$lib/Map.svelte';
	export let shrink;
	export let grow;
</script>

<div class="sail">
	{#if grow}
		<div class="links" transition:blur>
			<a
				href="https://www.instagram.com/anlach"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span class="fa-brands fa-instagram" alt="Instagram" title="Instagram" />
			</a>
			<a
				href="https://www.facebook.com/andrewpants/"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span class="fa-brands fa-facebook" alt="Facebook" title="Facebook" />
			</a>
		</div>
		<div class="outer">
			<Map />
		</div>
	{/if}
	<div class:shrink class:grow class="textbox">
		<h1>SAIL</h1>
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
		background-size: auto 90svh;
		background-repeat: no-repeat;
		--text-color: rgb(70, 113, 207);
	}
	@media screen and (min-device-width: 700px) {
		.sail {
			background-size: 100vw 90vh;
			background-size: 100vw 90svh;
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
		color: var(--text-color);
		text-shadow: 0 0 30px white;
	}
	.links {
		/* position: absolute; */
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
	}
	.links a {
		color: var(--text-color);
		text-decoration: none;
		margin: 5px 5px;
	}
    .outer {
		height: 60vh;
		height: 60svh;
		width: 70vw;
		min-width: 200px;
		margin: auto;
    }
</style>
