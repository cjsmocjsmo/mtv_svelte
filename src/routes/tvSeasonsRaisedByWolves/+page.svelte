<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	export let data;
	let ddata = data[0];
	let ddata2 = data[1];
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Rasised By Wolves</h1>
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
