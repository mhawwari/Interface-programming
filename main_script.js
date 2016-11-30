/*--frågor workshop

-hur göra knappklick i loop
- hur ta bort rätt sak ur cart utan att det inte går att lägga in igen
- hur resetta värdet på value-boxarna?

/*--global variables---*/
  var bought_array = new Array();
var total_price = 0;
var name ="";

/*---main ---*/
$(function (){ 
//Requesting data using jQuery 
var $main = $('#main'); //Id of html div
var username = localStorage.getItem('username'); //look at how to hide buttons: manage beverages, manage users 
var password = localStorage.getItem('password');
    
     if (username == 'jorass' || username == 'ervtod' || username == 'hirchr' || username == 'saksru' || 
            username == 'svetor') {
         $('bev_admin').show();
     }

$.ajax({
    
	method: 'GET',
	url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=' + username + '&password=' + password + '&action=inventory_get',

success: function(main) {
//console.log(history);

//loop for all indices of array payload
    var beer_count = 0; //to make sure the loops stops when we have 17 beers
    var names = new Array();
    var prices = new Array();
    var amounts = new Array();
  
    var buttons ="";
    var id_values = 1;
    var id_inc_button = 18;
    var id_dec_button = 35;
    /*---make call to fetch user that is logged in--*/
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
    /* ta in arry från valda drycker och loopa genom den. Plocka ut namn, count och price. */ 
    
    $.each(main.payload, function(i, its)
{ 
     if ( (its.count <11 && its.count > -5) && (its.namn != "")  && (beer_count < 17)) {
         names += its.namn + ',' ;
         amounts += its.count + ',';
         prices += its.pub_price +',';
          
      
 $('#aform') 
        .attr("action","main.html") .attr("method","post") //set the form attributes
        //add in all the needed input elements

         
$main.append( '<div class="small_box">' +
             '<input type="text" class ="values" id="'+id_values+'" value="0"/>' +
 			'<div class="small_box_text">'+  its.namn +'</div>' +
 			'<div class="small_box_text">'+ its.count + " left"+'</div> ' +  	
 			'<div class="small_box_text">'+ "price: " + its.pub_price + " kr" + '</div>' + '<input type="button" id="'+id_inc_button+'" class="btn_increase" value="increase">' + '</input>' +
             '<input type="button" id="'+id_dec_button+'" class="btn_decrease" value="decrease">' +' </input>' +
             '</div>' ); 
             beer_count++;
        id_values++;
         id_inc_button++;
         id_dec_button++;
        
      
     }
        
          
}); 
    
    /*super ugly! will implement loop here but don't know how to do it right now. This is to give every button a different id*/ 
    
    names = names.split(",");
    amounts = amounts.split(",");
    prices = prices.split(",");
    var times_clicked = 0;

    $('#18').click(function() {
        times_clicked++;
        incrementValue("1", names[0],amounts[0],prices[0]);
        
    });
     
    $('#35').click(function() {
    
        decreaseValue("1", names[0],amounts[0],prices[0]);
 
    });
    $('#19').click(function() {
        times_clicked++;
        incrementValue("2",names[1], amounts[1],prices[1]);
    });
     
    $('#36').click(function() {
        decreaseValue("2",names[1],amounts[1],prices[1]);
 
    });
     $('#20').click(function() {
        times_clicked++;
        incrementValue("3", names[2],prices[2]);
    });
     
    $('#37').click(function() {
        decreaseValue("3", names[2],amounts[2],prices[2]);
 
    });
     $('#21').click(function() {
    
        incrementValue("4", names[3],amounts[3],prices[3]);
    });
     
    $('#38').click(function() {
    
        decreaseValue("4", names[3],amounts[3],prices[3]);
 
    });
    $('#22').click(function() {
        
        incrementValue("5",names[4],amounts[4],prices[4]);
    });
     
    $('#39').click(function() {
        decreaseValue("5", names[4],amounts[4],prices[4]);
 
    });
     $('#23').click(function() {
        
        incrementValue("6",names[5],amounts[5],prices[5]);
    });
     
    $('#40').click(function() {
        decreaseValue("6", names[5],amounts[5],prices[5]);
 
    });
     $('#24').click(function() {
    
        incrementValue("7", names[6],amounts[6],prices[6]);
    });
     
    $('#41').click(function() {
    
        decreaseValue("7", names[6],amounts[6],prices[6]);
 
    });
    $('#25').click(function() {
        
        incrementValue("8", names[7],amounts[7],prices[7]);
    });
     
    $('#42').click(function() {
        decreaseValue("8",names[7],amounts[7],prices[7]);
 
    });
     $('#26').click(function() {
        
        incrementValue("9",names[8],amounts[8],prices[8]);
    });
     
    $('#43').click(function() {
        decreaseValue("9",names[8],amounts[8],prices[8]);
 
    }); 
    
    
    $('#27').click(function() {
    
        incrementValue("10",names[9],amounts[9],prices[9]);
    });
     
    $('#44').click(function() {
    
        decreaseValue("10",names[9],amounts[9],prices[9]);
 
    });
    $('#28').click(function() {
        
        incrementValue("11",names[10],amounts[10],prices[10]);
    });
     
    $('#45').click(function() {
        decreaseValue("11",names[10],amounts[10],prices[10]);
    });
     $('#29').click(function() {
        
        incrementValue("12",names[11], amounts[11],prices[11]);
    });
     
    $('#46').click(function() {
        decreaseValue("12",names[11],amounts[11],prices[11]);
 
    });
     $('#30').click(function() {
    
        incrementValue("13",names[12],amounts[12],prices[12]);
    });
     
    $('#47').click(function() {
    
        decreaseValue("13", names[12],amounts[12],prices[12]);
 
    });
    $('#31').click(function() {
        
        incrementValue("14",names[13],amounts[13],prices[13]);
    });
     
    $('#48').click(function() {
        decreaseValue("14",names[13],amounts[13],prices[13]);
 
    });
     $('#32').click(function() {
        
        incrementValue("15",names[14],amounts[14],prices[14]);
    });
     
    $('#49').click(function() {
        decreaseValue("15",names[14],amounts[14],prices[14]);
 
    });
     $('#33').click(function() {
    
        incrementValue("16",names[15],amounts[15],prices[15]);
    });
     
    $('#50').click(function() {
    
        decreaseValue("16",names[15],amounts[15],prices[15]);
 
    });
    $('#34').click(function() {
        
        incrementValue("17",names[16],amounts[16],prices[16]);
    });
     
    $('#51').click(function() {
        decreaseValue("17".names[16],amounts[16], prices[16]);
 
    });
     
    } 
     
       
    
    });   


});
        



