//Load more button
$( document ).ready(function() {
	$( "#loadid" ).click(function() {
		var myarray= [ "Software engineer", "Graphic designer", "Project manager" ];
		var myarray2= [ "Volo", "Picsart", "Joomag" ];
var mystr="";
var mystep=parseInt($('#step').html());//sa verdarcnuma step spani meji arjeq@
if(mystep<3)
{
	$.each( myarray , function( i, l ){
		mystr=mystr+'<li class="main-list"> \
					<ul class="list-for-position">\
						<li><div class="images_logo">\
							<img src="./images/job_logo.jpg">\
							</div>\
						</li>\
						<li>\
							<h4>'+l+'</h4>\
						<h5><strong>'+myarray2[i]+'</strong></h5>\
						</li>\
					    <li> <div class="job_location">\
					    <p><strong><span class="glyphicon glyphicon-map-marker"></span> &nbsp;New York, USA</strong></p> \
							</div>\
						</li>\
					    <li> \
					    	<div class="full-time">\
					    		<h5><strong>FULL TIME</strong></h5> <br>\
							</div>\
							<div class="closing-date">\
								<p><span class="glyphicon glyphicon-calendar">\
								</span><strong>Closes:&nbsp;</strong>Feb 11, 2017</p> \
							</div>\
						</li>\
					</ul>\
				</li> ';
	  //alert( "Index #" + i + ": " + l );
	});

	$( "#listid" ).append(mystr);
	mystep=mystep+1;
	$('#step').html(mystep);
	}


 	 //alert( "Handler for .click() called." );
	});
});
//load more button ends

//back to the top 
$(document).ready(function(){
    $("button").click(function(){
        $("main").toggle();
    });
});
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
// scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

//back to top ends
//contact us starts
function kaderValidation()
{
var name1 = document.registration.fname;
var name2 = document.registration.lname;
var addy = document.registration.address;
var mnum = document.registration.Mnumber;
var mailat = document.registration.email;

 if(fname_validation(name1))
{
if(lname_validation(name2))
{
if(alphanumeric(addy))
{ 
if(nums(mnum))
{
if(ValidateEmail(mailat))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
return false;
} function fname_validation(name1)
{
var name1_len = name1.value.length;
if (name1_len == 0 )
{
alert("Please enter your first name");
name1.focus();
return false;
}
return true;
}
function lname_validation(name2)
{
var name2_len = name2.value.length;
if (name2_len == 0 )
{
alert("Please enter your last name");
name2.focus();
return false;
}
return true;
}
function alphanumeric(addy)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(addy.value.match(letters))
{
return true;
}
else
{
alert('Please enter the adress in format Countrty-City-Streetnumber without spaces');
addy.focus();
return false;
}
}
function nums(mnum)
{ 
var digits = /^[0-9]+$/;
if(mnum.value.match(digits))
{
return true;
}
else
{
alert('Please enter your Mobile number');
mnum.focus();
return false;
}
}
function ValidateEmail(mailat)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailat.value.match(mailformat))
{
return true;
}
else
{
alert("Please enter a valid email address");
return false;
}


}
//contact us ends


//pdf generator
function generatepdf()
{
	var flag=true;
	var name=$('#firstname').val();
	var lastname=$('#lastname').val();
	var address=$('#address').val();
	var region=$('#region').val();
	var city=$('#city').val();
	var hphonecode=$('#hphonecode').val();
	var hphone=$('#hphone').val();
	var mphonecode=$('#mphonecode').val();
	var mphone =$('#mphone ').val();
	var email =$('#email ').val();
	var web=$('#web').val();
	var birth =$('#birth').val();
	var sex =$('input[name="optradio"]:checked').val();
	



	if(name.trim()=='')
	{
		flag=false;
		$('#firstname').addClass('warrning');
	}
	else
	{
		$('#firstname').removeClass('warrning');
	}
	if(lastname.trim()=='')
	{
		flag=false;
		$('#lastname').addClass('warrning');
	}
	else
	{
		$('#lastname').removeClass('warrning');
	}
	if(address.trim()=='')
	{
		flag=false;
		$('#address').addClass('warrning');
	}
	else
	{
		$('#address').removeClass('warrning');
	}
	if(region.trim()=='')
	{
		flag=false;
		$('#region').addClass('warrning');
	}
	else
	{
		$('#region').removeClass('warrning');
	}

	if(city.trim()=='')
	{
		flag=false;
		$('#city').addClass('warrning');
	}
	else
	{
		$('#city').removeClass('warrning');
	}

	if(hphone.trim()=='')
	{
		flag=false;
		$('#hphone').addClass('warrning');
	}
	else
	{
		$('#hphone').removeClass('warrning');
	}

	if(mphone.trim()=='')
	{
		flag=false;
		$('#mphone').addClass('warrning');
	}
	else
	{
		$('#mphone').removeClass('warrning');
	}
	if(email.trim()=='')
	{
		flag=false;
		$('#email').addClass('warrning');
	}
	else
	{
		$('#email').removeClass('warrning');
	}


	if(flag){
		var doc = new jsPDF();

		doc.setTextColor(245,101,5);
		doc.setFontSize(25);
		doc.text(70, 20, 'Curiculum Vitae');

		doc.setFontSize(12);
		doc.setTextColor(26,75,85);
		doc.text(20, 40, 'Fisrt Name:');
		doc.setTextColor(100);
		doc.text(70, 40, name);

		doc.setTextColor(26,75,85);
		doc.text(20, 50, 'Last Name:');
		doc.setTextColor(100);
		doc.text(70, 50, lastname);

		doc.setTextColor(26,75,85);
		doc.text(20, 60, 'Address:');
		doc.setTextColor(100);
		doc.text(70, 60, address);

		doc.setTextColor(26,75,85);
		doc.text(20, 70, 'Region:');
		doc.setTextColor(100);
		doc.text(70, 70, region);

		doc.setTextColor(26,75,85);
		doc.text(20, 80, 'City:');
		doc.setTextColor(100);
		doc.text(70, 80, city);


		doc.setTextColor(26,75,85);
		doc.text(20, 90, 'Home phone:');
		doc.setTextColor(100);
		doc.text(70, 90, hphonecode+' '+hphone);

		doc.setTextColor(26,75,85);
		doc.text(20, 100, 'Mobile phone:');
		doc.setTextColor(100);
		doc.text(70, 100, mphonecode+' '+mphone );

		doc.setTextColor(26,75,85);
		doc.text(20, 110, 'Email:');
		doc.setTextColor(100);
		doc.text(70, 110, email);

		doc.setTextColor(26,75,85);
		doc.text(20, 120, 'Web:');
		doc.setTextColor(100);
		doc.text(70,120, web);

		doc.setTextColor(26,75,85);
		doc.text(20, 130, 'Date of birth:');
		doc.setTextColor(100);
		doc.text(70,130, birth);

		doc.setTextColor(26,75,85);
		doc.text(20, 140, 'Sex:');
		doc.setTextColor(100);
		doc.text(70,140, sex);

		doc.save('CV.pdf');
	}
}
//pdf generator ends