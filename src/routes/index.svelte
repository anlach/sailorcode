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
	function codeClick() {
		if (growSail) {
			shrinkSail = true;
			growSail = false;
		} else if (shrinkSail) {
			shrinkSail = false;
		} else {
			shrinkSail = true;
		}
	}

	let start = {};
	let end = {};
	let swipeTimeStamp = 0;
	let tracking = false;
	let thresholdTime = 300;
	let thresholdDistance = 10;
	const gestureStart = function (e) {
		console.log('start');
		e.target.setPointerCapture(e.pointerId);
		tracking = true;
		start.t = new Date().getTime();
		start.x = e.clientX;
		start.y = e.clientY;
		end.x = e.clientX;
		end.y = e.clientY;
	};
	const gestureMove = function (e) {
		if (tracking) {
			end.x = e.clientX;
			end.y = e.clientY;
		}
	};
	const gestureEnd = function (e) {
		console.log('end');
		if (tracking) {
			tracking = false;
			var now = new Date().getTime();
			var deltaTime = now - start.t;
			console.log(
				'deltaTime',
				deltaTime,
				thresholdTime,
				deltaTime > thresholdTime
			);
			if (deltaTime > thresholdTime) {
				return;
			} else {
				var deltaX = end.x - start.x;
				var deltaY = end.y - start.y;
				console.log('deltax, y', deltaX, deltaY);
				if (Math.abs(deltaY) > Math.abs(deltaX)) {
					if (deltaY > thresholdDistance) {
						console.log('sail click by swipe');
						swipeTimeStamp = e.timeStamp;
						sailClick();

						// keep mobile address bar from expanding again
						e.preventDefault();
					} else if (-deltaY > thresholdDistance) {
						console.log('code click by swipe');
						swipeTimeStamp = e.timeStamp;
						codeClick();
					}
				}
			}
		}
	};
	const clickIfNotSwipe = (f) => (e) => {
		// This only seems to be a problem in FireFox
		console.log('click handler', f, e.timeStamp, swipeTimeStamp);
		if (e.timeStamp != swipeTimeStamp) f();
	};
</script>

<!-- style:height={height} -->
<div
	on:pointerdown={gestureStart}
	on:pointermove={gestureMove}
	on:pointerup={gestureEnd}
	on:pointercancel={gestureEnd}
>
	<div
		id="sail-box"
		class:growSail
		class:shrinkSail
		on:click={clickIfNotSwipe(sailClick)}
	>
		<Sail grow={growSail} shrink={shrinkSail} />
		{#if !(growSail || shrinkSail)}
			<div class="hint-box" transition:fade={{ duration: 200 }}>
				<span
					on:click={sailClick}
					class="hint"
					alt="Adventure Page"
					title="Adventure Page">Click Up Here for Adventure</span
				>
			</div>
		{/if}
	</div>
	<div
		id="code-box"
		class:growSail
		class:shrinkSail
		on:click={clickIfNotSwipe(codeClick)}
	>
		<Code grow={shrinkSail} shrink={growSail} />
		{#if !(growSail || shrinkSail)}
			<div class="hint-box" transition:fade={{ duration: 200 }}>
				<span
					on:click={codeClick}
					class="hint"
					alt="Portfolio"
					title="Portfolio">Click Down Here for Portfolio</span
				>
			</div>
		{/if}
	</div>
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
		/* left: calc(50% - 2.5rem); */
		color: white;
		opacity: 0;
		animation: hint 5s ease-in-out 1s infinite;
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
