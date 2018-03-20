window.onload=function()
{
	document.getElementById('logout').addEventListener("click",logout);
  
	$.ajax({
          type:'GET',
          url:'/api/getStudentData',//change query to feed
          datatype:'json',
          crossDomain:true,
          success:function(data)
          {
          	for(var i=0;i<data.data.length;i++)
          	{
          		$('.data').append('<p class="rows">'+(i+1)+'</p><p class="rows">'+data.data[i].name+'</p><p class="rows">'+data.data[i].sid+'</p><p class="rows">'+data.data[i].cgpa+'</p><p class="rows">'+data.data[i].option+'</p>');
          	}
          }
      });
	$.ajax({
          type:'GET',
          url:'/api/getCount',//change query to feed
          datatype:'json',
          crossDomain:true,
          success:function(data)
          {
          	form_array(data.data);
          }
      });
	

	function form_array(table)
	{
		console.log(table);
		arr=[['Opinion','Number of students']];
		for(var i=0;i<table.length;i++)
		{
			arr.push([table[i].option,parseInt(table[i].count)]);
		}
		console.log(arr);
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
	}
	function drawChart() 
	{
		var data = google.visualization.arrayToDataTable(arr);

		// Optional; add a title and set the width and height of the chart
		//var options = {'title':'Opinion Of Students'};

		// Display the chart inside the <div> element with id="piechart"
		var chart = new google.visualization.PieChart(document.getElementById('chart'));
		chart.draw(data);
	}
}


// Draw the chart and set the chart values
