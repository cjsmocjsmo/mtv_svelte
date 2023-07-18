
<script>
	import BackArrow from '../../components/BackArrow.svelte';
    import PlayerControls from '../../components/PlayerControls.svelte';
	export let data;

    let zoo = data[0];
    let zoo1 = data[1];

    function playmovie(path) {
		const ad = 'http://192.168.0.94:8181/OmxplayerPlayMediaReact?medPath=';
		let ad2 = ad + path;
		let resp = fetch(ad2);
	}
</script>


<main>
    <BackArrow path="/tvshows" />
    <div>
        <h1>Bad Batch</h1>
    </div>
    <div>
        <h1>Season 1</h1>
        <div>
            {#each zoo as d}
                <button onclick={playmovie(d.path)}>{d.episode}</button>
            {/each}
        </div>
    </div>
    <div>
        <h1>Season 2</h1>
        <div>
            {#each zoo1 as d2}
                <button onclick={playmovie(d2.path)}>{d2.episode}</button>
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
    button {
        background-color: #4CAF50;
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