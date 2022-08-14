<?php
session_start();

if (isset($_SESSION["gemail"]) && $_SESSION["gemail"] != "") {
    echo "<script>window.location.href = 'homepage.php'</script>";
}
?>
<html>
 
<head>
    <script>window.onload = function() 
        { document.getElementById("hideAll").style.visibility="visible";
      }
    </script>
    <title>Login/Signup</title>
    <link rel="icon" href="https://img.icons8.com/material/24/000000/bull.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/54ffc117cf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../stylesheets/logsign.css">
    <script type="text/javascript" src="../js/curr.js"></script>
</head>
<body>
    <div id="hideAll">
    <div class="hop"><a href="homepage.php"><button><i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Go back</button></a></div>
    <div class="container">
        <!--Data or Content-->
        <div class="box-1">
            <div class="content-holder">
            <h2>Hello <i class="fas fa-exclamation"></i></h2>
                <div class="cimg">
                    <img src="../resource/icons/BTC.svg" alt="">
                    <img src="../resource/icons/DOGE.svg" alt="">
                    <img src="../resource/icons/ETH.svg" alt="">
                </div>
                <br>
                <div class="cimg">
                    <img src="../resource/icons/BNB.svg"  alt="">
                    <img src="../resource/icons/USDT.svg" alt="">
                    <img src="../resource/icons/ADA.svg" alt="">
                </div>
                <br>
                <div class="cimg">
                    <img src="../resource/icons/XRP.svg"  alt="">
                    <img src="../resource/icons/OMG.svg" alt="">
                    <img src="../resource/icons/LTC.svg" alt="">
                </div>
                <!-- <i class="far fa-smile"></i><br> -->
                <button class="button-1" onclick="signup()">Sign up</button>
                <button class="button-2" onclick="login()">Login</button>
            </div>
        </div>


        <!--Forms-->
        <div class="box-2">
            <div class="login-form-container">
                <h1>Login</h1>
                <form action="../php/logsignup.php" method="POST">
                    <input id="login_email" type="email" placeholder="Email (required)" class="input-field" name="lemail" required>
                    <br>
                    <div id="email_doesnot_exist">
                    </div>
                    <br>
                    <input id="login_password" type="password" placeholder="Password (required)" class="input-field" name="lpass" required>
                    <br>
                    <div id="password_notmatch">
                    </div>
                    <br>
                    <button class="login-button" type="submit" name="login">Login</button>
                    <br><br>
                    <div id="login_info">
                        <!-- <label>*Password should be longer than 6 charactors</label> -->
                    </div>
                </form>
            </div>


            <!--Create Container for Signup form-->
            <div class="signup-form-container">
                <h1>Sign Up</h1>
                <form action="../php/logsignup.php" method="POST">
                    <input type="text" placeholder="Name (required)" class="input-field" name="name" required>
                    <br><br>
                    <input type="email" id="signup_email" placeholder="Email (required)" class="input-field" name="email" required>
                    <br>
                    <div id="email_already_exist">
                    </div>
                    <br>
                    <input type="password" placeholder="Password (required)" class="input-field" name="password" required>
                    <br>
                    <br>
                    <select class="input-field" name="currency" id="currency" required>
                        <option value="" disabled selected>Select Currency...</option>
                    </select>
                    <!-- <input type="text" placeholder="Preffered Currency (required)" class="input-field" name="currency" required> -->
                    <br><br>
                    <button class="signup-button" type="submit" name="signup">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
        <script type="text/javascript" src="../js/logsign.js"></script>

</body>

</html>