/*---history ---*/
$(function (){ 
//Requesting data using jQuery 
var $history = $('#history'); //Id of html div
var username = localStorage.getItem('username');

var password = localStorage.getItem('password');
   
$.ajax({
	method: 'GET',
	url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=' + username + '&password=' + password + '&action=purchases_get',

success: function(history) {
//console.log(history);

//loop for all indices of array payload
$.each(history.payload, function(i, his)
{
$history.append('<div class="row">' +
 			'<div class="col">'+ his.timestamp +'</div> ' +
 			'<div class="col">'+ his.namn +'</div> ' +  	
 			'<div class="col">'+ his.price +'</div> ' + 
			'</div> '); 
  });
}
});
});