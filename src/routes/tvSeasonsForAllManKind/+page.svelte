<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	export let data;
	const ddata = data[0];
	const ddata2 = data[1];
	const ddata3 = data[2];
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>For All Man Kind</h1>
	</div>

	<div>
		<h1>Season 1</h1>
		<div>
			{#each ddata as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div>
			{#each ddata2 as d2}
				<SeasonButton info={d2} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 3</h1>
		<div>
			{#each ddata3 as d3}
				<SeasonButton info={d3} />
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
