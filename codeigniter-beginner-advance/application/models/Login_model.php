<?php 

	class Login_model extends CI_Model {

		public function login_info($user, $password){
			//$this->db->where('user_name' => $user, 'user_password' => $password);
			$run = $this->db->get('user_info');

			if ($run->num_rows() == 1) {
				return $run->row(0)->user_id;
			} else {
				return false;
			}
		}

	}

?>
