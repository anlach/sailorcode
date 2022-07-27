<script>
	export let shrink;
	export let grow;
</script>

<div class="code">
	<div class:shrink class:grow class="textbox">
		<h1>CODE</h1>
	</div>
	<div class="horizon-blur" />
	<svg>
		<line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%" />
		<line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%" />
		<line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%" />
		<line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%" />
		<line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%" />
		<line class="horizontal" x1="0" y1="0%" x2="100%" y2="0%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="3%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="5%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="8%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="11%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="15%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="20%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="26%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="36%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="50%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="75%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="120%" />
		<line class="radial" x1="50%" y1="-9%" x2="0" y2="230%" />
		<line class="radial" x1="50%" y1="-8%" x2="0" y2="750%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="3%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="5%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="8%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="11%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="15%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="20%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="26%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="36%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="50%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="75%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="120%" />
		<line class="radial" x1="50%" y1="-9%" x2="100%" y2="230%" />
		<line class="radial" x1="50%" y1="-8%" x2="100%" y2="750%" />
	</svg>
</div>

<style>
	:root {
		--gradient-color1: rgb(44, 70, 68);
		--half-gradient-color1: rgba(44, 70, 68, 0.5);
		--mid-color1-color2: rgb(24, 48, 42);
		--gradient-color2: rgb(4, 26, 16);
		--half-gradient-color2: rgba(4, 26, 16, 0.5);
	}
	.code {
		height: 100%;
		background-color: var(--gradient-color2);
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
	.code .horizon-blur {
		height: 15%;
		width: 100%;
		position: absolute;
		top: 45%;
		background: linear-gradient(to top, green, rgb(0, 65, 0) 10%, var(--gradient-color2));
	}
	.code h1 {
		color: rgb(67, 226, 19);
		text-shadow: 0 0 30px rgb(51, 172, 15);
	}
	svg {
		width: 100%;
		height: 40%;
		position: absolute;
		top: 60%;
	}
	line {
		stroke: green;
	}
	.horizontal:first-of-type {
		animation-name: code-grid;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(1, 0, 1, 1);
	}
	.horizontal:nth-of-type(2) {
		animation-name: code-grid;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(1, 0, 1, 1);
		animation-delay: 0.5s;
	}
	.horizontal:nth-of-type(3) {
		animation-name: code-grid;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(1, 0, 1, 1);
		animation-delay: 1s;
	}
	.horizontal:nth-of-type(4) {
		animation-name: code-grid;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(1, 0, 1, 1);
		animation-delay: 1.5s;
	}

	@keyframes code-grid {
		to {
			transform: translateY(100%);
		}
	}
</style>
