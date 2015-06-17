<?php 
	include "data/blog.php";
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP Blog</title>
</head>
<body>
	<div id="posts">
		<?php foreach($posts as $post): ?>
			<article>
				<h2><?= $post["title"] ?></h2>
				<p><?= $post["author"] ?></p>
				<p><?= $post["date"] ?></p>
				<p><?= $post["content"] ?></p>
			</article>
		<?php endforeach; ?>
	</div>
</body>
</html>