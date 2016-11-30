/*--- all beverages ---*/
$(function (){ 
   
//Requesting data using jQuery 
var $allBeverages = $('#allBeverages'); //Id of html div
var username = localStorage.getItem('username');

var password = localStorage.getItem('password');
     if (username == 'jorass' || username == 'ervtod' || username == 'hirchr' || username == 'saksru' || 
            username == 'svetor') {
         $('bev_admin').show();
         $('users_admin').show();
     }
   
$.ajax({
	method: 'GET',
	url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=' + username + '&password=' + password + '&action=inventory_get',

success: function(allBeverages) {
      $(function() {
        $.ajax({
  
	method: 'GET',
	url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=' + username + '&password=' + password + '&action=iou_get',

success: function(main) {
    var first_name = main.payload[0].first_name;
    var last_name = main.payload[0].last_name;
     document.querySelector('.login_id').innerHTML = first_name +" "+ last_name;
    //document.querySelector('.login_id').innerHTML = last_name;
    
}
        });
    });
//console.log(history);
//loop for all indices of array payload
$.each(allBeverages.payload, function(i, her)
{
$allBeverages.append('<div class="row">' +
 			'<div class="col">'+ her.namn +'</div> ' +
 			'<div class="col">'+ her.count +'</div> ' +  	
 			'<div class="col">'+ her.pub_price +'</div>' + '<input type="button" id="edit_bev" onclick="div_show()" class="dropbtn" value="EDIT">' + '</input>' + 
			'</div> ' ); 
  });
    
   function getName() {
       return her.namn;
   }
    function div_show() {
        $('#popupEdit').show();
        
}
}
});
    
    
});


// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('stock').value == "" || document.getElementById('price').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('Editform').submit();
alert("Form Submitted");
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