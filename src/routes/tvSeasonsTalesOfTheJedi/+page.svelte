<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Tales Of The Jedi</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each data as d}
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
		justify-content: center;
		align-items: center;
	}
</style>
