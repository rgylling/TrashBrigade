//CHART ON CHRISTMAS PAGE
var toyData = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015'],
	datasets: [
  	{
  		fillColor: 'rgba(160, 193, 222, .4)',
  		strokeColor: '#337ab7',
  		pointColor: '#fff',
  		pointStrokeColor: '#9db86d',
  		data: [160, 180, 250, 290, 340, 380]
  	}
	]
};

var toyOptions = {
  responsive: true
};

var toys = document.getElementById('toyChart').getContext('2d');
new Chart(toys).Line(toyData, toyOptions);
// END CHART
