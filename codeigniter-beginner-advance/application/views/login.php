<html>
	<head>
		<meta charset="UTF-8">
		<title>Login Panel</title>

		<link rel="stylesheet" href="<?php echo base_url();?>assets/css/bootstrap.min.css">
		<link rel="stylesheet" href="<?php echo base_url();?>assets/css/bootstrap-theme.min.css">

	</head>
	<body>

		<div class="container">
			<h1>Login Form</h1>

			<?php 
				$form_attr = array(
					'class' => 'form-horizontal', 
					'method' => 'post'
				);
				$input_attr = array(
					'id' => 'username',
					'class' => 'form-control',
					'name' => 'username',
					'placeholder' => 'Enter Your Username',
					'type' => 'text'
				);
				$password_attr = array(
					'class' => 'form-control',
					'name' => 'password',
					'placeholder' => 'Enter Your password',
					'type' => 'password'
				);
				$btn_attr = array(
					'class' => 'btn btn-default',
					'name' => 'get_form',
					'value' => 'Submit',
					'type' => 'submit'
				);

				echo form_open('Login_con/process', $form_attr);
					echo form_label('Username');
					echo form_input($input_attr);
					echo form_label('Password');
					echo form_input($password_attr);
					echo form_input($btn_attr);
				echo form_close(); 
			?>

			<?php 

				if($this->session->flashdata('errors')){
					echo $this->session->flashdata('errors');
				}

			?>

		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
		<script src="<?php echo base_url();?>assets/js/bootstrap.min.js"></script>

	</body>
</html>