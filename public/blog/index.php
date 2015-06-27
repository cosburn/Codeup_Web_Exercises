<?php 
	require "data/posts.php";
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP Blog</title>
	<link rel="stylesheet" href="css/normalize.css">
</head>
<body>
	<?php require_once "header.php" ?>
	<?php require_once "nav.php" ?>
	<?php require_once "sidebar.php" ?>
	<main>
		<?php foreach($posts as $post): ?>
			<article>
				<h2><?= $post["title"] ?></h2>
				<p><?= $post["author"] ?></p>
				<p><?= $post["date"] ?></p>
				<p><?= $post["content"] ?></p>
			</article>
		<?php endforeach; ?>
	</main>
	<?php require_once "footer.php" ?>

</body>
</html>