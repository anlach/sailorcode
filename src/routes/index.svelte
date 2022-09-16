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

<div
	id="sail-box"
	class:growSail
	class:shrinkSail
	on:click={sailClick}
	alt="Adventure"
>
	<Sail grow={growSail} shrink={shrinkSail} />
	{#if !(growSail || shrinkSail)}
		<div class="hint-box" transition:fade={{ duration: 200 }}>
			<span class="hint">Click Up Here for Adventure</span>
		</div>
	{/if}
</div>
<div
	id="code-box"
	class:growSail
	class:shrinkSail
	on:click={codeClick}
	alt="Portfolio"
>
	<Code grow={shrinkSail} shrink={growSail} />
	{#if !(growSail || shrinkSail)}
		<div class="hint-box" transition:fade={{ duration: 200 }}>
			<span class="hint">Click Down Here for Portfolio</span>
		</div>
	{/if}
</div>

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

	.hint-box {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 0;
	}
	.hint {
		font-size: 2rem;
		text-align: center;
		cursor: default;
		/* left: calc(50% - 2.5rem); */
		color: white;
		opacity: 0;
		animation: hint 5s ease-in-out 0.5s infinite;
	}
	@keyframes hint {
		from {
			opacity: 0;
		}
		50% {
			opacity: 0.2;
		}
		to {
			opacity: 0;
		}
	}
</style>
