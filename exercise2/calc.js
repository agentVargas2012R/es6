var calculator = {
	history: [],

	/*
	* Algorithm:
	* if the key is a number concatenate the string value to itself
	*
	* if it is an operation, 
	* then turn the previous value into a number and add it to the history 
	* and call that corresponding function method, keep track of the number of presses 
	* of an operation, if it is pressed more than once, treat it as an equal sign
	*/
	calc: function(key){
		//debugger;
		if(key in ["0","1","2","3","4","5","6","7","8","9"]){
			document.getElementById("display").value+=key;	
		}else if(key == "+"){
			calculator.history.push(document.getElementById("display").value);
			//TODO: '+' call the plus function

		}else if(key == "-"){
			calculator.history.push(document.getElementById("display").value);
			//TODO: '-' call the plus function

		}else if(key == "*"){
			calculator.history.push(document.getElementById("display").value);
			//TODO: '*' call the plus function

		}else if(key == "/"){
			calculator.history.push(document.getElementById("display").value);
			//TODO: '/' call the plus function

		}
	},

	/**
	* Algorithm: Get the value of display and perform an add operation on the key passed
	*/
	add: function(key){

	},

	/**
	* Algorithm: Get the value of display and perform subtraction operation on the key passed
	*/
	subtraction: function(key){

	},

	/**
	* Algorithm: Get the value of display and perform a multiplication operation on the key passed
	*/
	multiply: function(key){

	},

	/**
	* Algorithm: Get the value of display and perform a division operation on the key passed
	* Handle the divide by zero case
	*/
	division: function(key){

	}
};