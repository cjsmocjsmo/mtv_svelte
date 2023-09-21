<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import SeasonButton from '$lib/components/TVSeasonPlayButton.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Rings Of Power</h1>
	</div>
	<div>
		<h1>Season 1</h1>
		<div class="seaList">
			{#each data.ringsofpower as d}
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