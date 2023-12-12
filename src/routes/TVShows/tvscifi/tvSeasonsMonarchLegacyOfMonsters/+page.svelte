<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import SeasonButton from '$lib/components/TVSeasonPlayButton.svelte';
	export let data;
	const ddata = data.monarchlegacyofmonsters[0];
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>Monarch Legacy Of Monsters</h1>
	</div>

	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each ddata as d}
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
	.seaList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>