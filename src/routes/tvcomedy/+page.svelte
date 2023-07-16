<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvShowsCard from '../../components/TVShowsCard.svelte';
	import FUUBar from '$lib/images/fubar.webp';
	
</script>

<div>
	<BackArrow path="/tvshows" />
	<div class="foo">
		<div class="bar">
			<TvShowsCard number_of_seasons="1" src={FUUBar} title="House Of The Dragon" />
			
		</div>
	</div>
</div>

<style>
	/* main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */
	.bar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	/* .bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	} */

	
	/* @media (min-width: 500px) {
		.bar {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 600px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 700px) {
		.bar {
			grid-template-columns: repeat(4, 1fr);
		}
	} */

</style>




<!-- <script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvShowsCard from '../../components/TVShowsCard.svelte';
	import FUUBar from '$lib/images/fubar.webp';
</script>

<main>
	<BackArrow path="/tvshows" />
	<div class="foo">
		<ul>
			<TvShowsCard number_of_seasons="1" src={FUUBar} title="Alien Worlds" />
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
</style> -->
