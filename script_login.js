function connectionAPI(userID,password) {
var apiTemp = new APIConnect(),
    userID = userID,
    password = password 
    btn = document.getElementById("loginform");
   apiTemp.setUser('jorass', 'jorass');
btn.addEventListener('click', function(){ check(apiTemp, userID, password) });


}


function check(apiTemp,password, userID){
    var Pass = password;
    var username = userID;
    api = new APIConnect();
    apiTemp.fetchUsers(function(usr) {

var json = JSON.parse(usr);
var payload = json.payload;
var correct = false;
for (i=0; i<payload.length; i++) {
    var name = payload[i].username;
    
    if (name == username && Pass == username) {
         api.setUser(userID, password);
        localStorage.setItem('username',username);
        localStorage.setItem('password',Pass);
        correct = true;
        //If admin, open the extended main page
        if (username == 'jorass' || username == 'ervtod' || username == 'hirchr' || username == 'saksru' || 
            username == 'svetor') {
            window.location = 'main.HTML';
        }
        
        

        delete Pass; //kolla om man kan deleta från storage när man refreshar sidan 
        delete use;
    
    }
    
   
}
 
   if (!correct) {
    alert("The username and/ or password you entered isn't correct. Please refresh page and try again")
    
  }
    });
                   }
                
function docLoaded(fn) {
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
		
	}
}

function pageLoaded(form) {
    var userID = form.userid.value;
    var password = form.pswrd.value;
    
    connectionAPI(userID,password);
    

}

