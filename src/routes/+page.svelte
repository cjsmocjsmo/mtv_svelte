<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>MTV</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1>MTV</h1>
	<div>
		<div class="movicon">
			<a href="/tvshows"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
				<path
					d="M64 64V352H576V64H64zM0 0H64 576h64V64 352v64H576 64 0V352 64 0zM128 448H512h32v64H512 128 96V448h32z"
				/>
			</svg></a>
		</div>	
		<div class="movlist">
			<a data-sveltekit-preload-data="tap" href="action"><p class="mov">Action</p></a>
			<a data-sveltekit-preload-data="tap" href="arnold"><p class="mov">Arnold</p></a>
			<a data-sveltekit-preload-data="tap" href="brucewillis"><p class="mov">Bruce Willis</p></a>
			<a data-sveltekit-preload-data="tap" href="cartoons"><p class="mov">Cartoons</p></a>
			<a data-sveltekit-preload-data="tap" href="comedy"><p class="mov">Comedy</p></a>
			<a data-sveltekit-preload-data="tap" href="drama"><p class="mov">Drama</p></a>
			<a data-sveltekit-preload-data="tap" href="documentary"><p class="mov">Documentary</p></a>
			<a data-sveltekit-preload-data="tap" href="fantasy"><p class="mov">Fantasy</p></a>
			<a data-sveltekit-preload-data="tap" href="godzilla"><p class="mov">Godzilla</p></a>
			<a data-sveltekit-preload-data="tap" href="harrypotter"><p class="mov">Harry Potter</p></a>
			<a data-sveltekit-preload-data="tap" href="indianajones"><p class="mov">Indiana Jones</p></a>
			<a data-sveltekit-preload-data="tap" href="jamesbond"><p class="mov">James Bond</p></a>
			<a data-sveltekit-preload-data="tap" href="johnwayne"><p class="mov">John Wayne</p></a>
			<a data-sveltekit-preload-data="tap" href="johnwick"><p class="mov">John Wick</p></a>
			<a data-sveltekit-preload-data="tap" href="jurrasicpark"><p class="mov">Jurrasic Park</p></a>
			<a data-sveltekit-preload-data="tap" href="kingsman"><p class="mov">KingsMan</p></a>
			<a data-sveltekit-preload-data="tap" href="meninblack"><p class="mov">Men In Black</p></a>
			<a data-sveltekit-preload-data="tap" href="misc"><p class="mov">Misc</p></a>
			<a data-sveltekit-preload-data="tap" href="nicolascage"><p class="mov">Nicolas Cage</p></a>
			<a data-sveltekit-preload-data="tap" href="pirates"><p class="mov">Pirates</p></a>
			<a data-sveltekit-preload-data="tap" href="riddick"><p class="mov">Riddick</p></a>
			<a data-sveltekit-preload-data="tap" href="startrek"><p class="mov">Star Trek</p></a>
			<a data-sveltekit-preload-data="tap" href="starwars"><p class="mov">Star Wars</p></a>
			<a data-sveltekit-preload-data="tap" href="superheroes"><p class="mov">Super Heroes</p></a>
			<a data-sveltekit-preload-data="tap" href="scifi"><p class="mov">SciFi</p></a>
			<a data-sveltekit-preload-data="tap" href="tomcruize"><p class="mov">Tom Cruize</p></a>
			<a data-sveltekit-preload-data="tap" href="transformers"><p class="mov">Transformers</p></a>
			<a data-sveltekit-preload-data="tap" href="tremors"><p class="mov">Tremors</p></a>
			<a data-sveltekit-preload-data="tap" href="therock"><p class="mov">The Rock</p></a>
			<a data-sveltekit-preload-data="tap" href="xmen"><p class="mov">XMen</p></a>
		</div>
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

	svg {
		display: block;
		width: 3em;
		height: 4em;
		fill: yellowgreen;
	}

	.movlist {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(10, 1fr);
		column-gap: 4em;
		row-gap: .25em;
	}

	p {
		font-size: 1.75em;
		justify-self: center;
		align-self: center;
	}

	.movicon {
		display: flex;
		justify-content: center;
		align-items: center;
	}



	h1 {
		color:yellow;
	}

	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	} */

	/* .welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
