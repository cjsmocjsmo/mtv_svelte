<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main>
	<h1>MTV</h1>
	<div class="movicon">
		<a href="/"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path
					d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
				/>
			</svg>
		</a>
	</div>
	<div class="movlist">
		<p ></p>
		<a href="/tvcomedy"><p class="mov">comedy</p></a>
		<p class="mov"></p>
		<a href="/tvfantasy"><p class="mov">Fantasy</p></a>
		<a href="/tvstartrek"><p class="mov">Star Trek</p></a>
		<a href="/tvstarwars"><p class="mov">Star Wars</p></a>
		<a href="/tvscifi"><p class="mov">SciFi</p></a>
		<a href="/tvscience"><p class="mov">Science</p></a>
		<a href="/tvmcu"><p class="mov">MCU</p></a>
		<p class="mov"></p>
		<a href="/tvwestern"><p class="mov">Western</p></a>
		<p ></p>
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
	.movicon {
		display: flex;
		justify-content: center;
		align-items: center;
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
	h1 {
		color:yellow;
	}
</style>
