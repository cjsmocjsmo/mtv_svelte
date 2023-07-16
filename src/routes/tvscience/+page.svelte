<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvAlienWorldsCard from '../../components/TVAlienWorldsCard.svelte';
	import AlienWorldsImg from '$lib/images/scifi/alienworlds.avif';
	import TvPreHistoricPlanetCard from '../../components/TVPreHistoricPlanetCard.svelte';
	import PrehistoricImg from '$lib/images/prehistoricplanet.avif';
</script>

<div>
	<BackArrow path="/tvshows" />
	<div class="foo">
		<div class="bar">
			<TvAlienWorldsCard src={AlienWorldsImg} />
			<TvPreHistoricPlanetCard src={PrehistoricImg} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
		margin-left: 2em;
	}

	@media (min-width: 500px) {
		.bar {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	/* @media (min-width: 700px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 900px) {
		.bar {
			grid-template-columns: repeat(4, 1fr);
		}
	} */
</style>
