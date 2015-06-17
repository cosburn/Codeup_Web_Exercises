<?php 
	$favoriteThings = [
		"catz",
		"tacos",
		"Oregon",
		"learning to code!",
		"outside beers in sunshine",
		"colorful pens","family time",
		"Myazaki movies","pajamas all day"
		];

?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>My Favorite Things</title>
 	<link rel="stylesheet" href="/css/normalize.css">
 	<style type="text/css">
 		body {
 			background-image: url("/img/pusheen_gifs.png");
 		}
	 	.content-wrapper {
	 		background-color: #fff;
	 		padding: 10px;
	 		border: 3px solid #72553C;
	 		border-radius: 5px;
	 		width: 80%;
	 		max-width: 500px;
	 		margin: 0 auto;
	 		margin-top: 100px;
	 	}
	 	header {
	 		text-align: center;
	 	}
	 	header>h1 {
	 		color: #61544B;
	 	}
	 	ul {
	 		list-style: none;
	 		margin-right: 40px;
	 		color: #61544B;
	 	}
	 	li {
	 		padding: 10px;
	 	}
	 	li.grey {
	 		background-color: #f9f9f9;
	 	}
	 	.subtitle {
 			font-style: italic;
 			color: #b5a89c;
 			font-weight: lighter;
 		}
 	</style>
 </head>
 <body>
 	<div class="content-wrapper">
	 	<header>
		 	<h1>My Favorite Things</h1>
		 	<h3 class="subtitle">By: Claire Osburn</h3>
	 	</header>
	 	<main>
		 	<ul>
			 	<?php foreach($favoriteThings as $key => $thing): 
			 		if ($key % 2 == 1): ?>
				 		<li><?= $favoriteThings[$key] ?></li>
				 	<?php else: ?>
				 		<li class='grey'><?= $favoriteThings[$key] ?></li>
				 	<?php endif; ?>
		 		<?php endforeach; ?>
		 	</ul>
	 	</main>
 	</div>
 </body>
 </html>