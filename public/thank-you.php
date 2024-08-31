<?php 
session_start();
// include('../connection.php'); 
date_default_timezone_set("Asia/Kolkata");
$date = time();
$current_date = date("Y-m-d H:i:s",$date);

$p_link = $_SERVER['HTTP_HOST'];$ip_address = $_SERVER['REMOTE_ADDR'];  


?>

<!DOCTYPE html>
<html lang="en">
<head>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8Z5BNZL');</script>
<!-- End Google Tag Manager -->
</script>

<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"343035776", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");</script>

<script>window.uetq = window.uetq || [];window.uetq.push('event', 'Submit_lead_form', {});</script>
<script type="text/javascript">   
    function Redirect() 
    {  
        window.location="https://amara-township.com"; 
    } 
    document.write("You will be redirected to a new page in 5 seconds"); 
    setTimeout('Redirect()', 5000);   
</script>

         <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="favicon.jpg" type="image/x-icon" sizes="16x16" />
        <title>Loḍha Evergreen - Vikhroli | Price, Floor Plans, Amenities | Download Brochure</title>
		
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="preload" href="./js/app.js" as="script" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!--  -->
        <style>
            :root {
                --colorPrimary: #1a4521;
                --colorSecondary: #009f91;
                --colorBtn: #ffffff;
            }
            #loader {
                width: 100vw;
                height: 100vh;
                background-color: rgba(255, 255, 255, 1);
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1040;
            }
            .loader-text {
                display: block;
                text-align: center;
                color: #d7d7d7;
                font-family: Arial, sans-serif;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                -o-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
            }
            .loading {
                height: 0;
                width: 0;
                padding: 4vw;
                border: 0.8vw solid #ccc;
                border-right-color: #888;
                border-radius: 6vw;
            
            }
            @keyframes loader {
                0% {
                    filter: grayscale(0);
                }
                50% {
                    filter: grayscale(100%);
                }
                100% {
                    filter: grayscale(0);
                }
            }
            .loader-logo {
                width: 300px;
                -webkit-animation: loader 1.3s infinite linear;
                -moz-animation: loader 1.3s infinite linear;
                -ms-animation: loader 1.3s infinite linear;
                -o-animation: loader 1.3s infinite linear;
                animation: loader 1.3s infinite linear;
            }
            .pload {
                display: none;
            }
            .iti__flag-container {
                display: none;
            }
            section#mymap {
                height: 540px;
            }
            button.btn.btn-sm.btn-outline-info.sectio-bro-btn.overflow-hidden.enqModal {
                margin-bottom: 15px;
            }
            input#submitBtn {
                margin: 15px 0;
            }
            .textcolor{
                color:#fff;
            }
            button.btn.btn-info.micro-form-btn.effetMoveGradient.submitBtn.enqModal {
                margin-bottom: 15px;
            }
            a.drift-open-chat {
                color: #fff;
            }
            p{
                    text-align: justify;
            }
            select.my_country_name.form-control.rounded-0.micro-form-field {
             
                display: inline-block;
                width: 40%;
                    padding-left: 8px;
            }
            input#modal_my_mobile {
                width: 60%;
            }
            /*--for thank you page --*/
            .thankyou-text p {text-align: center !important;}
        </style>

    </head>
    
    <body data-spy="scroll" data-target="#navbarNav">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8Z5BNZL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

         <div id="loader">
            <span class="loader-text"><img src="./img/Logo.png" class="loader-logo" /></span>
        </div>
        <header class="micro-nav fixed-top pload">
            <nav class="navbar navbar-expand-lg navbar-light bg-white micro-navbar">
                <a class="navbar-brand" href="index.html" ><img src="./img/Logo.png" class="logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav-fill">
                        <li class="nav-item">
                            <a class="nav-link" href="#home"><i class="mi mi-home nav-icon"></i><span class="d-sm-inline d-md-none"> Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pricing"><i class="mi mi-price nav-icon"></i> Price</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#sitefloorplan"><i class="mi mi-siteplan nav-icon"></i> Site &amp; Floor Plan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#amenities"><i class="mi mi-ami nav-icon"></i> Amenities</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="#address_section"><i class="mi mi-location nav-icon"></i> Location</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#gallery"><i class="mi mi-gallery nav-icon"></i> Gallery</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#sitevisit"><i class="mi mi-sitevisit nav-icon"></i> Virtual Tour Request</a>
                        </li>

                        <li class="nav-item overflow-hidden">
                            <a
                                class="nav-link enqModal"
                                href="#"
                                data-form="md"
                                data-title="Download brochure"
                                data-btn="Download now"
                                data-enquiry="Download Brochure Toolbar"
                                data-redirect="brochure"
                                data-redirect-file="brochure.html"
                                data-toggle="modal"
                                data-target="#enqModal"
                            >
                                <i class="mi mi-download nav-icon d-inline-block animated slideInDown infinite"></i> Brochure
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
<main class="pload">

