<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	export let data;

    const ddata = data[0];
    const ddata2 = data[1];
    const ddata3 = data[2];

	function playmovie(path) {
		const ad = 'http://192.168.0.94:8181/OmxplayerPlayMediaReact?medPath=';
		let ad2 = ad + path;
		let resp = fetch(ad2);
	}
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
                <button onclick={playmovie(d.path)}>{d.episode}</button>
            {/each}
        </div>
	</div>
    <div>
        <h1>Season 2</h1>
        <div>
            {#each ddata2 as d2}
                <button onclick={playmovie(d2.path)}>{d2.episode}</button>
            {/each}
        </div>
    </div>
    <div>
        <h1>Season 3</h1>
        <div>
            {#each ddata3 as d3}
                <button onclick={playmovie(d3.path)}>{d3.episode}</button>
            {/each}
        </div>
    </div>

    
    
    <PlayerControls />
	<div>
		<h1>Season 2</h1>
		<div>
			<button>Episode01</button>
			<button>Episode02</button>
			<button>Episode03</button>
			<button>Episode04</button>
			<button>Episode05</button>
			<button>Episode06</button>
			<button>Episode07</button>
			<button>Episode08</button>
			<button>Episode09</button>
			<button>Episode10</button>
		</div>
	</div>
	<div>
		<h1>Season 3</h1>
		<div class="s3">
			<p>Episode01</p>
			<p>Episode02</p>
			<p>Episode03</p>
			<p>Episode04</p>
			<p>Episode05</p>
			<p>Episode06</p>
			<p>Episode07</p>
			<p>Episode08</p>
			<p>Episode09</p>
			<p>Episode10</p>
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
	.s3 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	p {
		margin: 1em;
		font-size: 20px;
	}
</style>
