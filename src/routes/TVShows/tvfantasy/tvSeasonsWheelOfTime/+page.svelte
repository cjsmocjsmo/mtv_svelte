<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import SeasonButton from '$lib/components/TVSeasonPlayButton.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>Wheel Of Time</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each data.wheeloftime[0] as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#each data.wheeloftime[1] as d}
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
