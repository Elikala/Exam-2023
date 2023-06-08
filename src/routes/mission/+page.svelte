<script lang="ts">
	import bigLogo from '$lib/media/BigLogo.png';
	import jupiter from '$lib/media/jupiter.png';
	import mountains from '$lib/media/mountains.png';
	import insideMoon from '$lib/media/Inside_the_Moon.png';
	import satellite from '$lib/media/model.png';

	import { Instagram } from 'lucide-svelte';
	import { Twitter } from 'lucide-svelte';
	import { Facebook } from 'lucide-svelte';
</script>

<div class="container">
	<div class="section">
		<header>
			<img class="logo" src={bigLogo} alt="bigLogo" />
			<div class="menu">
				<li><a href="#"><p>Home</p></a></li>
				<li><a href="#"><p>About mission</p></a></li>
				<li><a href="#"><p>Contact</p></a></li>
			</div>
		</header>

		<div class="hero">
			<h1>About Europa Clipper mission</h1>
			<p>A mission to Jupiter's icy moon</p>
		</div>

		<img class="first-img" src={jupiter} alt="jupiter" />
		<img class="second-img" src={mountains} alt="Half moon blue" />
	</div>

	<div class="section">
		<div class="first-paragraph">
			<h2>NASA's Europa Clipper mission will launch in</h2>
			<p>
				Life on Earth requires three things to thrive: a source of energy like sunlight, a liquid
				solvent like water, and elements like carbon that can form complex molecules known as
				organics.
			</p>
			<p>Jupiter's icy moon Europa may have all of these things.</p>
		</div>
	</div>

	<div class="section">
		<div class="second-paragraph">
			<h2>Inside Europa moon</h2>
			<p>
				From ground-based telescopes, scientists knew that Europa's surface is mostly water ice, and
				scientists have found strong evidence that beneath the ice crust is an ocean of liquid water
				or slushy ice.
			</p>
		</div>

		<img class="third-img" src={insideMoon} alt="Blue Moon" />
	</div>

	<div class="section">
		<div class="third-paragraph">
			<h2>How Europa Clipper Works</h2>
			<p>
				Europa Clipper will orbit Jupiter instead of Europa directly, spending the bulk of its time
				outside of the planet's intense radiation field. The spacecraft will periodically dive
				through Jupiter's radiation, fly by Europa for data collection, and then flee the scene.
				This strategy will allow Europa Clipper to study the moon for years rather than days or
				months.
			</p>
		</div>

		<img class="forth-img" src={satellite} alt="Satellite" />
	</div>
	<div class="section">
		<div class="numbers-header">
			<h2>Numbers about NASA's Europa Clipper mission</h2>

			<div class="numbers-container">
				<div class="numbers">
					<div class="numbers-line" />
					<h1>7</h1>
					<p>Year’s duration</p>
				</div>
				<div class="numbers">
					<div class="numbers-line" />
					<h1>$1.9B</h1>
					<p>Estimate cost</p>
				</div>
			</div>
		</div>
	</div>

	<footer>
		<img class="logo" src={bigLogo} alt="bigLogo" />
		<div class="footer-menu">
			<p>Home</p>
			<p>About mission</p>
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
	}

	header {
		display: grid;
		grid-template-columns: 2fr 1fr;
		height: 80px;
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

	.hero {
		display: flex;
		flex-direction: column;
		margin-top: 200px;
		max-width: 800px;
		height: 600px;
		gap: 24px;
		margin-left: auto;
		text-align: right;
	}

	.first-paragraph {
		display: flex;
		flex-direction: column;
		margin-top: 300px;
		height: 600px;
		max-width: 800px;
		gap: 80px;
	}

	.second-paragraph {
		display: flex;
		flex-direction: column;
		margin-top: 100px;
		text-align: right;
		height: 800px;
		max-width: 800px;
		margin-left: auto;
		gap: 80px;
	}

	.third-paragraph {
		display: flex;
		flex-direction: column;
		margin-top: 500px;
		height: 800px;
		max-width: 800px;
		gap: 80px;
	}

	.numbers-header {
		margin-top: 200px;
		max-width: 1000px;
	}

	.numbers-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 100px;
		margin-top: 100px;
		width: 100%;
		margin-bottom: 200px;
	}

	.numbers {
		display: flex;
		gap: 40px;
		align-items: center;
		margin-bottom: 200px;
		padding-left: 16px;
		border-left: 4px solid #ffffff;
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
	}

	.first-img {
		height: 700px;
		position: absolute;
		top: 100px;
		left: -200px;
	}

	.second-img {
		width: 100%;
		position: absolute;
		top: 500px;
		left: -200px;
		z-index: 2;
	}

	.third-img {
		height: 1000px;
		position: absolute;
		top: 500px;
	}

	.forth-img {
		height: 800px;
		top: 400px;
		right: -50px;
		transform: rotate(45deg);
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

		.hero {
			max-width: 380px;
		}

		.first-paragraph {
			margin-top: 100px;
			height: 400px;
			max-width: 380px;
			gap: 40px;
		}

		.second-paragraph {
			margin-top: -300px;
			max-width: 380px;
			gap: 40px;
		}

		.third-paragraph {
			margin-top: 0px;
			max-width: 380px;
			gap: 40px;
		}

		.numbers-header {
			margin-top: -300px;
			max-width: 380px;
		}

		.numbers-container {
			display: flex;
			flex-direction: column;
			gap: 40px;
			margin-top: 60px;

			margin-bottom: 0px;
		}

		.numbers {
			gap: 20px;
			margin-bottom: 0px;
		}

		footer {
			height: 250px;
			margin-top: -300px;
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

		.footer-social {
			height: max-content;
		}

		.first-img {
			height: 300px;
			top: 500px;
			left: -100px;
		}

		.second-img {
			height: 300px;
			top: 700px;
			left: -10px;
			right: auto;
			width: 100v;
		}

		.third-img {
			height: 250px;
			top: 400px;
		}

		.forth-img {
			height: 250px;
			top: -200px;
			right: 0px;
		}
	}
</style>
