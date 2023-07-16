<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvVoyagerCard from '../../components/TVVoyagerCard.svelte';
	import VoyagerImg from '$lib/images/startrek/voyager.avif';
	import TvSTTVCard from '../../components/TVSTTVCard.svelte';
	import STTVImg from '$lib/images/startrek/sttv.avif';
	import TvEnterpriseCard from '../../components/TVEnterpriseCard.svelte';
	import EnterpriseImg from '$lib/images/startrek/enterprise.avif';
	import TvNextGenerationCard from '../../components/TVNextGenerationCard.svelte';
	import NextGenerationImg from '$lib/images/startrek/nextgen.avif';
	import TvDiscoveryCard from '../../components/TVDiscoveryCard.svelte';
	import DiscoveryImg from '$lib/images/startrek/discovery.avif';
	import TvPicardCard from '../../components/TVPicardCard.svelte';
	import PicardImg from '$lib/images/startrek/picard.avif';
	import TvLowerDecksCard from '../../components/TVLowerDecksCard.svelte';
	import LowerDecksImg from '$lib/images/startrek/lowerdecks.avif';
	import TvProdigyCard from '../../components/TVProdigyCard.svelte';
	import ProdigyImg from '$lib/images/startrek/prodigy.avif';
	import TvStrangeNewWorldsCard from '../../components/TVStrangeNewWorldsCard.svelte';
	import StrangeNewWorldsImg from '$lib/images/startrek/strangenewworlds.avif';
</script>

<div>
	<BackArrow path="/tvshows" />
	<h1>Star Trek</h1>
	<div class="foo">
		<div class="bar">
			<TvVoyagerCard src={VoyagerImg} />
			<TvSTTVCard src={STTVImg} />
			<TvEnterpriseCard src={EnterpriseImg} />
			<TvNextGenerationCard src={NextGenerationImg} />
			<TvDiscoveryCard src={DiscoveryImg} />
			<TvPicardCard src={PicardImg} />
			<TvLowerDecksCard src={LowerDecksImg} />
			<TvProdigyCard src={ProdigyImg} />
			<TvStrangeNewWorldsCard src={StrangeNewWorldsImg} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	}

	h1 {
		color: yellowgreen;
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
