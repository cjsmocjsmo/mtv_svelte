<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import SeasonButton from '$lib/components/TVSeasonPlayButton.svelte';
	export let data;
	let ddata = data.voyager[0];
	let ddata2 = data.voyager[1];
	let ddata3 = data.voyager[2];
	let ddata4 = data.voyager[3];
	let ddata5 = data.voyager[4];
	let ddata6 = data.voyager[5];
	let ddata7 = data.voyager[6];
</script>

<main>
	<BackArrow path="/TVShows/tvshows" />
	<div>
		<h1>Voyager</h1>
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
	<div>
		<h1>Season 3</h1>
		<div class="seaList">
			{#each ddata3 as d3}
				<SeasonButton info={d3} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 4</h1>
		<div class="seaList">
			{#each ddata4 as d4}
				<SeasonButton info={d4} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 5</h1>
		<div class="seaList">
			{#each ddata5 as d5}
				<SeasonButton info={d5} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 6</h1>
		<div class="seaList">
			{#each ddata6 as d6}
				<SeasonButton info={d6} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 7</h1>
		<div class="seaList">
			{#each ddata7 as d7}
				<SeasonButton info={d7} />
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