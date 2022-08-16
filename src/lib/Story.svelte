<script>
	export let title, photos, alt, video, text, date;

	let photoIndex = 0;
	function nextPhoto(e){
		e.stopPropagation();
		if (photoIndex >= photos.length - 1){
			photoIndex = 0;
		} else {
			photoIndex += 1;
		}
	};
</script>

<div class="outer">
	{#if photos.length > 0}
		<div class="photos"
				on:click={nextPhoto}>
			<img src={photos[photoIndex]} alt={alt[photoIndex]} />
			<span
				class="fa-solid fa-chevron-right"
				alt="Next photo"
				title="Next photo"
			/>
		</div>
		<!-- <span class="fa-solid fa-chevron-left"></span> -->
	{:else}
		<iframe
			src={'https://www.youtube.com/embed/' +
				video +
				'?autoplay=1&origin=http://sailorcode.com'}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	{/if}
	<h2>{title}</h2>
	<p>{text}</p>
	<div class="break" />
	<p>{date.toDateString()}</p>
</div>

<style>
	.break {
		width: 100%;
		border-bottom: 2px solid grey;
	}
	.photos {
		width: 100%;
		position: relative;
	}
	img,
	iframe {
		width: 100%;
		max-width: 500px;
		height: auto;
		align-self: center;
	}
	iframe {
		height: 500px;
	}
	span {
		position: absolute;
		right: 20px;
		bottom: calc(50% - 2.5rem);
		z-index: 1;
		color: rgba(255, 255, 255, 0.3);
		font-size: 5rem;
		text-decoration: none;
		transition: color 0.5s;
	}
	span:hover {
		color: rgba(255, 255, 255, 0.7);
		transition: color 0.5s; 
	}
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
		position: absolute;
	}
	::-webkit-scrollbar-track-piece {
		background-color: rgb(18, 18, 59, 0.5);
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
		background-color: rgba(18, 18, 59, 0.5);
		overflow-y: auto;
	}
</style>
