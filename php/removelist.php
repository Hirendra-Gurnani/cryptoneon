<?php 
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'cryptoneon');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST["formdata"])){
  $coinvalue = $_POST["formdata"];
  $emailid = $_SESSION["gemail"];
  $sql="DELETE FROM `".$emailid."` WHERE id='$coinvalue'";
  mysqli_query($conn,$sql);
  echo "<script>
  window.location.href = '../html/dashboard.php';
  </script>";
  }
?>