<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	export let data;
	console.log(data);
	const ddata = data.foundation[0];
	const ddata2 = data.foundation[1];
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Foundation</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each ddata as d}
				<SeasonButton info={d} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 2</h1>
		<div class="seaList">
			{#each ddata2 as d2}
				<SeasonButton info={d2} />
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
		justify-content: center;
		align-items: center;
	}
</style>