/* ----------------------- DropDown ----------------------- */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
   
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
      // connectionAPI();
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*---confirm purchase. When click on BUY, the user can see what he/she bought, what the total was as well as new credit--*/
function confirmPurchase() {
    
    $(function (){ 
//Requesting data using jQuery 
var $main = $('#main'); //Id of html div
var username = localStorage.getItem('username'); //look at how to hide buttons: manage beverages, manage users 
var password = localStorage.getItem('password');

  

$.ajax({
    
	method: 'GET',
	url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=' + username + '&password=' + password + '&action=iou_get',

success: function(main) {

    var assets = main.payload[0].assets;  
   //if we want to see new credit after purchase. Maybe not neccesary since it's visible on the page? 
    //var user_id = main.payload[0].user_id;
    
    var new_assets = parseInt(assets) - total_price;
       
    window.confirm("Purchase confirmed!\n\n Here is what you bought:\n\n" + bought_array + "\nYour total was " + total_price +" kr" +"\nYour credit is now: " + new_assets + " kr");
    clearAll();
    bought_array ="";
    
}
          }); 
    });
}
  
/*-- increase number of beers person wants to buy. increments number in value box by one and makes number red to make it easier for the customer to see that he/she has picked that certain beer. Also adds to total price. --*/
function incrementValue(number, namn, count, price)
{
var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
 if(value < 10 && count > 0){
     document.getElementById(number).style.color = 'red';
       value++;
    document.getElementById(number).value = value;
      $("#text").append(namn + "\n");
   total_price += parseFloat(price);
     document.getElementById("total_number").innerHTML = total_price.toPrecision(3); 
    bought_array += namn + '\n';
    

     
     
     
 
 }
    

}


/*--decrease number of beers person wants to buy --*/
function decreaseValue(number)
{
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    if( value > 0) {
          value--;
        $('#text').hide();
         document.getElementById(number).value = value;
                
    }
  
  
  
}
/*-- clear button, removes all beers in the cart and resets the number in each box to zero as well as makes the numbers black again. Also sets the total amount to zero --*/
function clearAll(){
     $('#text').html("");
    bought_array ="";
    total_price = 0;
     document.getElementById("total_number").innerHTML = total_price; 

    $(".values").val("0");
      $('.values').css({"color":"black"});
    
    
    
    
}




   