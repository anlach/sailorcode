<script>
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
	</div>
	<div
		id="code-box"
		class:growSail
		class:shrinkSail
		on:click={clickIfNotSwipe(codeClick)}
	>
		<Code grow={shrinkSail} shrink={growSail} />
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
</style>
