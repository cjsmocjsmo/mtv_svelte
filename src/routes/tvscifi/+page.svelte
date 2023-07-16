<script>
	import BackArrow from '../../components/BackArrow.svelte';
    import TvSiloCard from '../../components/TVSiloCard.svelte';
    import SiloImg from '$lib/images/Silo.webp';
    import TvTheLastOfUsCard from '../../components/TVTheLastOfUsCard.svelte';
    import TheLastOfUsImg from '$lib/images/scifi/lastofus.avif';
    import TvFoundationCard from '../../components/TVFoundationCard.svelte';
    import FoundationImg from '$lib/images/scifi/foundation.avif';
	import TvAlteredCarbonCard from '../../components/TVAlteredCarbonCard.svelte';
	import AlteredCarbonImg from '$lib/images/scifi/alteredcarbon.avif';
	import TvCowboyBebopCard from '../../components/TVCowboyBebopCard.svelte';
	import CowboyBebopImg from '$lib/images/scifi/cowboy_bebop.avif';
	import TvForAllManKindCard from '../../components/TVForAllManKindCard.svelte';
	import ForAllManKindImg from '$lib/images/scifi/forallmankind.avif';

	
</script>

<div>
	<BackArrow path="/tvshows" />
	<div class="foo">
		<div class="bar">
			<TvSiloCard src={SiloImg} />
            <TvTheLastOfUsCard src={TheLastOfUsImg} />
            <TvFoundationCard src={FoundationImg} />
			<TvAlteredCarbonCard src={AlteredCarbonImg} />
			<TvCowboyBebopCard src={CowboyBebopImg} />
			<TvForAllManKindCard src={ForAllManKindImg} />
			
			
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
	@media (min-width: 700px) {
		.bar {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (min-width: 900px) {
		.bar {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
