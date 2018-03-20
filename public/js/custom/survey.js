window.onload=function()
{
	document.getElementById('admin').addEventListener("click",admin);
	document.getElementById('send').addEventListener("click",option);

	student_name=document.getElementById('student_name');
	sid=document.getElementById('sid');
	cgpa=document.getElementById('cgpa');
	
	student_name_error=document.getElementById('student_name_error');
	sid_error=document.getElementById('sid_error');
	cgpa_error=document.getElementById('cgpa_error');
	
	student_name.addEventListener('focus',student_name_focus);
	sid.addEventListener('focus',sid_focus);
	cgpa.addEventListener('focus',cgpa_focus);
	
}
function admin()
{
	window.location.href="./login.html";
}

function option()
{
	console.log('hi');
	interest=''
	$(document).ready(function(){
		$("input:radio[name='radio']:checked").each(function()
			{
			    interest=($(this).val());
			    send();
			});
		
	});
}
function send()
{

	var n=0,c=0,s=0,o=0;
	sid_int=parseFloat(sid.value);
	cgpa_float=parseFloat(cgpa.value);
	if (!(/^[A-Za-z\s]+$/.test(student_name.value))||(student_name.value).length==0) 
	{
		n=1;
		student_name_error.innerHTML="invalid name";
	}
	if ((isNaN(sid_int) || sid_int < 10000000 || sid_int > 100000000)||(sid.value).length==0) 
	{
    	sid_error.innerHTML="invalid cgpa";
    	s=1;
	}
	if ((isNaN(cgpa_float) || cgpa_float < 0 || cgpa_float > 10)||(cgpa.value).length==0) 
	{
    	cgpa_error.innerHTML="invalid cgpa";
    	c=1;
	}
	
	console.log(student_name.value);
	console.log(sid.value);
	console.log(cgpa.value);
	console.log(interest);
	if(!(n||c||s||o))
	{
		console.log('here');
		$.ajax({
          type:'POST',
          url:'/api/postStudentData',
          datatype:'json',
          crossDomain:true,
          data:{
          	name:student_name.value,
          	sid:sid.value,
          	cgpa:cgpa.value,
          	option:interest
          },
          success:function(data)
          {  
           	console.log(data);
           	$('.container').empty();
   			$('.container').append('<h5>Response Successfully Submitted</h5><div id="go_back"><a href="./survey.html">Fill another response</a></div>');
		 },
	      error: function(data) 
	      {
		  if(data.status==401) 
		  	window.location.href = "/";
		  if(data.status==500)
		  	{
		  		alert(data.message);
		  		location.reload();
		  	}
		  }
         });
	}
}

function student_name_focus()
{
	student_name_error.innerHTML="";
}
function sid_focus()
{
	sid_error.innerHTML="";
}
function cgpa_focus()
{
	cgpa_error.innerHTML="";
}
