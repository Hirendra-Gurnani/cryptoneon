<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'cryptoneon');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST["submit"])){
  $mail=$_SESSION['gemail'];
  $value=$_POST['value'];
  $coin=$_POST['coin'];
  $sql = "UPDATE `".$mail."` SET price = '$value' WHERE id='$coin'";
  mysqli_query($conn,$sql);
  echo "<script>window.location.href='../html/dashboard.php';</script>";
}
?>