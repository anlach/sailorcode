<script>
	import { blur } from 'svelte/transition';
</script>

<div class="links" transition:blur>
	<a
		href="https://www.freecodecamp.org/anlach"
		target="_blank"
		on:click|stopPropagation
	>
		<span
			class="fa-brands fa-free-code-camp"
			alt="freeCodeCamp Certifications"
			title="freeCodeCamp Certifications"
		/>
	</a>
	<a
		href="https://www.github.com/anlach"
		target="_blank"
		on:click|stopPropagation
	>
		<span class="fa-brands fa-github" alt="Github" title="Github" />
	</a>
	<a href="https://codepen.io/anlach" target="_blank" on:click|stopPropagation>
		<span class="fa-brands fa-codepen" alt="Codepen" title="Codepen" />
	</a>
	<a
		href="https://www.linkedin.com/in/adlacharite/"
		target="_blank"
		on:click|stopPropagation
	>
		<span class="fa-brands fa-linkedin" alt="LinkedIn" title="LinkedIn" />
	</a>
</div>

<style>
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
		font-size: 8vh;
		font-size: 8svh;
	}
	.links a {
		color: var(--text-color);
		text-decoration: none;
		margin: 0 5px;
	}
</style>
