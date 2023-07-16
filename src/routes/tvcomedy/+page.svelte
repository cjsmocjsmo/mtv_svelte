<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import TvFuuBarCard from '../../components/TVFuuBarCard.svelte';
	import FUUBar from '$lib/images/fubar.webp';
</script>

<div>
	<BackArrow path="/tvshows" />
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
