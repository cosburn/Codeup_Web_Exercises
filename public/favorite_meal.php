<DOCTYPE html>
<html>
<head>
	<title>My Favorite Meal</title>
</head>
<body>
	<header>
		<h1>Pizza</h1>
	</header>
	<main>
		<p>
			Follow this recipe and you will have created the BEST PIZZA OF ALL TIME.
		</p>
		<h2>Ingredients:</h2>
		<p>
			<ul>
				<li>Dough</li>
				<li>Sauce</li>
				<li>Cheese</li>
				<li>Garlic</li>
				<li>Mushrooms</li>
				<li>Black Olives</li>
				<li>Bell Peppers</li>
			</ul>
		</p>
		<form method="POST" action="/favorite_meal.php">
			<h3>Suggest a food that you like! </h3>
			<p><em>No one reads this anyway.</em></p>
				<label for="suggestion">Suggestion:</label>
				<input type="text" id="suggestion" name="suggestion">
			</p>
			<p>
				<label for="send">
				Send me the recipe for this food?
				<input id="send" type="Checkbox" name="send" value="yes" check>
				</lable>
			</p>
			<p>
				<input type="submit" name="submit" value="Submit">
			</p>
		</form>	
	</main>
	<aside>
		<h3>Other foods you might like:</h3>
		<ul>
			<li><a href="#" title="Salad">Salad</a></li>
			<li><a href="#" title="Garlic Bread">Garlic Bread</a></li>
			<li><a href="#" title="Ice Cream">Ice Cream</a></li>
		</ul>
	</aside>

<?php 
	var_dump($_POST);
?>

</body>
</html>