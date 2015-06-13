<?php 
	echo("We don't need no education" . PHP_EOL . "We don't need no thought control");
	echo(PHP_EOL.PHP_EOL);

	$asYouLikeItQuote = "All the world's a stage,".PHP_EOL.
	"And all the men and women merely players:".PHP_EOL.
	"They have their exits and their entraces;".PHP_EOL.
	"And on man in his time plays many parts,".PHP_EOL;

	echo($asYouLikeItQuote);
	echo(PHP_EOL.PHP_EOL);

	$firstName = 'Joe';
	$lastName = 'Blow';
	$address = '123 Any Street';

	echo("$lastName., .$firstName., .$address");
	echo(PHP_EOL.PHP_EOL);

	echo($lastName.$firstName.$address);
	echo(PHP_EOL.PHP_EOL);

	echo("{$lastName}{$firstName}{$address}");
	echo(PHP_EOL.PHP_EOL);

	echo($firstName." ".$lastName.PHP_EOL.$address);
	echo(PHP_EOL.PHP_EOL);

?>