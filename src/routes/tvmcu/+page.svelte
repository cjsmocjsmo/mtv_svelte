<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvIAmGrootCard from '../../components/TVIAmGrootCard.svelte';
	import IAmGroot from '$lib/images/mcu/iamgroot.avif';
	import TvFalconWinterSoldierCard from '../../components/TVFalconWinterSoldierCard.svelte';
	import FalconWinterSoldier from '$lib/images/mcu/falconwintersoldier.avif';
	import TvLokiCard from '../../components/TVLokiCard.svelte';
	import Loki from '$lib/images/mcu/loki.avif';
	import TvHawkeyeCard from '../../components/TVHawkeyeCard.svelte';
	import Hawkeye from '$lib/images/mcu/Hawkeye.avif';
	import MoonKnightCard from '../../components/TVMoonKnightCard.svelte';
	import MoonKnight from '$lib/images/mcu/moonknight.avif';
	import MsMarvelCard from '../../components/TVMsMarvelCard.svelte';
	import MsMarvel from '$lib/images/mcu/ms_marvel.avif';
	import SheHulkCard from '../../components/TVSheHulkCard.svelte';
	import SheHulk from '$lib/images/mcu/shehulk.avif';
	import WandavisionCard from '../../components/TVWandavisionCard.svelte';
	import Wandavision from '$lib/images/mcu/wandavision.avif';
</script>

<div>
	<BackArrow path="/tvshows" />
	<div class="foo">
		<div class="bar">
			<TvFalconWinterSoldierCard src={FalconWinterSoldier} />
			<TvHawkeyeCard src={Hawkeye} />
			<TvIAmGrootCard src={IAmGroot} />
			<TvLokiCard src={Loki} />
			<MoonKnightCard src={MoonKnight} />
			<MsMarvelCard src={MsMarvel} />
			<SheHulkCard src={SheHulk} />
			<WandavisionCard src={Wandavision} />
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
