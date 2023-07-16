<script>
    import BackArrow from '../../components/BackArrow.svelte';
	import TvShowsCard from '../../components/TVShowsCard.svelte';
    import HouseOfTheDragon from '$lib/images/fantasy/houseofthedragon.avif';
    import RingsOfPower from '$lib/images/fantasy/thelordoftheringsringsofpower.avif';
    import WheelOfTime from '$lib/images/fantasy/wheeloftime.avif';

</script>

<div>
	<BackArrow path="/tvshows" />
	<div class="foo">
		<div class="bar">
			<TvShowsCard src={HouseOfTheDragon} />
            <TvShowsCard src={RingsOfPower} />
            <TvShowsCard src={WheelOfTime} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	}

	
	@media (min-width: 500px) {
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
			grid-template-columns: repeat(3, 1fr);
		}
	}

</style>
