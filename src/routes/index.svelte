<script>
	import { fade } from 'svelte/transition';
	import Sail from '$lib/Sail.svelte';
	import Code from '$lib/Code.svelte';

	let growSail = false;
	let shrinkSail = false;

	function sailClick() {
		if (growSail) {
			growSail = false;
		} else if (shrinkSail) {
			shrinkSail = false;
			growSail = true;
		} else {
			growSail = true;
		}
	}
	function codeClick(e) {
		console.log('click on code', e);
		if (growSail) {
			shrinkSail = true;
			growSail = false;
		} else if (shrinkSail) {
			shrinkSail = false;
		} else {
			shrinkSail = true;
		}
	}
</script>

<!-- style:height={height} -->
<div id="sail-box" class:growSail class:shrinkSail on:click={sailClick}>
	<Sail grow={growSail} shrink={shrinkSail} />
</div>
<div id="code-box" class:growSail class:shrinkSail on:click={codeClick}>
	<Code grow={shrinkSail} shrink={growSail} />
</div>
{#if !(growSail || shrinkSail)}
	<div transition:fade={{duration: 200}}>
		<span
			class="top hint fa-solid fa-circle-down"
			alt="Adventure Page"
			title="Adventure Page"
		/>
		<span
			class="bottom hint fa-solid fa-circle-up"
			alt="Portfolio"
			title="Portfolio"
		/>
	</div>
{/if}

<style>
	#sail-box {
		position: relative;
		height: 50vh;
		height: 50svh;
		transition: height 0.5s;
	}
	#sail-box.growSail {
		height: 90vh;
		height: 90svh;
		transition: height 0.5s;
	}
	#sail-box.shrinkSail {
		height: 10vh;
		height: 10svh;
		transition: height 0.5s;
	}

	#code-box {
		position: relative;
		height: 50vh;
		height: 50svh;
		--gradient-color2: rgb(4, 26, 16);
		background-color: var(--gradient-color2);
		transition: height 0.5s;
	}
	#code-box.growSail {
		height: 10vh;
		height: 10svh;
		transition: height 0.5s;
	}
	#code-box.shrinkSail {
		height: 90vh;
		height: 90svh;
		transition: height 0.5s;
	}

	.hint {
		font-size: 5rem;
		left: calc(50% - 2.5rem);
		position: absolute;
		color: white;
		opacity: 0;
		animation: hint 5s ease-in-out 1s infinite;
	}
	.hint.top {
		top: calc(25vh - 2.5rem);
		top: calc(25svh - 2.5rem);
	}
	.hint.bottom {
		top: calc(75vh - 2.5rem);
		top: calc(75svh - 2.5rem);
	}
	@keyframes hint {
		from {
			opacity: 0;
		}
		50% {
			opacity: 0.1;
		}
		to {
			opacity: 0;
		}
	}
</style>
