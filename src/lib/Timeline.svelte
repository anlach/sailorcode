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
		height: 25px;
		opacity: 0.5;
		transition: opacity 0.3s;
	}
	input:hover {
		opacity: 0.7;
	}
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #04aa6d;
		cursor: pointer;
	}

	input::-moz-range-thumb {
		width: 25px;
		height: 25px;
		background: #04aa6d;
		cursor: pointer;
	}
</style>
