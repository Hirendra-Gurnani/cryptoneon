<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'cryptoneon');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['signup'])){

    $fname=$_POST['name']; 
    $mail=$_POST['email'];
    $pass=$_POST['password'];
    $currency=$_POST['currency'];
    $exist = "SELECT email FROM customers WHERE email = '$mail'";
    $ifexist = mysqli_query($conn,$exist);
    $ifexistquery = mysqli_fetch_assoc($ifexist);
    if($ifexistquery)
        {
            emailexist();
        }
    else
    {
           $insertintodb = "INSERT INTO customers(name,email,password,currency)  VALUES('$fname','$mail','$pass','$currency')";
           mysqli_query($conn,$insertintodb);
           $_SESSION["gemail"] = $mail;
           $_SESSION["name"] = $fname;
           $_SESSION["currency"] = $currency;
           $createtable = "CREATE TABLE `". $mail ."` (id varchar(5), price double)";
            mysqli_query($conn,$createtable);
            echo "<script> 
            window.location.href='../html/homepage.php';</script>";
       }

}

if(isset($_POST["login"])){
    $mail = $_POST["lemail"];
    $pass = $_POST["lpass"];
    $sql="SELECT * FROM customers WHERE email = '$mail'";
    $emailexist=mysqli_query($conn,$sql);
    $emailexistdata = mysqli_fetch_assoc($emailexist);
    if($emailexistdata["email"]==0)
    {
        noemail();
    }else{
        if($pass != $emailexistdata["password"]){
                        wrongpass();
        }else{
                $_SESSION["gemail"] = $mail;
                $_SESSION["name"] = $emailexistdata["name"];
                 $_SESSION["currency"] = $emailexistdata["currency"];
                echo "<script> 
                window.location.href='../html/homepage.php';</script>";
            }
        }
}   




function emailexist(){
    echo "<script> 
    sessionStorage.emailexist = '1';
    window.location.href='../html/loginpage.php';</script>";
}
function wrongpass(){
    echo "<script>
    sessionStorage.wrongpass = '1';
     window.location.href='../html/loginpage.php';</script>";
}
function noemail(){
    echo "<script> 
    sessionStorage.noemail = '1';
    window.location.href='../html/loginpage.php';</script>";
}
?>