<style>
     section{
         height: 100vh;
     }
	 
 .thank-you-content {
    text-align: center;
    float: none;
    padding: 25vh 0 0 0;
}

i#checkmark {
    font-size: 150px;
    color: #24b663;
}


 </style>


 <section class="section shadow-sm lazyloaded" id="developer">
    <div class="thank-you-content">
		<header class="site-header" id="header">
			<h1 class="site-header__title" data-lead-id="site-header-title" style="font-size: 5.5rem; font-weight: bolder;">THANK YOU!</h1>
		</header>

		<div class="main-content">
			<i class="fa fa-check main-content__checkmark" id="checkmark"></i>
			<p class="main-content__body" data-lead-id="main-content-body" style="text-align: center; font-family: Roboto, sans-serif; font-size: 1.80vw;">Thanks for Inquiring, One of our executives will call you shortly</p>
		</div>

		<footer class="site-footer" id="footer">
			<!-- <p class="site-footer__fineprint" id="fineprint">Copyright ©2020 | All Rights Reserved</p> -->
		</footer>
	</div>
  </section>

			

</main>
  <style>
         .ft-main{
             display:flex;
             justify-content:center;
             align-items:center;
             width:100%;
             padding:0% 2%;
             font-size:14px;
         }
         .ft-left{
             width:82%;
         }
         .ft-right{
             width:16%;
         }
         .acceptcookies{
             font-size: 16px;
                padding: 3px 30px;
         }
         
          @media (min-width: 1920px) and (max-width: 2560px)  {
          .ft-main{
             font-size:19px;
         }
        }
        
        @media (min-width: 2561px) and (max-width: 5120px)  {
          .ft-main{
             font-size:36px;
         }
        }
         
    @media (min-width: 1920px) and (max-width: 5120px)  {
                .acceptcookies{
             font-size: 46px;
            padding: 3px 30px;
         }
        }
      
  @media (min-width: 320px) and (max-width: 767px)  {
            .ft-main{
             display:block;
         }
         
         .ft-left{
             width:100%;
         }
         .ft-right{
             width:100%;
         }
         
         .acceptcookies{
             margin-top: 10px;
             margin-left:0px!important;
         }
         
         }
   
     </style>   
        <div class="micro-side text-center">
                <div class="og-section pb-2">
                    <ul class="nav nav-fill og-block">
                        <li class="nav-item enqModal" data-form="lg" data-title="Organize Site Visit" data-btn="Arrange Site Visit" data-enquiry="Organize Site Visit" data-toggle="modal" data-target="#enqModal">Organize Site Visit</li>
                        <li
                            class="nav-item driftc"
                             
                        ><a href="tel:+919619095795" class="textcolor"><i class="mi mi-call"></i>+919619095795</a>
                        </li>   
                    </ul>
                    <button
                        class="btn btn-sm btn-info micro-form-btn-sm effetGradient effectScale enqModal mt-1"
                        data-form="sm"
                        data-title="Immediate Call Back"
                        data-btn="Request Call Now"
                        data-enquiry="Request Call Back"
                        data-toggle="modal"
                        data-target="#enqModal"
                    >
                        <span class="mi mi-call action-icon"></span> Request Call Back
                    </button>
                </div>
                <span class="d-block form-heading font-weight-bold my-2">Get The Best Quote</span>
                
               
                

            </div>
            <ul class="mob-action nav nav-fill d-sm-block d-lg-none">
                <li class="nav-item" onclick="javascript:location.href='tel:+919619095795'"><span class="mi mi-call action-icon"></span> Call</li>
                <li class="nav-item enqModal" data-form="lg" data-title="Enquire Now!" data-btn="Submit" data-enquiry="Enquire Footer Mobile" data-redirect="enquiry" data-toggle="modal" data-target="#enqModal">
                    <span class="mi mi-enquire action-icon"></span> Enquire
                </li>
                
                <li class="nav-item enqModal" data-form="lg" data-title="Send Me Details on WhatsApp" data-btn="Submit" data-enquiry="Send Me Details On WhatsApp" data-redirect="enquiry" data-toggle="modal" data-target="#enqModal">
                    <span class="mi mi-whatsapp action-icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span> WhatsApp
                </li>
            </ul>
          
           
          
            
            

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./js/app.js" defer></script>
        
       <!-- Start of Async Drift Code --> 

       
        
        <!-- End of Async Drift Code -->
        <script>
            document.addEventListener("DOMContentLoaded", function (event) {
                document.getElementById("loader").remove();
                document.querySelector("header").classList.remove("pload");
                document.querySelector("main").classList.remove("pload");
                //document.querySelector("footer").classList.remove("pload");
            });
            var sitePrimaryColor = "#2C2969";
        </script>
