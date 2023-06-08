<script lang="ts">
	import bigLogo from '$lib/media/BigLogo.png';
	import satellite from '$lib/media/model.png';
	import moon_1 from '$lib/media/moon_1.png';
	import moon_2 from '$lib/media/moon_2.png';
	import moon_3 from '$lib/media/moon_3.png';
	import moon_4 from '$lib/media/moon_4.png';

	import { Instagram } from 'lucide-svelte';
	import { Twitter } from 'lucide-svelte';
	import { Facebook } from 'lucide-svelte';
	import { goto } from '$app/navigation';
</script>

<div class="container">
	<div class="section">
		<header>
			<img class="logo" src={bigLogo} alt="bigLogo" />
			<ul class="menu">
				<li>
					<a
						on:click={() => {
							goto('/');
						}}
						><p>Home</p>
					</a>
				</li>
				<li>
					<a
						on:click={() => {
							goto('/mission');
						}}><p>About mission</p></a
					>
				</li>
				<li><a><p>Contact</p></a></li>
			</ul>
		</header>

		<div class="hero">
			<h1>Europa Clipper</h1>
			<p>A mission to Jupiter's icy moon</p>
			<button
				on:click={() => {
					goto('/mission');
				}}
			>
				<p>About mission</p>
			</button>
		</div>

		<img class="second-img" src={moon_1} alt="Half moon blue" />
		<img class="first-img" src={satellite} alt="Satellite" />
	</div>
	<div class="section">
		<div class="time-header">
			<h2>NASA's Europa Clipper mission will launch in October 1st 2024</h2>

			<div class="time-container">
				<div class="time">
					<h1>1</h1>
					<p>Years</p>
				</div>
				<div class="time">
					<h1>3</h1>
					<p>Months</p>
				</div>
				<div class="time">
					<h1>22</h1>
					<p>Day</p>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="highlights">
			<h2>Highlights</h2>
			<p>
				Jupiter's icy moon Europa has a saltwater ocean with more than twice the amount of water in
				Earth's oceans.
			</p>
			<p>
				Europa may have the necessary ingredients for life as we know it: water, energy, and complex
				molecules known as organics.
			</p>
			<p>
				NASA's Europa Clipper mission will launch in 2024 and arrive at Jupiter in 2030 to determine
				whether Europa and similar worlds with global oceans could support life.
			</p>
		</div>

		<img class="third-img" src={moon_2} alt="Blue Moon" />
	</div>

	<div class="section">
		<div class="about">
			<h2>About this mission</h2>
			<p>Read more details about Europa Clipper misson</p>
			<button
				on:click={() => {
					goto('/mission');
				}}><p>Read more</p></button
			>
		</div>

		<img class="forth-img" src={moon_3} alt="Half moon brown" />
	</div>

	<div class="section">
		<div class="newsletter">
			<h2>E-mail from space</h2>
			<p>Subscribe to our newsletter and stay updated</p>
			<p>Enter your e-mail</p>
			<div class="input">
				<p>Example@mail.com</p>
			</div>
			<button>
				<p>Subscribe</p>
			</button>
		</div>

		<img class="fifth-img" src={moon_4} alt="Moon and Satellite" />
	</div>

	<footer>
		<img class="logo" src={bigLogo} alt="bigLogo" />
		<div class="footer-menu">
			<p
				on:click={() => {
					goto('/');
				}}
				on:keydown
			>
				Home
			</p>
			<p
				on:click={() => {
					goto('/mission');
				}}
				on:keydown
			>
				About mission
			</p>
			<p>Contact</p>
		</div>
		<div class="footer-social">
			<Twitter color="#ffffff" size="48" />
			<Facebook color="#ffffff" size="48" />
			<Instagram color="#ffffff" size="48" />
		</div>
	</footer>
</div>

