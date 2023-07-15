<script>
    export let data;

    function playmovie(path) {
        let ad = "http://192.168.0.94:8181/OmxplayerPlayMediaReact?medPath=";
        let ad2 = ad + path;
        let resp = fetch(ad2);
	}
</script>


<div class="movlist">
    {#each data.movlist as mov}
        <div class="movlist">
            <img onclick={() => playmovie(mov.path)} src={mov.httpthumbpath} alt={mov.name} />
        </div>
    {/each}
</div>

<style>
    .movlist {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	img {
		margin: 1em;
		border-radius: 7px;
	}
</style>