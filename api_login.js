function APIConnect() {

	var baseURL = 'http://pub.jamaica-inn.net/fpdb/api.php',
		username = '',
		password = '';
	
	function constructURL(params) { 
    
        
	var url = baseURL + "?" +'username=' + username + '&' + 'password=' + password;
	
	for (var key in params){
	url = url + '&' + key + '=' + params[key];
	  }
        
	return url;
	}
	
	function request(url, callback) { 
	
	
	var xhr = new XMLHttpRequest();
	//url = baseURL;
		
		
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			
			callback(this.responseText);
			
			console.log(this.responseText);			
			
	
		}
	};
	
	xhr.send();
	}
	
	this.setUser = function(un, pw) {
		username = un;
		password = pw;
	};
	
	this.fetchUsers = function(callback) {

		var url = constructURL({action: 'user_get_all'});
		
		request(url, callback);
	
		
	};
    	
	this.fetchBeerdata = function(callback) { //loopa genom alla id som man kan hitta i inventory_get
        
     
		var url = constructURL({action: 'beer_data_get&beer_id=186602'});
		
		request(url, callback);
     
		
	};
    
    this.fetchInventory = function(callback) {

	
		var url = constructURL({action: 'inventory_get'});
		
		request(url, callback);
	
		
	};
	
	
	

}
 