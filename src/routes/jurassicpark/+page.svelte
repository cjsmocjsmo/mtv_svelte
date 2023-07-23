<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import MovList from '../../components/MovList.svelte';
	import PlayerControls from '../../components/PlayerControls.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/" />
	<h1>Jurassic Park</h1>
	<PlayerControls />
	<MovList {data} />
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
