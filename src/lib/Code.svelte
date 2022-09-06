<script>
	import Gridscape from './Gridscape.svelte';
	import Project from './Project.svelte';
	import { blur, scale, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let shrink;
	export let grow;

	const projects = [
		{
			title: 'freeCodeCamp Certifications',
			image: '/img/certifications.png',
			url: 'https://www.freecodecamp.org/anlach'
		},
		{
			title: 'React Calculator',
			image: '/img/Calculator.png',
			url: 'https://codepen.io/anlach/pen/BarKjKX'
		},
		{
			title: 'Bootstrap Quote Generator',
			image: '/img/RandomQuotes.png',
			url: 'https://codepen.io/anlach/pen/eYMpGrO'
		},
		{
			title: 'React 25-5 Clock',
			image: '/img/25-5-Clock.png',
			url: 'https://codepen.io/anlach/pen/PoRzLeQ'
		}
	];
	const createProjects = new Array(projects.length)
		.fill(0)
		.map((e, i) => i)
		.reverse();
	let iProj = 0;
	// This resets iProj to 0 when grow changes
	$: iProj = grow ? 0 : -1;

	var start = {};
	var end = {};
	var tracking = false;
	var thresholdTime = 500;
	var thresholdDistance = 100;
	const gestureStart = (i) =>
		function (e) {
			e.stopPropagation();
			e.target.setPointerCapture(e.pointerId);
			tracking = true;
			start.t = new Date().getTime();
			start.x = e.clientX;
			end.x = e.clientX;
			start.i = i;
		};
	const gestureMove = function (e) {
		if (tracking) {
			e.preventDefault();
			end.x = e.clientX;
		}
	};
	const gestureEnd = function (e) {
		e.stopPropagation();
		if (tracking) {
			tracking = false;
			var now = new Date().getTime();
			var deltaTime = now - start.t;
			var deltaX = end.x - start.x;
			if (deltaTime > thresholdTime) {
				return;
			} else {
				if (deltaX > thresholdDistance) {
					if (iProj > 0) iProj -= 1;
				} else if (-deltaX > thresholdDistance) {
					if (iProj < projects.length - 1) iProj += 1;
				} else {
					if (start.i == iProj) {
						window.open(projects[start.i].url, '_blank');
					} else {
						iProj = start.i;
					}
				}
			}
		}
	};
</script>

<div class="code">
	<!-- <span>Some text here</span> -->
	<div class:shrink class:grow class="textbox">
		<h1>CODE</h1>
	</div>
	<Gridscape />
	{#if grow}
		<script
			async
			src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
		<div class="project-outer">
			<div
				class="projects"
				in:scale={{
					easing: cubicInOut,
					opacity: 1,
					duration: 1000,
					delay: 200
				}}
				out:fly={{ duration: 800, y: 500 }}
			>
				{#each createProjects as i}
					<Project
						pos={i - iProj}
						title={projects[i].title}
						image={projects[i].image}
						on:pointerdown={gestureStart(i)}
						on:pointermove={gestureMove}
						on:pointerup={gestureEnd}
						on:pointercancel={gestureEnd}
					/>
				{/each}
			</div>
		</div>
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
			<a
				href="https://www.github.com/anlach"
				target="_blank"
				on:click|stopPropagation
			>
				<span class="fa-brands fa-github" alt="Github" title="Github" />
			</a>
			<a
				href="https://codepen.io/anlach"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span class="fa-brands fa-codepen" alt="Codepen" title="Codepen" />
			</a>
			<a
				href="https://www.linkedin.com/in/adlacharite/"
				target="_blank"
				on:click={(e) => e.stopPropagation()}
			>
				<span class="fa-brands fa-linkedin" alt="LinkedIn" title="LinkedIn" />
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
		--half-gradient-color2: rgba(4, 26, 16, 0.5);
		height: 100%;
		width: 100%;
		overflow: hidden;
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
		right: 6%;
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
	.project-outer {
		overflow: hidden;
		position: absolute;
		top: 15%;
		width: 100%;
		height: 70%;
	}
	.projects {
		width: 100%;
		height: 100%;
		perspective: 250vw;
		transform-style: preserve-3d;
		margin: auto;
		z-index: 0;
	}
</style>
