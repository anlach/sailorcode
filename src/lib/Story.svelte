<script>
	export let title, photos, alt, video, text, date;
</script>

<div class="outer">
	{#if photos.length > 0}
		<img src={photos[0]} alt={alt[0]} />
	{:else}
		<iframe
			src={"https://www.youtube.com/embed/" + video + 
				 "?autoplay=1&origin=http://sailorcode.com"}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	{/if}
	<h2>{title}</h2>
	<p>{text}</p>
	<div class="break"></div>
	<p>{date.toDateString()}</p>
</div>

<style>
	.break {
		width: 100%;
		border-bottom: 2px solid grey;
	}
	img, iframe {
		width: 100%;
		max-width: 500px;
		height: auto;
		align-self: center;
	}
	iframe {
		height: 500px;
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
