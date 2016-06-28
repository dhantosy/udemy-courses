<?php 

	class New_model extends CI_Model {

		public function second_model() {
			$curr = array("US"=>"USD", "UK"=>"POUND", "EU"=>"EURO");
			return $curr;
		}

	}

?>