<style>
	.container {
		background-color: black;
		width: 100%;
		height: 100%;
		padding: 50px 200px;
		z-index: 1;
		position: relative;
	}

	.section {
		height: 100vh;
		position: relative;
		max-width: 2000px;
	}

	header {
		display: grid;
		grid-template-columns: 2fr 1fr;
		height: 80px;
	}

	.logo {
		max-height: 100%;
		width: 300px;
		grid-column: 1;
	}

	.menu {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 80px;
		padding: 24px;
		grid-column: 2;
		white-space: nowrap;
	}

	header a {
		color: #ffffff;
		display: inline-block;
		position: relative;
	}

	header a::after {
		bottom: 0;
		content: '';
		display: block;
		height: 5px;
		left: 50%;
		position: absolute;
		background: #ffffff;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
		top: 105%;
	}

	header a:hover::after {
		width: 100%;
		left: 0;
	}

	button {
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

	.hero {
		display: flex;
		flex-direction: column;
		padding-top: 200px;
		width: 100%;
		height: 100vh;
		gap: 24px;
		z-index: 4;
	}

	.time-header {
		max-width: 1000px;
		margin-top: 100px;
		width: 100%;
	}

	.time-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 160px;
		margin-top: 200px;
		width: 100%;
		margin-bottom: 200px;
	}

	.time {
		display: flex;
		gap: 50px;
		align-items: center;
		margin-bottom: 400px;
		padding-left: 24px;
		border-left: 4px solid #ffffff;
	}

	.highlights {
		display: flex;
		flex-direction: column;
		margin-top: 0px;
		text-align: right;
		height: 800px;
		max-width: 1000px;
		margin-left: auto;
		gap: 80px;
	}

	.about {
		display: flex;
		flex-direction: column;
		margin-top: 200px;
		max-width: 1000px;
		height: 600px;
		gap: 24px;
	}

	.newsletter {
		display: flex;
		flex-direction: column;
		margin-top: 200px;
		text-align: right;
		height: 800px;
		max-width: 800px;
		margin-left: auto;
		gap: 40px;
		align-items: end;
	}

	.input {
		max-width: 400px;
		height: 94px;
		left: 200px;
		padding: 16px 32px;
		background: #ffffff;
		border: 4px solid #ffffff;
		border-radius: 82px;
		align-content: center;
		justify-content: center;
		margin-top: 40px;
	}

	.input p {
		color: black;
	}

	footer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 200px;
		width: 100%;
		margin-top: 40px;
	}

	footer .logo {
		grid-column: 1;
		grid-row: 1 / span 2;
	}

	.footer-menu {
		display: flex;
		gap: 40px;
		grid-column: 2;
		grid-row: 1;
		margin-bottom: 40px;
		width: 100%;
		justify-content: flex-end;
	}

	.footer-social {
		display: flex;
		gap: 40px;
		grid-column: 2;
		grid-row: 2;
		justify-content: end;
	}

	img {
		object-fit: cover;
		z-index: -2;
	}

	.first-img {
		height: 600px;
		transform: rotate(45deg);
		position: absolute;
		top: 100px;
		right: 0;
	}

	.second-img {
		height: 1400px;
		position: absolute;
		top: 500px;
		left: 50px;
		transform: rotate(45deg);
	}

	.third-img {
		height: 1200px;
		position: absolute;
		left: -600px;
		top: 0;
	}

	.forth-img {
		height: 800px;
		top: 200px;
		right: -200px;
		position: absolute;
	}

	.fifth-img {
		height: 900px;
		transform: scaleX(-1);
		bottom: 0px;
		left: -200px;
		position: absolute;
	}

	@media screen and (max-width: 428px) {
		.container {
			padding: 20px 20px;
			max-width: 428px;
		}

		header {
			grid-template-columns: 1fr 1fr;
			height: 80px;
			text-align: right;
		}

		.logo {
			max-height: 100%;
			width: 300px;
			grid-column: 1;
		}

		.menu {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.time-header {
			max-width: 420px;
		}

		.time-container {
			display: flex;
			flex-direction: column;
			gap: 40px;
			margin-top: 60px;

			margin-bottom: 0px;
		}

		.time {
			gap: 50px;
			margin-bottom: 0px;
		}

		.highlights {
			margin-top: 100px;
			height: 800px;
			max-width: 380px;
			gap: 40px;
		}

		.about {
			margin-top: 200px;
			max-width: 380px;
			height: 600px;
			gap: 24px;
		}

		.newsletter {
			max-width: 380px;
			margin-top: 100px;
		}

		.input {
			max-width: 400px;
			height: max-content;
			margin-top: 20px;
		}

		footer {
			height: 250px;
		}

		footer .logo {
			grid-column: 1;
			grid-row: 1 / span 2;
		}

		.footer-menu {
			display: flex;
			flex-direction: column;
			margin-bottom: 40px;
			text-align: right;
		}
		.first-img {
			height: 250px;
			left: 0px;
			top: 100px;
		}
		.footer-social {
			height: max-content;
		}

		.second-img {
			height: 250px;
			top: 500px;
			left: 0px;
		}

		.third-img {
			height: 400px;
			left: -100px;
			top: 200px;
		}

		.forth-img {
			height: 300px;
			top: 200px;
			right: 0px;
			position: absolute;
		}

		.fifth-img {
			height: 400px;
			left: -100px;
		}
	}
</style>
