<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	export let data;
	// console.log("tvSeasonsSilo");
	// console.log(data.season1.id);
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Silo</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div>
			{#each data.season1 as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<PlayerControls />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
