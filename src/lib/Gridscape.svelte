<script>
</script>

<div class="horizon-blur" />
<div class="grid">
	<div class="horizontal"></div>
	<div class="horizontal"></div>
	<div class="horizontal"></div>
	<div class="horizontal"></div>
	<div class="horizontal"></div>
	<div class="horizontal"></div>
	<svg>
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
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="230%" />
		<line class="radial" x1="50%" y1="-10%" x2="0" y2="750%" />
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
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="230%" />
		<line class="radial" x1="50%" y1="-10%" x2="100%" y2="750%" />
	</svg>
</div>

<style>
	div.horizontal {
		width: 100%;
		top: 0%;
		border-top: 1px solid green;
		animation: code-grid 2s cubic-bezier(1, 0, 1, 1) infinite;
		position: absolute;
	}
	.horizon-blur {
		height: 25%;
		width: 100%;
		position: absolute;
		top: 45%;
		background: linear-gradient(to top, green, rgb(0, 65, 0) 10%, var(--gradient-color2));
	}
	.grid {
		width: 100%;
		height: 30%;
		position: absolute;
		top: 70%;
		background-color: transparent;
		overflow: hidden;
	}
	svg {
		width: 100%;
		height: 100%;
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
			top: 100%;
		}
	}
</style>
