<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import SeasonButton from '$lib/components/TVSeasonPlayButton.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>The Last Of Us</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each data.thelastofus as d}
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
