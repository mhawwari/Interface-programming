/*--- all beverages ---*/
$(function (){ 
   
//Requesting data using jQuery 
var $allBeverages = $('#allBeverages'); //Id of html div
var username = 'jorass';
var password = 'jorass';
   
$.ajax({
	method: 'GET',
	url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=' + username + '&password=' + password + '&action=inventory_get',

success: function(allBeverages) {
//console.log(history);
//loop for all indices of array payload
$.each(allBeverages.payload, function(i, her)
{
$allBeverages.append('<div class="row">' +
 			'<div class="col">'+ her.namn +'</div> ' +
 			'<div class="col">'+ her.count +'</div> ' +  	
 			'<div class="col">'+ her.pub_price +'</div> ' + '<input type="button" id="edit_bev" onclick="div_show()" class="dropbtn" value="EDIT">' + '</input>' +
			'</div> '); 
  });
    
    function div_show() {
        $('#popupEdit').show();
}
}
});
    
    
});

/*$('#18').click(function() {
        times_clicked++;
        incrementValue("1", names[0],amounts[0],prices[0]);
        
    });


*/ 

// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('stock').value == "" || document.getElementById('price').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('Editform').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('popupBody').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('popupBody').style.display = "none";
}