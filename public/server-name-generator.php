<?php 

$adjectives = ['ugly','purple','stupid','bitey','sparkley','funky'];
$nouns = ['kitten','toenail','booger','thumb','shoelace','eyeball'];
$quotes = [
	"Rihanna" => "Oh na na, what's my name?",
	"W. C. Fields" => "It ain't what they call you, it's what you answer to.",
	"J.K. Rowling" => "Always use the proper name for things. Fear of a name increases fear of the thing itself.",
	"Jerry Spinelli" => "Every name is real. That's the nature of names.",
	"Jean-Paul Sartre" => "I confused things with their names: that is belief."
];

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
 		}
 	</style>
 </head>
 <body>
 	<header>
	 	<h1>Server Name Generator</h1>
	 	<?php $author = array_rand($quotes); ?>
	 	<h2 class="subtitle"><?php echo $quotes[$author]; ?></h2>
	 	<p class="subtitle"> - <?php echo $author; ?></p>
 	</header>
 	<main>
	 	<h3>Your new name is: </h3>
	 	<h2><?php echo $adjectives[array_rand($adjectives)]; ?> <?php echo $nouns[array_rand($nouns)]; ?></h2>
 	</main>
 </body>
 </html>