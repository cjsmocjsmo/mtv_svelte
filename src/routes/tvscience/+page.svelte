<script>
	import TvShowsCard from '../../components/TVShowsCard.svelte';
	import AlienWorldsImg from '$lib/images/scifi/alienworlds.avif';
    import PrehistoricImg from '$lib/images/prehistoricplanet.avif';
    
</script>

<main>
	<div class="foo">
		<ul>
			<TvShowsCard 
                number_of_seasons="1"
                src={AlienWorldsImg} 
                title="Alien Worlds" 
            />
            <TvShowsCard 
                number_of_seasons="7"
                src={PrehistoricImg}
                title="Prehistoric Worlds" 
            />
		</ul>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		margin: 0;
	}
</style>
