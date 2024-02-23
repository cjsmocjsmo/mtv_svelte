<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import SeasonButton from '$lib/components/TVSeasonPlayButton.svelte';
	export let data;
	let zoo = data.badbatch[0];
	let zoo1 = data.badbatch[1];
	let zoo2 = data.badbatch[2];
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>Bad Batch</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each zoo as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#each zoo1 as d2}
				<SeasonButton info={d2} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#each zoo2 as d3}
				<SeasonButton info={d3} />
			{/each}
		</div>
		<PlayerControls />
	</div>
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
