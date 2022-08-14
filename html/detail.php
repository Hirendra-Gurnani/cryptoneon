<?php
session_start();
if (isset($_SESSION["gemail"]) && $_SESSION["gemail"] != "" && $_SESSION["name"] != "") {
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
    <title>Welcome to Cryptoneon</title>
    <link rel="icon" href="https://img.icons8.com/material/24/000000/bull.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/54ffc117cf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../stylesheets/homepage.css">
    <link rel="stylesheet" href="../stylesheets/detail.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/curr.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script> var logstatus = "<?php if($logstat){ echo $currency; }else{echo 0;}?>";</script>
    <?php if (isset($mailname)) { ?>
        <script>
            var mailname = "<?php echo $mailname; ?>";
        </script>
    <?php } ?>
</head>

<body>
    <div id="hideAll">
    <div id="outerspinner" class="outer">
    <div class="spinner"></div>
    </div>
    <nav class="navbar navbar-expand-md bg-transparent ">
        <a class="h1 text-body " href="homepage.php">Cryptoneon<sup class="supsr">TM</sup></a>
&emsp;&emsp;&emsp;

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li onclick="search_dropdown()" class="nav-item dark">
                    <div class="nav-link text-body h5 search_button">Search</div>
                </li>
                <li class="nav-item dark">
                    <a class="nav-link text-body h5" href="../html/homepage.php#abtpg">About Cryptocurrency</a>
                </li>
                <li class="nav-item dark">
                    <a class="nav-link text-body h5" href="../html/homepage.php#cont">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- //////////////////////////// /////////////////////////////////////////////////////////////////////////////////////////-->
    <img src="../resource/bg2.png" class="bgimg2"></img>
    <div id="search_bar" class="wrapper_det">
        <div class="textinput">
            <input id="coininput" name="crypto" type="text" placeholder="Search Crypto" autocomplete="off" />
            <div class="recom"></div>
            <button id="btn" onclick="redirect()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg></button>
        </div>
    </div>
    <?php if ($logstat) { ?>
        <div class="login_det">
            <button title="Access your dashboard" onclick="window.location.href='dashboard.php'"><i class="fas fa-user-circle"></i> <?php echo $name; ?></button>
            <button onclick="window.location.href='../php/logout.php'"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </div>
    <?php } else { ?>
        <div class="login_det">
            <button onclick="window.location.href='loginpage.php'">Login/Signup </button>
        </div>
    <?php } ?>
    </div>
    <div class="meta">
        <img id="logo">
        <div class="name">
            <h1 id="coin_name"></h1>
        </div>
        <div class="price">
            <h1><strong id="coin_price"></strong></h1>
        </div>
        <div class="hl24">
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>24-High</td>
                    <td id="high24"></td>
                </tr>
                <tr>
                    <td>24-low</td>
                    <td id="low24"></td>
                </tr>
                <!-- <tr>
                    <td>24Hr Price change %</td>
                    <td id="highperc"></td>
                </tr> -->
            </table>
        </div>
    </div>
    <div class="seek">
        <div class="userinput">
            <input id="coin_n" name="crypto" type="text" placeholder="Change Currency" autocomplete="off" />
            <div class="rcm"></div>
            <button id="btn" onclick="go()">Go</button>
        </div>
    </div>
    <?php if ($logstat) { ?>
        <div class="cnv">
            <table>
                <tr>
                    <td>Rank</td>
                    <td id="rank"></td>
                </tr>
                <tr>
                    <td>Market Cap</td>
                    <td id="market_cap">market_cap</td>
                </tr>
                <tr>
                    <td>Circulating Supply</td>
                    <td id="circulating">circulating_supply</td>
                </tr>
                <tr>
                    <td>Exchanges</td>
                    <td id="numexchanges">num_exchanges</td>
                </tr>
                <tr>
                    <td>High %</td>
                    <td id="vol"></td>
                </tr>
                <tr>
                    <td>Max Supply</td>
                    <td id="maxsup"> max supply</td>
                </tr>
            </table>
        </div>
    <?php } else { ?>
        <div class="cnv" style="filter: blur(8px); -webkit-filter: blur(8px);">
            <table style="visibility: hidden;">
                <tr>
                    <td>Rank</td>
                    <td id="rank"></td>
                </tr>
                <tr>
                    <td>Market Cap</td>
                    <td id="market_cap">market_cap</td>
                </tr>
                <tr>
                    <td>Circulating Supply</td>
                    <td id="circulating">circulating_supply</td>
                </tr>
                <tr>
                    <td>Exchanges</td>
                    <td id="numexchanges">num_exchanges</td>
                </tr>
                <tr>
                    <td>Volume</td>
                    <td id="vol"></td>
                </tr>
                <tr>
                    <td>Max Supply</td>
                    <td id="maxsup"> max supply</td>
                </tr>

            </table>
        </div>
        <p class="onblur"><i class="fas fa-exclamation-circle"></i>Login to see info<br>Get notification for<br>alerts you set</p>
    <?php } ?>

    <!-- <div class="watchlist">
        <button onclick="addwatchlist()"><i class="far fa-bookmark"></i>Set in Watchlist</button>
    </div> -->
    <div class="chrt">
        <canvas id="myChart1" class="canvas1"></canvas>
        <canvas id="myChart2" class="canvas2"></canvas>
    </div>
    <div id="chrt_info" class="chrt_info">
        <button id="now" onclick="changeGraph('live')">Now</button>
        <button onclick="changeGraph('1hr')">1HR</button>
        <button onclick="changeGraph('1d')">1D</button>
        <button onclick="changeGraph('7d')">7D</button>
        <button onclick="changeGraph('30d')">30D</button>
        <button onclick="changeGraph('1yr')">1Y</button>
        <?php if ($logstat) { ?>
            <button id="response" class="watchlist" onclick="addwatchlist()"><i class="far fa-bookmark"></i>&nbsp; Add to Watchlist</button>
        <?php } else { ?>
            <button class="watchlist" onclick="window.location.href='loginpage.php'"><i class="far fa-bookmark"></i>&nbsp; Add to Watchlist</button>
        <?php } ?>
    </div>
    <?php if ($logstat) { ?>
        <div class="inf">
        <?php } else { ?>
            <div class="inf" style="filter: blur(8px); -webkit-filter: blur(8px); pointer-events: none;">
            <?php } ?>
            <h5>Currency to Crypto</h5>
            <span class="lbl">For</span>
            <input id="cnvinput" placeholder="Type your amount here" type="text" oninput="this.value=this.value.replace(/(?![0-9])./gmi,'')" title="Please Enter Number Only" value='' />
            <button id="cnvbtn" onclick="cnvcurrency()">Check</button>
            <br><br>
            <div class="dis"><span class="lbl">You get</span>
                <p id="cnvans" ></p>
            </div>
            <!-- <button id="cnvbtn" onclick="cnvcurrency()">Check</button> -->
            </div>
            <br>
            <div class="more_details_container">
                <div class="dropdown_container">
                <button class="dropbtn">Change Table</button>
                <div class="dropdown-content">
                
                    <li value="1day" onclick="select_table(this.value)">1 Day Changes</li>
                    <li value="7day" onclick="select_table(this.value)">7 Day Changes</li>
                    <li value="30day" onclick="select_table(this.value)">30 Day Changes</li>
                    <li value="365year" onclick="select_table(this.value)">1 Year Changes</li>
                    <li value="999ytd" onclick="select_table(this.value)">YTD Changes</li>
                
                </div>
                </div>
                    <p id="table_name"> 1 Day Change : </p>
                    <table id="volume_table1" class="more_details" style="visibility: visible;">
                        <tr>
                            <th>Volume</th> 
                            <th>Price Change</th>
                            <th>Price Change Percentage</th>
                            <th>Volume Change</th> 
                            <th>Volume Change Percentage</th>
                            <th>Market Cap Change</th> 
                            <th>Market Cap Change Percentage</th>
                        </tr>
                        <tr>
                            <th id="t_volume">3137829270076.77</th>
                            <th id="price_change">-8905.58628990</th>
                            <th id="p_c_p">-0.0029</th>
                            <th id="vol_change">0.7174</th>
                            <th id="v_c_p">-165999025580.23</th>
                            <th id="m_c_c">-0.0028'</th>
                            <th id="m_c_c_p">1222</th>
                        </tr>
                    </table>
            </div>
            <form id="watchlist" action="../php/setwatchlist.php" method="POST">
                <input type='hidden' id='hiddenField1' name='coin' value='' />
                <input type='hidden' id='hiddenField2' name='emailid' value='' />
            </form>
        </div>
        <script type="text/javascript">
            let spin = document.getElementById("outerspinner");
            let bodd = document.getElementsByTagName("body");
            function spinner(){
            spin.style.visibility="hidden";
            }
setTimeout(spinner,5000);</script>
            <script type="text/javascript" src="../js/det.js"></script>

</body>

</html>