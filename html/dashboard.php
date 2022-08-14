<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'cryptoneon');
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($_SESSION["gemail"] != "") {
	$mail = $_SESSION["gemail"];
	$currency = $_SESSION["currency"];
	$sql = "SELECT * FROM `" . $mail . "`";
	$result = mysqli_query($conn, $sql);
	$name = $_SESSION["name"];
	$resultrows = mysqli_fetch_all($result);
	$logstat = true;
}else{
	$logstat = false;
} 

?>
 
<html>

<head>
	<script>window.onload = function() 
        { document.getElementById("hideAll").style.visibility="visible";
      }
    </script>  
	<script>
		var arr = <?php echo json_encode($resultrows); ?>;
		// console.log(arr)
		// console.log(value)
	</script>
	<link rel="stylesheet" href="../stylesheets/dashboard.css">
	<link rel="icon" href="https://img.icons8.com/material/24/000000/bull.png" type="image/x-icon">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://kit.fontawesome.com/54ffc117cf.js" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script> var logstatus = "<?php if($logstat){ echo $currency; }else{echo 0;}?>";</script>
</head>

<body>
	<div id="hideAll">
	<img src="../resource/bg2.png" class="bgimg"></img>
	<nav class="navbar navbar-expand-md bg-transparent ">
		<a class="h1 text-body " href="homepage.php">Cryptoneon<sup class="supsr">TM</sup></a>
		&emsp; &emsp; &emsp; &emsp;

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse " id="collapsibleNavbar">
			<ul class="navbar-nav">
				<li onclick="search_dropdown()" class="nav-item dark">
					<a class="nav-link text-body h5">Search</a>
				</li>
				<li class="nav-item dark">
				<a class="nav-link text-body h5" href="../html/homepage.php#abtpg">About Cryptocurrency</a>
				</li>
				<li class="nav-item dark">
					<a class="nav-link text-body h5" href="../html/homepage.php#cont">Contact Us</a>
				</li>
				<li class="nav-item dark">
					<a onclick="window.location.href='../php/logout.php'" class="nav-link text-body h5" href="#">Logout</a>
				</li>
			</ul>
		</div>
	</nav>

	<div id="search_bar" class="wrapper_dash">
		<div class="textinput">
			<input id="coin" name="crypto" type="text" placeholder="Search Crypto" autocomplete="off" />
			<div class="recom"></div>
			<button id="btn" onclick="go()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
				</svg></button>
		</div>
	</div>
	<br><br>
	<div class="wel">
		<h2>Welcome to your dashboard, <?php echo $name; ?>!<hr></h2><br>You can add more to your watchlist and track progress here.<br>Also, you can set email alerts when target price is hit or crossed.
	</div>

	<table id="table_block" class="table_block">
		<tr>
			<th>

			</th>
			<th>
				Token
			</th>
			<th>
				Current Amount
			</th>
			<th>
				Alert Amount
			</th>
			<th>
				Set Alert
			</th>
		</tr>
	</table>
	<br>
	<div class=about_mailer>
		<p>
			If any alert is set then you will receive an email in your Registered Email ID.
			Once the Email is sent the set alert price will turn to 0 (zero).
			You can also remove any record if you want to by clicking on the dustbin (<i class='far fa-trash-alt'></i>) and click on the token name for more details.
		</p>
	</div>
	<div class="empty_space" id="emptyspace">
		<p></p>
	</div>
	<form id="removedat" action="../php/removelist.php" method="POST">
		<input type='hidden' id='formdata' name='formdata' value='' />
	</form>
</div>
	<script type="text/javascript" src="../js/dashboard.js"></script>
</body>

</html>