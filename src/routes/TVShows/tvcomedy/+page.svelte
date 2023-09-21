<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import TvFuuBarCard from '$lib/components/comedy/TVFuuBarCard.svelte';
	import FUUBar from '$lib/images/fubar.webp';
</script>

<div>
	<BackArrow path="/TVShows/tvshows" />
	<div class="foo">
		<div class="bar">
			<TvFuuBarCard src={FUUBar} />
		</div>
	</div>
</div>

<style>
	.bar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
	}
</style>
