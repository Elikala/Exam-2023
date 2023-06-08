<script lang="ts">
</script>

<div class="container">
	<h1>Tere tulemast!</h1>
	<div class="input">
		<p>Name</p>
		<input type="input" />
	</div>
	<div class="input">
		<p>Password</p>
		<input type="input" />
	</div>
</div>

<style>
	.container {
		background-color: black;
		width: 100%;
		height: 100%;
		padding: 50px 200px;
	}

	input {
		width: max-content;
		height: max-content;
		left: 200px;
		padding: 24px 40px;
		background: rgba(255, 255, 255, 0.23);
		border: 4px solid #ffffff;
		border-radius: 82px;
		align-content: center;
		justify-content: center;
		margin-top: 40px;
	}

	.input {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
		width: 100%;
		margin-top: 40px;
	}
</style>
