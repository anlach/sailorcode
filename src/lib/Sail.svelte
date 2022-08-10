<script>
	import { blur, fade } from 'svelte/transition';
	import Map from '$lib/Map.svelte';
	import Story from '$lib/Story.svelte';
	import Timeline from '$lib/Timeline.svelte';
	export let shrink;
	export let grow;
	let timelineValue = 10000;
</script>

<div class="sail">
	{#if grow}
		<div class="links" transition:blur>
			<a
				href="https://www.instagram.com/anlach"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span
					class="fa-brands fa-instagram"
					alt="Instagram"
					title="Instagram"
				/>
			</a>
			<a
				href="https://www.facebook.com/andrewpants/"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span class="fa-brands fa-facebook" alt="Facebook" title="Facebook" />
			</a>
		</div>
		<div class="pad" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }}>
			<div class="split">
				<div class="map-outer">
					<Map {timelineValue} />
				</div>
				<div class="story-outer">
					<Story />
				</div>
			</div>
		</div>
		<Timeline bind:value={timelineValue} />
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
	.sail .textbox.grow,
	.sail .textbox.shrink {
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
	.pad {
		padding: 2%;
		height: 63vh;
		height: 63svh;
		width: 100vw;
	}
	.split {
		display: flex;
		height: 100%;
		box-shadow: 0px 0px 15px 5px rgb(18, 18, 59, 0.7);
	}
	.map-outer,
	.story-outer {
		height: 100%;
		margin: auto;
	}
	.story-outer {
		min-width: 200px;
	}
	.map-outer {
		flex-grow: 1;
		min-width: 100px;
	}
</style>