<script type="text/javascript">
piAId = '553602';
piCId = '23530';
piHostname = 'pi.pardot.com';

(function() {
function async_load(){
var s = document.createElement('script'); s.type = 'text/javascript';
s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
}
if(window.attachEvent) { window.attachEvent('onload', async_load); }
else { window.addEventListener('load', async_load, false); }
})();
</script>        
    </body>
</html>



<?php

if(isset($_POST['mobile']) && trim($_POST['mobile']) != "" && is_numeric($_POST['mobile']))
{

	$html_table = '<table border="1" cellspacing="0" cellpadding="2">'; 

    foreach($_POST as $key => $value) {
        $html_table .= "<tr><th> ".$key." </th>";
        $html_table .= "<th>". $value."</th></tr>"; 
    }

    $html_table .= "<tr><th>Device :</th>";
    $html_table .= "<th>". $_SERVER['HTTP_USER_AGENT']."</th></tr>";  	$html_table .= "<tr><th>IP Address :</th>";    	$html_table .= "<th>". $_SERVER['REMOTE_ADDR']."</th></tr>";

    foreach ($_SESSION as $key => $value) {
    $html_table .= "<tr><th>". ucwords(str_replace("_"," ",$key))."</th>";
    $html_table .= "<th>". $value."</th></tr>";  
  	} 

  	$html_table .= '</table>';

	$to = "info@amara-township.com,dipesh.osr@gmail.com";
	$subject = "Lodha Amara ";
    $headers  = 'MIME-Version: 1.0'."\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1'."\n";
    $headers .= 'From: <do-not-reply@amara-township.com>'."\n";
	$mail_result = mail($to, $subject, $html_table , $headers);
	
	
    $lead_table = '<tr>';
    foreach($_POST as $key => $value) {
        $lead_table .= "<td>". $value."</td>"; 
    }
    $html_table .= "<td>". $_SERVER['HTTP_USER_AGENT']."</td>";
    foreach ($_SESSION as $key => $value) {
    $html_table .= "<td>". $value."</td>";  
  	}
  	$lead_table .= '</tr>';
    $mylfile = file_put_contents('llogs.html', $lead_table.PHP_EOL , FILE_APPEND | LOCK_EX);
    $myfile = file_put_contents('logs.html', $html_table.PHP_EOL , FILE_APPEND | LOCK_EX);

    
	if($mail_result)  
    	{ ?>
			<script>setTimeout(function(){window.location.href='https://<?php echo $p_link; ?>';},10000); </script>
	
	<?php }
		else {echo "failed";}
	}else{ ?>
	
	<!-- <script>alert("Please Enter the proper 10 digit mobile number");window.location.href='https://<//?php echo $p_link; ?>';</script> -->

<?php }

?>