<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_con extends CI_Controller {

	public function index() {
		$this->load->view('login');
	}

	public function process() {
		//echo $this->input->post('username');
		$this->form_validation->set_rules('username', 'admin', 'min_length[4]|max_length[15]|alpha|required');

		$this->form_validation->set_rules('password', 'password', 'min_length[4]|max_length[15]|required');

		if($this->form_validation->run() == FALSE) {
			$val_errors = array(
				'errors' => validation_errors()
			);

			$this->session->set_flashdata($val_errors);
			redirect('Login_con');
		} else {

			$user = $this->input->post('username');
			$password = $this->input->post('password');

			$this->Login_model->login_info($user, $password);
		
		}

	}


}
