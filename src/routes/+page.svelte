<script>
	import PlayerControls from '../components/PlayerControls.svelte';
	import MainMovList from '../components/MainMovList.svelte';
</script>

<svelte:head>
	<title>MTV</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1>MTV</h1>
	<div>
		<div class="movicon">
			<a href="/tvshows"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
					<path
						d="M64 64V352H576V64H64zM0 0H64 576h64V64 352v64H576 64 0V352 64 0zM128 448H512h32v64H512 128 96V448h32z"
					/>
				</svg></a
			>
		</div>
		<PlayerControls />
		<MainMovList />
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
	svg {
		display: block;
		width: 3em;
		height: 4em;
		fill: brown;
	}
	.movicon {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		color: yellowgreen;
	}
</style>
