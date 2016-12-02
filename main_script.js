/*--frågor workshop

-hur göra knappklick i loop
- hur ta bort rätt sak ur cart utan att det inte går att lägga in igen

/*--global variables---*/
  var bought_array = {};
var total_price = 0;
var name ="";
var purchase_array = new Array;

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
    var beer_id = new Array();
  
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
         beer_id += its.beer_id +',';
        
          
      
 $('#aform') 
        .attr("action","main.html") .attr("method","post") //set the form attributes
        //add in all the needed input elements

         
$main.append( '<div class="small_box">' +
             '<input type="text" class ="values" id="'+id_values+'" value="0"/>' +
 			'<div class="small_box_text">'+  its.namn +'</div>' +
 			'<div class="small_box_text">'+ its.count + " left"+'</div> ' +  	
 			'<div class="small_box_text">'+ "price: " + its.pub_price + " kr" + '</div>' + '<input type="button" id="'+id_inc_button+'" class="btn_increase" value="increase">' + '</input>' +
             '<input type="button" id="'+id_dec_button+'" class="btn_decrease" value="decrease">' +' </input>' + '</div>' ); 
             beer_count++;
        id_values++;
         id_inc_button++;
         id_dec_button++;
        
      
     }
        
        
          
}); 
    $('#non-alcohol').append('<div class="small_box">' +
                             '<div class="small_box_text">' + "XX" +'</div>' +
                             '<div class="small_box_text">'+ " left"+'</div> ' +  	
                             '<div class="small_box_text">'+ "price: " + " kr" + '</div>' + '</div>' +
                             '<div class="small_box">' +
                             '<div class="small_box_text">' + "XX"+'</div>' +
                             '<div class="small_box_text">'+ " left"+'</div> ' +  	
                             '<div class="small_box_text">'+ "price: " + " kr" + '</div>' + '</div>' +
                             '<div class="small_box">' +
                             '<div class="small_box_text">' +"XX"+'</div>' +
                             '<div class="small_box_text">'+ " left"+'</div> ' +  	
                             '<div class="small_box_text">'+ "price: " + " kr" + '</div>' 
                             +'</div>' );
    /*super ugly! will implement loop here but don't know how to do it right now. This is to give every button a different id*/ 
    
    names = names.split(",");
    amounts = amounts.split(",");
    prices = prices.split(",");
    beer_id = beer_id.split(",");
    var times_clicked1 = 0;
    var times_clicked2 = 0;
    var times_clicked3 = 0;
    var times_clicked4 = 0;
    var times_clicked5 = 0;
    var times_clicked6 = 0;
    var times_clicked7 = 0;
    var times_clicked8 = 0;
    var times_clicked9 = 0;
    var times_clicked10 = 0;
    var times_clicked11 = 0;
    var times_clicked12 = 0;
    var times_clicked13 = 0;
    var times_clicked14 = 0;
    var times_clicked15 = 0;
    var times_clicked16 = 0;
    var times_clicked17 = 0;

    $('#18').click(function() {
        times_clicked1 ++;
        incrementValue("1", beer_id[0], names[0],amounts[0],prices[0], times_clicked1);
        
    });
     
    $('#35').click(function() {
         times_clicked1 --;
        decreaseValue("1",beer_id[0], names[0],amounts[0],prices[0], times_clicked1);
 
    });
    $('#19').click(function() {
        times_clicked2--;
        incrementValue("2",beer_id[1], names[1], amounts[1],prices[1], times_clicked2);
    });
     
    $('#36').click(function() {
         times_clicked2 --;
        decreaseValue("2",beer_id[1],names[1],amounts[1],prices[1], times_clicked2);
 
    });
     $('#20').click(function() {
        times_clicked3++;
        incrementValue("3",beer_id[2], names[2],amounts[2],prices[2], times_clicked3);
         
    });
     
    $('#37').click(function() {
         times_clicked3--;
        decreaseValue("3",beer_id[2], names[2],amounts[2],prices[2], times_clicked3);
 
    });
     $('#21').click(function() {
     times_clicked4++;
        incrementValue("4",beer_id[3],names[3],amounts[3],prices[3], times_clicked4);
    });
     
    $('#38').click(function() {
     times_clicked4--;
        decreaseValue("4",beer_id[3],names[3],amounts[3],prices[3], times_clicked4);
 
    });
    $('#22').click(function() {
         times_clicked5++;
        incrementValue("5",beer_id[4], names[4],amounts[4],prices[4], times_clicked5);
    });
     
    $('#39').click(function() {
         times_clicked5--;
        decreaseValue("5",beer_id[4], names[4],amounts[4],prices[4], times_clicked5);
 
    });
     $('#23').click(function() {
         times_clicked6++;
        incrementValue("6",beer_id[5], names[5],amounts[5],prices[5],times_clicked6);
    });
     
    $('#40').click(function() {
         times_clicked6--;
        decreaseValue("6", beer_id[5],names[5],amounts[5],prices[5], times_clicked6);
 
    });
     $('#24').click(function() {
     times_clicked7++;
        incrementValue("7",beer_id[6], names[6],amounts[6],prices[6], times_clicked7);
    });
     
    $('#41').click(function() {
     times_clicked7--;
        decreaseValue("7",beer_id[6],names[6],amounts[6],prices[6], times_clicked7);
 
    });
    $('#25').click(function() {
         times_clicked8++;
        incrementValue("8", beer_id[7],names[7],amounts[7],prices[7], times_clicked8);
    });
     
    $('#42').click(function() {
         times_clicked8--;
        decreaseValue("8",beer_id[7],names[7],amounts[7],prices[7], times_clicked8);
 
    });
     $('#26').click(function() {
         times_clicked9++;
        incrementValue("9",beer_id[8],names[8],amounts[8],prices[8], times_clicked9);
    });
     
    $('#43').click(function() {
         times_clicked9--;
        decreaseValue("9",beer_id[8],names[8],amounts[8],prices[8], times_clicked9);
 
    }); 
    
    
    $('#27').click(function() {
     times_clicked10++;
        incrementValue("10",beer_id[9],names[9],amounts[9],prices[9], times_clicked10);
    });
     
    $('#44').click(function() {
     times_clicked10--;
        decreaseValue("10",beer_id[9],names[9],amounts[9],prices[9], times_clicked10);
 
    });
    $('#28').click(function() {
         times_clicked11++;
        incrementValue("11",beer_id[10],names[10],amounts[10],prices[10], times_clicked11);
    });
     
    $('#45').click(function() {
         times_clicked11--;
        decreaseValue("11",beer_id[10],names[10],amounts[10],prices[10], times_clicked11);
    });
     $('#29').click(function() {
         times_clicked12++;
        incrementValue("12",beer_id[11],names[11], amounts[11],prices[11], times_clicked12);
    });
     
    $('#46').click(function() {
         times_clicked12--;
        decreaseValue("12",beer_id[11],names[11],amounts[11],prices[11], times_clicked12);
 
    });
     $('#30').click(function() {
     times_clicked13++;
        incrementValue("13",beer_id[12],names[12],amounts[12],prices[12], times_clicked13);
    });
     
    $('#47').click(function() {
     times_clicked13--;
        decreaseValue("13", beer_id[12],names[12],amounts[12],prices[12], times_clicked13);
 
    });
    $('#31').click(function() {
         times_clicked14++;
        incrementValue("14",beer_id[13], names[13],amounts[13],prices[13], times_clicked14);
    });
     
    $('#48').click(function() {
         times_clicked14--;
        decreaseValue("14",beer_id[13], names[13],amounts[13],prices[13], times_clicked14);
 
    });
     $('#32').click(function() {
         times_clicked15++;
        incrementValue("15",beer_id[14],names[14],amounts[14],prices[14], times_clicked15);
    });
     
    $('#49').click(function() {
         times_clicked15--;
        decreaseValue("15",beer_id[14],names[14],amounts[14],prices[14], times_clicked15);
 
    });
     $('#33').click(function() {
     times_clicked16++;
        incrementValue("16",beer_id[15],names[15],amounts[15],prices[15], times_clicked16);
    });
     
    $('#50').click(function() {
     times_clicked16--;
        decreaseValue("16",beer_id[15],names[15],amounts[15],prices[15], times_clicked16);
 
    });
    $('#34').click(function() {
         times_clicked17++;
        incrementValue("17",beer_id[16],names[16],amounts[16],prices[16], times_clicked17);
    });
     
    $('#51').click(function() {
         times_clicked17--;
        decreaseValue("17",beer_id[16],names[16],amounts[16], prices[16], times_clicked17);
 
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

$("#nonAlc_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#non-alcohol").offset().top
    }, 2000);
});

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

       
    window.confirm("Purchase confirmed!\n\n Here is what you bought:\n\n" + purchase_array + "\nYour total was " + total_price +" kr");
    clearAll();
    purchase_array ="";
    
}
          }); 
    });
}
  
