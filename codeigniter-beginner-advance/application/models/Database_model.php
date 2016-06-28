<?php 

	class Database_model extends CI_Model {

		public function database($id) {
			//$this->load->database();

			//$sql = $this->db->query("SELECT * FROM posts WHERE id = '1'");

			// $sql = $this->db->where('id', $id)
			$sql = $this->db->where([

				'id' => $id
				// 'post_date' => $post_date

				])

		 		// ->where('id', 1)
				->get('posts');

			$result = $sql->result_array();

			return $result;
		}

		public function create_post($ins_data)
		{
			$this->db->insert('posts', $ins_data);
		}

		public function update($upd_data, $id)
		{
			$this->db->where('id', $id)->update('posts', $upd_data);
		}

		public function delete($id)
		{
			$this->db->where('id', $id)->delete('posts');
		}

	}

?>
