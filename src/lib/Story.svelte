<script>
	export let title, photos, alt, video, text, date;

	let photoIndex = 0;
	$: photoIndex = photos ? 0 : 0;
	function nextPhoto(e) {
		e.stopPropagation();
		if (photoIndex >= photos.length - 1) {
			photoIndex = 0;
		} else {
			photoIndex += 1;
		}
	}
</script>

<div class="outer">
	{#if photos.length > 0}
		<div class="photos" on:click={nextPhoto}>
			<img src={photos[photoIndex]} alt={alt[photoIndex]} />
			{#if photos.length > 1}
				<span
					class="fa-solid fa-chevron-right"
					alt="Next photo"
					title="Next photo"
				/>
			{/if}
		</div>
		<!-- <span class="fa-solid fa-chevron-left"></span> -->
	{:else}
		<div class="video">
			<div class="pad">
				<iframe
					src={'https://www.youtube.com/embed/' +
						video +
						'?autoplay=1&origin=http://sailorcode.com'}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; gyroscope"
					allowfullscreen
				/>
			</div>
		</div>
	{/if}
	<div class="text">
		<h2>{title}</h2>
		<p>{text}</p>
		<div class="break" />
		<p>{date.toDateString()}</p>
	</div>
</div>

<style>
	.break {
		width: 100%;
		border-bottom: 2px solid grey;
	}
	.photos,
	.video {
		/* width: calc(65vh * 19 / 6);
		width: calc(65svh * 19 / 6); */
		width: 100%;
		position: relative;
		/* flex-grow: 1; */
	}
	.photos {
		max-width: 500px;
	}
	.pad {
		width: 100%;
		padding-top: 56.25%;
		position: relative;
		/* height: 100%; */
		/* overflow: hidden; */
	}
	img,
	iframe {
		width: 100%;
	}
	img {
		max-width: 500px;
	}
	iframe {
		position: absolute;
		top: 0;
		bottom: 0;
		/* right: 0; */
		/* left: 0; */
		height: 100%;
	}
	span {
		position: absolute;
		right: 20px;
		bottom: calc(50% - 2.5rem);
		z-index: 1;
		color: rgba(255, 255, 255, 0.4);
		font-size: 5rem;
		text-decoration: none;
		transition: color 0.5s;
	}
	@media (hover: hover) {
		.photos:hover span {
			color: rgba(255, 255, 255, 0.7);
			transition: color 0.5s;
		}
	}
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
		position: absolute;
	}
	::-webkit-scrollbar-track-piece {
		background-color: rgb(6, 0, 53);
	}
	::-webkit-scrollbar-thumb:vertical {
		height: 5px;
		background-color: #666;
	}
	.outer {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
		width: 100%;
		max-width: 500px;
		color: white;
		background-color: rgb(6, 0, 53);
		overflow-y: auto;
	}
	.text {
		display: flex;
		flex-direction: column;
		/* flex-grow: 1; */
		min-width: 238px;
		flex-shrink: 3;
	}
	/* @media screen and (min-width: 1200px) {
		.outer {
			flex-direction: row;
			max-width: 1400px;
		}
		.text {
			max-width: 400px;
		}
	} */
</style>