/*-- increase number of beers person wants to buy. increments number in value box by one and makes number red to make it easier for the customer to see that he/she has picked that certain beer. Also adds to total price. --*/
function incrementValue(number, beer_id,namn, count, price, timesClicked)
{
var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    if (count != 0) {
    document.getElementById('text').innerHTML ="";

 if(value < 10 && count > 0){
     document.getElementById(number).style.color = 'red';
       value++;
      purchase_array += namn +',';
     purchase_array = purchase_array.split(',');
    
     
    document.getElementById(number).value = value;
      $("#text").append(purchase_array); //purchase_array;
   total_price += parseFloat(price);
     document.getElementById("total_number").innerHTML = total_price.toPrecision(3); 
      
 
 }
    }

}


/*--decrease number of beers person wants to buy --*/
function decreaseValue(number,beer_id, name,count,price, timesClicked)
{
    var value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value-1 == 0) {
             document.getElementById(number).style.color = 'black';
    }
    if( value > 0) {
          value--;
        var index = purchase_array.indexOf(name);
       
        
                purchase_array.splice(index,1);
        document.getElementById('text').innerHTML = purchase_array;
           total_price -= parseFloat(price);
         document.getElementById("total_number").innerHTML = total_price.toPrecision(3);
        
            }
             document.getElementById(number).value = value;
        }
        
/*-- clear button, removes all beers in the cart and resets the number in each box to zero as well as makes the numbers black again. Also sets the total amount to zero --*/
function clearAll(){
     $('#text').html("");
    purchase_array ="";
    total_price = 0;
     document.getElementById("total_number").innerHTML = total_price; 

    $(".values").val("0");
      $('.values').css({"color":"black"});
    
    
    
    
}




   