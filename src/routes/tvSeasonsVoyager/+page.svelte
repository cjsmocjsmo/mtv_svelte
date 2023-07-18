<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	import SeasonButton from '../../components/TVSeasonPlayButton.svelte';
	export let data;
	let ddata = data[0];
	let ddata2 = data[1];
	let ddata3 = data[2];
	let ddata4 = data[3];
	let ddata5 = data[4];
	let ddata6 = data[5];
	let ddata7 = data[6];
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>Voyager</h1>
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
	<div>
		<h1>Season 4</h1>
		<div>
			{#each ddata4 as d4}
				<SeasonButton info={d4} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 5</h1>
		<div>
			{#each ddata5 as d5}
				<SeasonButton info={d5} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 6</h1>
		<div>
			{#each ddata6 as d6}
				<SeasonButton info={d6} />
			{/each}
		</div>
	</div>
	<div>
		<h1>Season 7</h1>
		<div>
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
</style>
