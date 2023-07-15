<script>
	import BackArrow from '../../components/BackArrow.svelte';
	import MovList from '../../components/MovList.svelte';
	export let data;
</script>

<main>
	<BackArrow path="/" />
	<h1>The Rock</h1>
	<MovList {data} />
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
