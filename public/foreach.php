<?php 
	$things = array('Sgt. Pepper', "11", null, array(1,2,3), 3.14, "12 + 7", false, (string) 11);

	foreach ($things as $thing) {	
		if (is_float($thing)) {
			echo "$thing is a float";
			echo(PHP_EOL);
		}
		if (is_int($thing)) {
			echo "$thing is an integer";
			echo(PHP_EOL);
		}
		if (is_null($thing)) {
			echo "$thing is of type null";
			echo(PHP_EOL);
		}
		if (is_array($thing)) {
			echo "this one is an array";
			echo(PHP_EOL);
		}
		if (is_string($thing)) {
			echo "$thing is a string";
			echo(PHP_EOL);
		}
		if (is_bool($thing)) {
			echo "$thing is a boolean";
			echo(PHP_EOL);
		}	
	}
	echo "---------".PHP_EOL;

	foreach ($things as $thing) {
		if (is_scalar($thing)) {
			echo "$thing is scalar";
			echo(PHP_EOL);
		} 
	}
	echo "---------".PHP_EOL;

	foreach ($things as $thing) {
		if (is_float($thing)) {
			echo $thing;
			echo(PHP_EOL);
		}
		if (is_int($thing)) {
			echo $thing;
			echo(PHP_EOL);
		}
		if (is_null($thing)) {
			echo $thing;
			echo(PHP_EOL);
		}
		if (is_array($thing)) {
			print_r($thing);
			echo(PHP_EOL);
		}
		if (is_string($thing)) {
			echo $thing;
			echo(PHP_EOL);
		}
		if (is_bool($thing)) {
			echo $thing;
			echo(PHP_EOL);
		}
	}


 ?>