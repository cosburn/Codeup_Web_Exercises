<?php 
	$numbers = array(1,2,3,4,5);

	var_dump($numbers);
	print_r($numbers);

	$numbersTwo = [1,2,3,4,5];

	echo $numbers[3];

	$person = [
		"firstName" => "Claire",
		"lastName"  => "Osburn",
		"email"     => "email@email.com",
		"phone"     => "936-232-3770"
	];

	var_dump($person);

	$test = [
		"person1" => [
			"firstName" => "Claire",
			"lastName"  => "Osburn",
			"email"     => "email@email.com",
			"phone"     => "936-232-3770"
		],
		"person2" => [
			"firstName" => "Joe",
			"lastName"  => "Bob",
			"email"     => "email@place.com",
			"phone"     => "123-456-7890"
		],
		"person3" => [
			"firstName" => "Suzy",
			"lastName"  => "GIllmore",
			"email"     => "coolchick@email.com",
			"phone"     => "867-5309"
		]
	];

	var_dump($test);

	echo $test["person1"]["firstName"];

 ?>