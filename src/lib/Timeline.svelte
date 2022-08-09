<input
	type="range"
	min="1"
	max="100"
	value="100"
	id="timeline"
	on:click={(e) => e.stopPropagation()}
/>

<style>
	input {
		width: 100%;
		height: 0px;
		opacity: 0.6;
		transition: opacity 0.3s;
        box-shadow: 0 0 25px 20px white;
	}
	input:hover {
		opacity: 0.8;
	}
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
        border: none;
	}

	input::-moz-range-thumb {
		width: 32px;
		height: 32px;
		background: url('/favicon.png');
		cursor: pointer;
        border: none;
	}
</style>
