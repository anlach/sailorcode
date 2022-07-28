<script>
	import Gridscape from './Gridscape.svelte';
	import { blur } from 'svelte/transition';

	export let shrink;
	export let grow;
</script>

<div class="code">
<div class:shrink class:grow class="textbox">
		<h1>CODE</h1>
	</div>
<!-- <p
		class="codepen"
		data-height="300"
		data-default-tab="result"
		data-slug-hash="eYMpGrO"
		data-user="anlach"
	>
		<span
			>See the Pen <a href="https://codepen.io/anlach/pen/eYMpGrO"> Random Quotes</a> by Andrew (<a
				href="https://codepen.io/anlach">@anlach</a
			>) on <a href="https://codepen.io">CodePen</a>.</span
		>
	</p> -->
<!-- <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script> -->
<Gridscape />
{#if grow}
		<div class="links" transition:blur>
			<a
				href="https://www.freecodecamp.org/anlach"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span
					class="fa-brands fa-free-code-camp"
					alt="freeCodeCamp Certifications"
					title="freeCodeCamp Certifications"
				/>
			</a>
			<a href="https://www.github.com/anlach" target="_blank" on:click={(e) => e.stopPropagation()}>
				<span class="fa-brands fa-github" alt="Github" title="Github" />
			</a>
			<a href="https://codepen.io/anlach" target="_blank" on:click={(e) => e.stopPropagation()}>
				<span class="fa-brands fa-codepen" alt="Codepen" title="Codepen" />
			</a>
		</div>
	{/if}
</div>

<style>
	.code {
		--text-color: rgb(67, 226, 19);
		--gradient-color1: rgb(44, 70, 68);
		--half-gradient-color1: rgba(44, 70, 68, 0.5);
		--mid-color1-color2: rgb(24, 48, 42);
		--gradient-color2: rgb(4, 26, 16);
		--half-gradient-color2: rgba(4, 26, 16, 0.5);
		height: 100%;
		background-color: var(--gradient-color2);
	}
	.links {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		margin: 5px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
	}
	.links a {
		color: var(--text-color);
		text-decoration: none;
		margin: 0 5px;
	}
	.code .textbox {
		top: 20%;
		right: 10%;
		z-index: 1;
		position: absolute;
		transition: top 0.5s;
	}
	.code .textbox.shrink,
	.code .textbox.grow {
		top: 0%;
		transition: top 0.5s;
	}
	.code h1 {
		color: var(--text-color);
		text-shadow: 0 0 30px rgb(51, 172, 15);
	}
	/* .codepen {
		height: 300px;
		box-sizing: border-box;
		display: absolute;
		align-items: center;
		justify-content: center;
		border: 2px solid;
		margin: 1em 0;
		padding: 1em;
	} */
</style>
