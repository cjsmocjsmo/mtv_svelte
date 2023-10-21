<script>
	import BackArrow from '$lib/components/BackArrow.svelte';
	export let data;
	let mtvdb = data.setup_check;
	let stats = data.stats_result;

	console.log(stats)
	console.log(stats[0].moviecount)

	let To_Bytes = stats[0].size;
	let To_GB = To_Bytes / 1000000000;
	let To_GB2 = To_GB.toFixed(2);
	let To_GB3 = To_GB2.toString();
	let To_GB4 = To_GB3 + 'GB';
	console.log(To_GB4);
	// let statuscheck = '';
	// let status_check = async () => {
	// 	const addr = 'http://192.168.0.94:8080/setupcheck/now';
	// 	const res = await fetch(addr);
	// 	statuscheck = await res.json();
	// };

	let setupstatus = '';
	let run_setup = async () => {
		const addr = 'http://192.168.0.94:8080/setup/now';
		const res = await fetch(addr);
		setupstatus = await res.json();
	};
</script>

<main>
	<BackArrow path="/" />
	<div>
		<h1>Admin Page</h1>
	</div>
	{#if mtvdb}
		<div class="boo">
			<!-- <div class="btnList">
				<button on:click={status_check} class="setup2">Check Db Status</button>
				<p>{statuscheck}</p>
			</div> -->
			<div class="card">
				<div>
					<p class="pKey">Is mtv.db present:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal">Yes</p>
				</div>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Number of Movies:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal">{stats[0].moviecount}</p>
				</div>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Number of TV Shows:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal">{stats[0].tvshowcount}</p>
				</div>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Total Size on Disk:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal">{To_GB4}</p>
				</div>
			</div>
		</div>
	{:else}
		<div class="boo2">
			<div class="btnList">
				<button on:click={run_setup} class="setup1">Run Setup</button>
				<p>{setupstatus}</p>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Is mtv.db present:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal2">NO</p>
				</div>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Number of Movies:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal2">0</p>
				</div>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Number of TV Shows:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal2">0</p>
				</div>
			</div>
			<div class="card">
				<div>
					<p class="pKey">Total Size on Disk:</p>
				</div>
				<div class="pValDiv">
					<p class="pVal2">0GB</p>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.boo {
		width: 50%;
		border-style: solid;
		border-width: 3px;
		border-color: yellowgreen;
		border-radius: 0.75em;
		background-color: rgb(163, 104, 218);
	}
	.boo2 {
		width: 30%;
		border-style: solid;
		border-width: 3px;
		border-color: red;
		border-radius: 0.75em;
		background-color: rgb(163, 104, 218);
	}

	h1 {
		color: yellowgreen;
	}
	.btnList {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.setup1 {
		display: block;
		width: 10em;
		height: 3em;
		border-style: solid;
		border-width: 3px;
		border-color: #0deb14;
		border-radius: 0.75em;
		background-color: red;
		color: white;
		margin: 1em;
	}

	button {
		display: block;
		width: 10em;
		height: 3em;
		border-style: solid;
		border-width: 3px;
		border-color: #0deb14;
		border-radius: 0.75em;
		background-color: #4caf50;
		margin: 1em;
	}
	.card {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	.pValDiv {
		width: 5em;
	}
	.pVal {
		margin-left: 3em;
		color: black;
	}
	.pVal2 {
		margin-left: 3em;
		color: red;

	}
	.pKey {
		color: white;
	}
</style>
