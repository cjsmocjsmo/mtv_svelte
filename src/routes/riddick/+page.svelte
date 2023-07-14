<script>
	export let data;
	console.log(data.movlist);
</script>

<main>
	<div class="movlist">
		{#each data.movlist as mov}
			<div class="movlist">
				<a data-sveltekit-preload-data="tap" href="/riddick/{mov.movid}">
					<img src={mov.httpthumbpath} alt={mov.name} />
				</a>
				
			</div>
		{/each}
	</div>
</main>

<style>
    main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.movlist {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		
	}
	img{
		margin: 1em;
		border-radius: 7px;
	}
</style>