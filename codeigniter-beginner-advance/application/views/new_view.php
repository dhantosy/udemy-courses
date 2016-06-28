<html>
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<h1>Hellow!</h1>
		<!-- <?php print_r($currency); ?> -->
		
		<table border="1">
			<tr>
				<th>No</th>
				<th>ID</th>
				<th>Post Title</th>
				<th>Post Description</th>
				<th>Post author</th>
				<th>Post Date</th>
			</tr>
			<?php  
				$c = 0;
				foreach ($posts as $post) {
					$c++;
					echo '
						<tr>
							<td>'.$c.'</td>
							<td>'.$post['id'].'</td>
							<td>'.$post['post_title'].'</td>
							<td>'.$post['post_description'].'</td>
							<td>'.$post['post_author'].'</td>
							<td>'.$post['post_date'].'</td>
						<tr>
					';
				}
			?>
		</table>
	</body>
</html>