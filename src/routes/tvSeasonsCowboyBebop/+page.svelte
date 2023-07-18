<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	export let data;
	function playmovie(path) {
		const ad = 'http://192.168.0.94:8181/OmxplayerPlayMediaReact?medPath=';
		let ad2 = ad + path;
		let resp = fetch(ad2);
	}
</script>

<main>
	<BackArrow path="/tvshows" />
	<div>
		<h1>CowBoy Bebop</h1>
	</div>
	<div>
		{#each data as d}
			<h1>Season {d.season}</h1>
			<div>
				<button onclick={playmovie(d.path)}>{d.episode}</button>
			</div>
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
	button {
		background-color: #4caf50;
		border-style: solid;
		border-color: black;
		border-width: 2px;
		border-radius: 4px;
		color: black;
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
	}
	/* .s3 {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    p {
        margin: 1em;
        font-size: 20px;
    } */
</style>
