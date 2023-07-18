<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	export let data;
	let s1 = data[0];
	let s2 = data[1];
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Altered Carbon</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		{#each s1 as d}
			<SeasonButton info={d} />
		{/each}
	</div>
	<div>
		<h1>Season 2</h1>
		{#each s2 as d2}
			<SeasonButton info={d2} />
		{/each}
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
