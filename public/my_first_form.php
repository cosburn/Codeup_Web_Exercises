<?php
	var_dump($_GET);
	var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>My First Form</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<section id="email">
			<h2>User Login</h2>
			<form method="POST" action="/my_first_form.php">
				<p>
					<label for "username">Username</label>
					<input id="username" name="username" type="text" placeholder="Use Your Name">
				</p>
				<p>
					<label for"password">Password</label>
					<input id="password" name="password" type="password" placeholder="Pass Words">
				</p>
				<p>
					<button type="submit" name="claire" value="value">Login</button>
				</p>
			</form>

			<form method="POST" action="/my_first_form.php">
				<h2>Compose an Email</h2>
				<p>
					<label for="to">To:</label>
					<input id="to" name="to" type="text" placeholder="Who do you love?">
				</p>
				<p>
					<label for="from">From:</label>
					<input id="from" name="from" type="text" placeholder="Who are you?">
				</p>
				<p>
					<label for="subject">Subject:</label>
					<input id="subject" name="subject" type="text" placeholder="What will you say?">
				</p>
				<p>
					<label for="email_body">Body:</label>
				<p>
					<textarea id="email_body" name="email_body" rows="10" cols="50" placeholder="Don't say anything you might regret."></textarea>
				</p>
				<p>
					<label for="save">Save copy to sent folder?</label>
					<input type="checkbox" name="save" id="save" value="yes" checked="checked">
				</p>
				<p>
					<input type="submit" name="send_button" value="Send">
				</p>
			</form>
		</section>
		<section id="multiple_choice">
			<form method="POST" action="/my_first_form.php">
				<h2>Multiple Choice Test!</h2>
				<p>
					How much do you know about yourself?
				</p>
				<p>
					<h3>What is your darkest fear?</h3>
					<p>
						<input type="radio" id="death" name="fear" value="Death">
						<label for="death">Death</label>
					</p>
					<p>
						<input type="radio" id="time" name="fear" value="Wasted Time">
						<label for="time">Wasted Time</label>	
					</p>
					<p>	
						<input type="radio" id="alone" name="fear" value="Being Alone">
						<label for="alone">Being Alone</label>
					</p>
					<p>	
						<input type="radio" id="children" name="fear" value="Children">
						<label for="children">Children</label>
					</p>
				</p>
				<p>
					<h3>Who do you love the most?</h3>
					<p>
						<input type="radio" id="family" name="love" value="Your Family">
						<label for="death">Your Family</label>
					</p>
					<p>	
						<input type="radio" id="your_children" name="love" value="Your Children">
						<label for="alone">Your Children</label>
					</p>
					<p>
						<input type="radio" id="society" name="love" value="Society">
						<label for="time">Society</label>	
					</p>
					<p>	
						<input type="radio" id="yourself" name="love" value="Yourself">
						<label for="children">Yourself</label>
					</p>
				</p>
				<p>
					<h3>What would you like to accomplish? <em>(check all that apply)</em></h3>
					<p>
						<input type="checkbox" id="find_love" name="acc_love" value="Find and know great love.">
						<label for="find_love">Find and know great love.</label>
					</p>
					<p>
						<input type="checkbox" id="happy_family" name="acc_family" value="Raise a family to be happier and more successful than myself.">
						<label for="happy_family">Raise a family to be happier and more successful than myself.</label>	
					</p>
					<p>	
						<input type="checkbox" id="evolve" name="acc_evolve" value="Evolve beyond desire and know Nirvana.">
						<label for="evolve">Evolve beyond desire and know Nirvana.</label>
					</p>
					<p>	
						<input type="checkbox" id="money" name="acc_money" value="Have a lot of money and command respect from those around me.">
						<label for="money">Have a lot of money and command respect from those around me.</label>
					</p>
				</p>
				<h2>Select Testing</h2>
				<p>
					<em>Choose carefully.</em>
				</p>
				<p>
					<label for="yes_no">Yes or No?</label>
					<select id="yes_no" name="yes_no">
						<option value="1">Yes</option>
						<option value="0">No</option>
					</select>
				<p>
					<label for="yes_no_maybe">How many dare you select?</label>
					<select id="yes_no_maybe" name="yes_no_maybe[]" multiple>
						<option name="yes" value="1">Yes</option>
						<option name="no" value="0">No</option>
						<option name="maybe" value="2">Maybe</option>
					</select>
				</p>
				<p>
					<input type="Submit" id="submit" name="submit" value="Submit">
				</p>
			</form>
		</section>
	</body>
</html>
