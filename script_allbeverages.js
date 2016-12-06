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
 ;
}
        });
    });
//console.log(history);
//loop for all indices of array payload
   var names = new Array();
    var count = new Array();
    var prices = new Array()
$.each(allBeverages.payload, function(i, her)
{
$allBeverages.append('<div class="row " id="'+her.beer_id+'">' + 
 			'<div class="col">'+ her.namn +'</div> ' +
 			'<div class="col">'+ her.count +'</div> ' +  	
 			'<div class="col">'+ her.price +'</div>' + '<input type="button" id="edit_bev'+i+'" class="editbtn" value="EDIT">' + '</input>' + '</div>' ); 
    

   // should create form with loop!!! Call the function to update the database when press send. 
      

  
    names += her.namn + ',';
    count += her.count + ',';
    prices += her.price + ',';
    

 
  });
    
    names = names.split(',');
    count = count.split(',');
    prices = prices.split(',');

    $("#popupEdit").append('<form action="#" id="Editform" method="post" name="form">' +
                            '<h2>Edit Beverages</h2>' +
                            '<div id="input">' + '<input type="hidden" name="stock_hidden" id="stock_hidden" value="" />' + 
                            '<input id="name_bev" name="name" value ="" type="text">' +  '<br>'
                            + '<input id="stock" name="stock"  type="text">'
                            +    '<input id="price" name="price" value = "price" type="text">' + '</div>' + 

                            '<img id="close" src="http://www.freeiconspng.com/uploads/round-close-button-png-1.png" onclick="div_hide()">' + '<input type="submit"  class="dropbtn" id="submit_btn'+i+'" value="Send"/>' + '</form>');
     
    
/*-- to make buttons work in a loop, with a different id to every EDIT button --*/
    
    function generate_handler(the_name, the_count, the_price ) {
    return function(event) { 
        
        div_show(the_name, the_count, the_price);
    };
}
for(var i = 1; i <= allBeverages.payload.length; i++){
    
   $('#edit_bev'+i).click( generate_handler( names[i],count[i],prices[i]) );
    
    
}

     
}

 
});  
});

    
// Validating Empty Field, i ended up not using this so might remove it soon.
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('stock').value == "" || document.getElementById('price').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('Editform').submit();
alert("Form Submitted");
}
}
//Function To Display Popup with pre filled values
function div_show(name, count, price) {
    $('#name_bev').val(name);
    $('#stock').val(count);
    $('#price').val(price);

  
document.getElementById('popupBody').style.display = "block";
    
}
//Function to Hide Popup
function div_hide(){
document.getElementById('popupBody').style.display = "none";
}
/*---- this is work in progress to actually get the rows to update --*/
function update_table(form) {
    dive_hide();
    
       /* var name =  form.name.value;
    
    var stock = form.stock.value;
    alert(stock);
        document.getElementById('stock').innerHTML = stock;*/

}
    
    /*window.onload = function() {
    document.getElementById('Editform').onsubmit = function() {
        
    var txt = document.getElementById('stock');
    txt.value = "updated " + txt.value;
  };
    }*/
