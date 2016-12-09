/*--- all beverages ---*/
var my_beer_id ="";
   var names = new Array();
    var count = new Array();
    var prices = new Array()
    var beer_ids = new Array();
var AllBevNames_noSplit =localStorage.getItem("names");
var AllBevStock_noSplit =localStorage.getItem("count");
var AllBevPrice_noSplit =localStorage.getItem("prices");

var AllBevNames = localStorage.getItem("names").split(',');
var AllBevStock = localStorage.getItem("count").split(',');
var AllBevPrices = localStorage.getItem("prices").split(',');

var NonAlcName_noSplit = localStorage.getItem("NoAlcName")
var NonAlcStock_noSplit = localStorage.getItem("NoAlcStock")
var NonAlcPrice_noSplit = localStorage.getItem("NoAlcPrices")

var NonAlcName = localStorage.getItem("NoAlcName").split(',');
var NonAlcStock = localStorage.getItem("NoAlcStock").split(',');
var NonAlcPrice = localStorage.getItem("NoAlcPrices").split(',');
console.log(NonAlcName);
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
   
$.each(allBeverages.payload, function(i, her)
{
     
    
    beer_ids += her.beer_id + ',';
    
  });
    

    beer_ids = beer_ids.split(',');

    
    for (i=0; i<allBeverages.payload.length; i++) {
    $allBeverages.append('<div class="row " >' + 
 			'<div class="col" id="'+beer_ids[i]+'">'+ AllBevNames[i] +'</div> ' +
 			'<div class="col" id="'+beer_ids[i]+"S"+'">'+ AllBevStock[i] +'</div> ' +  	
 			'<div class="col"id="'+beer_ids[i]+"P"+'">'+ AllBevPrices[i] +'</div>' + '<input type="button" id="edit_bev'+i+'" class="editbtn" value="EDIT">' + '</input>' + '</div>' ); 
   
    }
    $("#popupEdit").append('<form name="form" id="Editform" method="post" >' +
                            '<h2>Edit Beverages</h2>' +
                            '<div id="input">' +  
                            '<input id="name_bev" name="name" value ="" type="text">' +  '<br>'
                            + '<input id="stock" name="stock"  type="text">'
                            +    '<input id="price" name="price" value = "price" type="text">' + '</div>' + 

                            '<img id="close" src="http://www.freeiconspng.com/uploads/round-close-button-png-1.png" onclick="div_hide()">' + ' <input type = "button" class="dropbtn" id="submit_btn" onclick = update_table() value = "send">' + '</input>' +  '</form>');
    
/*-- to make buttons work in a loop, with a different id to every EDIT button --*/
    
function generate_handler(the_name, the_count, the_price, the_beer_id) {
    return function(event) { 
        
        my_beer_id = the_beer_id;
        div_show(the_name, the_count, the_price, the_beer_id);
    };
}
for(var i = 0; i <= allBeverages.payload.length; i++){
   
    
   $('#edit_bev'+i).click( generate_handler( AllBevNames[i],AllBevStock[i],AllBevPrices[i],beer_ids[i]) );  
    
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
function div_show(name, count, price, beer_id) {

    $('#name_bev').val(name);
    $('#stock').val(count);
    $('#price').val(price);

document.getElementById('popupBody').style.display = "block";

}
//Function to Hide Popup
function div_hide(){
document.getElementById('popupBody').style.display = "none";
}
/*---- getting the table to update with the values set in the form --*/
function update_table() {
  
    var index = beer_ids.indexOf(my_beer_id);
        
    the_stock= form.stock.value;
    the_name = form.name.value;
    the_price = form.price.value;
    
    
    document.getElementById(beer_ids[index]).innerHTML = the_name;
    document.getElementById(beer_ids[index]+"S").innerHTML = the_stock;
    document.getElementById(beer_ids[index]+"P").innerHTML = the_price;
    
   if (the_name == "Fentimans" || the_name == "Mariestads" || the_name == "Nanny State" || the_name == "Rabarbernektar" || the_name == "Shatler's" || the_name == "Staropramen" || the_name == "Stowford Press" || the_name == "Xide Non Alco" || the_name == "Einbecker Brauherren Alkoholfrei") {

       var idx = NonAlcName.indexOf(the_name);
      NonAlcName[idx] = the_name;
       NonAlcPrice[idx] = the_price;
       NonAlcStock[idx] = the_stock;
       localStorage.setItem("NoAlcName", NonAlcName);
        localStorage.setItem("NoAlcStock",NonAlcStock);
        localStorage.setItem("NoAlcPrices",NonAlcPrice);
   }
    
    
else {
      AllBevStock[index] = the_stock
    AllBevNames[index] = the_name;
    AllBevPrices[index] = the_price
     localStorage.setItem("count", AllBevStock);
    localStorage.setItem("prices", AllBevPrices);
    localStorage.setItem("names", AllBevNames);
}
    div_hide();
    my_beer_id = "";
  

   
  
    
   
}
    
