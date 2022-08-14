<?php 
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'cryptoneon');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if($_REQUEST["get_coin"] && $_REQUEST["get_name"]){
// if($_POST["coin"]!="" && $_POST["emailid"]!=""){
  // $coinvalue = $_POST["coin"];
  // $emailid = $_POST["emailid"];
   $coinvalue = $_REQUEST["get_coin"];
  $emailid = $_REQUEST["get_name"];
  $sql ="SELECT COUNT(*) FROM `".$emailid."` WHERE id = '".$coinvalue."'" ;
  $result = mysqli_query($conn,$sql);
  $resultnumrows = mysqli_fetch_assoc($result);
  if (implode($resultnumrows)<1){ 
  $sql="INSERT INTO `".$emailid."`(id,price) VALUES('$coinvalue','0')";
  mysqli_query($conn,$sql);
  echo "Added";
  }
  else {
    echo "Already added";
  }
  
  }else{
    echo "no coin or email";
  }
?>