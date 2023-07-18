<script>
	export let path;
	export let src;
	export let alt;

	function playmovie() {
		const ad = 'http://192.168.0.94:8181/OmxplayerPlayMediaReact?medPath=';
		let ad2 = ad + path;
		let resp = fetch(ad2);
	}
</script>

<img onclick={playmovie} {src} {alt} />

<style>
	img {
		margin: 1em;
		border-radius: 7px;
	}
</style>
