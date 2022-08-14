<?php
session_start();
if (isset($_SESSION["gemail"]) && isset($_SESSION["name"])) {
	$logstat = true;
	$mailname = $_SESSION["gemail"];
	$name = $_SESSION["name"];
	$currency = $_SESSION["currency"];

} else {
	$logstat = false;
}
?>
<html>
 
<head>
	<script>window.onload = function() 
        { document.getElementById("hideAll").style.visibility="visible";
      }
    </script>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Cryptoneon</title>
	<link rel="icon" href="https://img.icons8.com/material/24/000000/bull.png" type="image/x-icon">
	<script src="https://kit.fontawesome.com/54ffc117cf.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="../stylesheets/homepage.css">
	<link rel="stylesheet" href="../stylesheets/media.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script> var logstatus = "<?php if($logstat){ echo $currency; }else{echo 0;}?>";</script>

</head>

<body>
	<div id="hideAll">
	<nav class="navbar navbar-expand-md bg-transparent ">
		<a class="h1 text-body " href="#">Cryptoneon<sup class="supsr">TM</sup></a>
		&emsp; &emsp;

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse " id="collapsibleNavbar">
			<ul class="navbar-nav">
				<li class="nav-item dark">
					<!-- <a class="nav-link text-body h5" href="#">Search</a> -->
				</li>
				<li class="nav-item dark">
					<a class="nav-link text-body h5" href="#abtpg">About Cryptocurrency</a>
				</li>
				<li class="nav-item dark">
					<a class="nav-link text-body h5" href="#cont">Contact Us</a>
				</li>
			</ul>
		</div>
	</nav>
	<img src="../resource/testlog2.svg" class="bgimg"></img>
	<div class="scrolldata">
		<marquee scrollamount="15">
			<span id="scrollingdata">
				&nbsp;
			</span>
		</marquee>
	</div>
	<br>
	<?php if ($logstat) { ?>
		<div class="login_details">
			<button onclick="window.location.href='dashboard.php'"><i class="fas fa-user-circle"></i> <?php echo $name; ?></button>
			<button id="log" onclick="window.location.href='../php/logout.php'"><i class="fas fa-sign-out-alt"></i> Logout</button>
		</div>
	<?php } else { ?>
		<div class="login_details">
			<button onclick="window.location.href='loginpage.php'"><i class="far fa-user-circle"></i> Login/Signup</button>
		</div>
	<?php } ?>
	<div class="searchbar">
		<div>
			<h2><strong>WELCOME TO CRYPTONEON</strong></h2>
		</div>
			<div class="wrapper">
				<div class="textinput">
					<input id="coin" name="crypto" type="text" placeholder="Search Crypto from the list below" autocomplete="off" />
					<div class="recom"></div>
					<button id="btn" onclick="go()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
						</svg></button>
				</div>
			</div>
		<p>Search for cryptocurrency you want to know about<br>
			<?php if ($logstat) { ?>
		</p>
	<?php } else { ?>
		*<a class="blink" href="loginpage.php">Login</a> for more features</p>
	<?php } ?>

	</div>
	<table id="randomiser" class="randomiser">
	</table>
	<h2 id="abtpg" class="heading"><strong>About Our Page</strong></h2>
	<div class="about">

		<p class="paramain">Cryptoneon<sup class="supsr">TM</sup>&nbsp;&nbsp;&nbsp;is a website that provides data insights about the Cryptocurrencies. Various types of information are provided in this website which tracks the desired Crypto`s information in a detailed and graphical method. The information is then further processed and visualized using line chart for better understanding and for simplicity. Going further you will find that this website is easy to navigate.<br><br>
			The website provides you with collection of data which consists of historical data for 1 hour, 1 day, 7 days, 30 days, 1 year, 3 years. Live data is also updated in regular intervals of 5 seconds, timestamped, so that you can cycle through the data and use it for analysis or any other purpose. This site has details about 500 Cryptocurrencies so you can search any of them, result will be on your screen.<br><br>
			There is also an option for changing currency so that the website can be used for any legal tender around the world. Feel free to use and share this website

		</p>

	</div>

	<div id="cont" class="social_icons">
		<p><strong><button onclick="ape()">Click here</button> to view and follow us on social media accounts and show support</strong></p>
		<div class="social_ids" id="socid">
		<div class="devs">
			<h5><img src="../resource/adi.jfif" class="fa_img"></img>Aditya Narayanan</h5>
			<a href="https://twitter.com/Aditya09019603"><i class="fab fa-twitter"></i></a>
			<a href="https://www.linkedin.com/in/aditya-narayanan-908aa8118/"><i class="fab fa-linkedin-in"></i></a>
			<a href="https://www.instagram.com/adi0___0/"><i class="fab fa-instagram"></i></a>
			<a href="https://github.com/narayananadi"><i class="fab fa-github"></i></a>
		</div>
		<div class="devs">
			<h5><img  src="../resource/hiren.jfif" class="fa_img"></img>Hirendra Gurnani</h5>
			<a href="https://twitter.com/hirendran"><i class="fab fa-twitter"></i></a>
			<a href="https://www.linkedin.com/in/hirendra-gurnani-516b741a2/"><i class="fab fa-linkedin-in"></i></a>
			<a href="https://www.instagram.com/humble_fumble_gurnani/"><i class="fab fa-instagram"></i></a>
			<a href="https://github.com/Hirendra-Gurnani"><i class="fab fa-github"></i></a>
		</div>
	</div>
	</div>

	<div class="cu_footer">

		<p>Do Follow</p>
		<a href="https://nomics.com">Crypto Market Cap &amp; Pricing Data Provided By Nomics</a>
	</div>
</div>
	<script type="text/javascript" src="../js/homepage.js"></script>
</body>

</html>