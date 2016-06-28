<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class New_con extends CI_Controller {

	public function index($id) {
		// $this->load->model('New_model');
		// $sec_mod['currency'] = $this->New_model->second_model();

		//$this->load->model('Database_model');
		$data['posts'] = $this->Database_model->database($id);

		// $this->load->view('new_view', $sec_mod);
		$this->load->view('new_view', $data);
	}

	public function insert_post() {
		$title = 'Health is Wealth';
		$this->Database_model->create_post([
			'post_title' => $title, //we can set the variable too
			'post_description' => 'Health is a gift of nature',
			'post_author' => 'Freylax14',
			'post_date' => '2016-07-02'
		]);
	}

	public function update_post() {
		$id = 3;
		$title = 'Health is Important';
		$this->Database_model->update([
			'post_title' => $title,
			'post_description' => 'Health is a gift of mother nature'
		], $id);
	}

	public function delete_post() {
		$id = 3;
		$this->Database_model->delete($id);
		
	}

	public function new_func() {
		echo  'Hello World!';
	}
}
