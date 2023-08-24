<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvAndorCard from '../../components/TVAndorCard.svelte';
	import AndorImg from '$lib/images/starwars/andor.avif';
	import TvBadBatchCard from '../../components/TVBadBatchCard.svelte';
	import BadBatchImg from '$lib/images/starwars/badbatch.avif';
	import TvBobbaFettCard from '../../components/TVBobbaFettCard.svelte';
	import BobbaFettImg from '$lib/images/starwars/bobafett.avif';
	import TvMandalorianCard from '../../components/TvMandalorianCard.svelte';
	import MandalorianImg from '$lib/images/starwars/mandalorian.avif';
	import TvTalesOfTheJediCard from '../../components/TVTalesOfTheJediCard.svelte';
	import TalesOfTheJediImg from '$lib/images/starwars/talesofthejedi.avif';
	import TvObiWanCard from '../../components/TVObiWanCard.svelte';
	import ObiWanImg from '$lib/images/starwars/obiwan.avif';
	import TvVisionsCard from '../../components/TVVisionsCard.svelte';
	import VisionsImg from '$lib/images/starwars/visions.avif';
	import AhsokaImg from '$lib/images/ahsoka.webp';
	import TvAhsokaCard from '../../components/TVAhsokaCard.svelte';
</script>

<div>
	<BackArrow path="/tvshows" />
	<h1>Star Wars</h1>
	<div class="foo">
		<div class="bar">
			<TvAhsokaCard src={AhsokaImg} />
			<TvAndorCard src={AndorImg} />
			<TvBadBatchCard src={BadBatchImg} />
			<TvBobbaFettCard src={BobbaFettImg} />
			<TvMandalorianCard src={MandalorianImg} />
			<TvTalesOfTheJediCard src={TalesOfTheJediImg} />
			<TvObiWanCard src={ObiWanImg} />
			<TvVisionsCard src={VisionsImg} />
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
