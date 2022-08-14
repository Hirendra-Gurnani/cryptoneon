<?php 
session_start();
$_SESSION['gemail']="";
$_SESSION['name']="";
session_destroy();
header("Location: ../html/homepage.php");
exit();
?>