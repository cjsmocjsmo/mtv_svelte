<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	import MovList from '$lib/components/MovList.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/" />
	<h1>Pirates</h1>
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
