<script>
	import { blur } from 'svelte/transition';

	export let noscript = false;
</script>

<div
	class="links"
	style:position={noscript ? 'absolute' : 'relative'}
	transition:blur
>
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

<style>
	.links {
		/* position: absolute; */
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 8vh;
		font-size: 8svh;
	}
	.links a {
		color: var(--text-color);
		text-shadow: 0 0 30px var(--dark-color);
		margin: 5px 5px;
	}
</style>
