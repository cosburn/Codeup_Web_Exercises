<?php 

$adjectives = [
	'unimaginable',
	'bitey',
	'sparkley',
	'funky',
	'laughable',
	'cantankerous',
	'slimy',
	'piratey',
	'astonishing',
	'feather-soft',
	'thirsty'
	];

$nouns = [
	'kitten',
	'toenail',
	'booger',
	'thumb',
	'shoelace',
	'eyeball',
	'bloodlust',
	'foot',
	'revenge',
	'disappointment',
	'pirate',
	'warboy',
	'furiosa'
	];

$quotes = [
	"Rihanna" => "Oh na na, what's my name?",
	"W. C. Fields" => "It ain't what they call you, it's what you answer to.",
	"J.K. Rowling" => "Always use the proper name for things. Fear of a name increases fear of the thing itself.",
	"Jerry Spinelli" => "Every name is real. That's the nature of names.",
	"Jean-Paul Sartre" => "I confused things with their names: that is belief."
];

$author = array_rand($quotes);

function randomItemFromArray ($array) {
	return $array[array_rand($array)];
};
?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>What's in a name?</title>
 	<link rel="stylesheet" href="/css/normalize.css">
 	<style type="text/css">

 		header,
 		main {
 			width: 90%;
 			max-width: 400px;
 			margin: 0 auto;
 		}
 		header {
 			height: 220px;
 		}
 		header>h1 {
 			border-bottom: 2px solid #f9f9f9;
 			padding-bottom: 10px;
 			margin-bottom: 10px;
 		}
 		.subtitle {
 			font-style: italic;
 			color: #6f6d73;
 			font-weight: lighter;
 		}
 		main {
 			text-align: center;
 			border: 1px solid #fdfdfd;
 			border-radius: 3px;
 			background-color: #fafafa;
 			padding-bottom: 20px;
 		}
 		button {
 			border: none;
 			background-color: #666060;
 			color: #fff;
 			padding: 10px;
 			font-size: 12px;
 			border-radius: 4px;
 			box-shadow: 0px 2px 0px #564f4f
 		}
 		button:hover {
 			background-color: #7f7b7b;
 			box-shadow: 0px 2px 0px #666060;
 		}
 	</style>
 </head>
 <body>
 	<header>
	 	<h1>Server Name Generator</h1>
	 	<h2 class="subtitle"><?= $quotes[$author]; ?></h2>
	 	<p class="subtitle"> - <?= $author; ?></p>
 	</header>
 	<main>
	 	<h4>Your new name is: </h4>
	 	<h2><?= randomItemFromArray($adjectives) ?> <?= randomItemFromArray($nouns); ?></h2>
 		<button id="generate" onclick="generate()">Re-generate</button>
 	</main>

 	<script type="text/javascript">
		function generate() {
			location.reload();
		}
 	</script>
 </body>
 </html>