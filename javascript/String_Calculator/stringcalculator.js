var StringCalculator = (function () {

	var negatives = [];

	var RegExpObj = { "def": /[\n|,]+/ ,"custom": /^\/\/(.+)\n/ ,"several": /\[([^\[\]]+)\]/g };

	/**
  *
  * name   : getSum 
  * params : A Numbers Array
  * return : int, the sumatory of those numbers
  * 
  **/
  var getSum = function (aNumbers) { 
  	var len = aNumbers.length, 
  	     sum = 0;
		if(isArray(aNumbers)) {
	  	while(len) {
		    if( isNegative( parseInt(aNumbers[len - 1],10))) {
		    	negatives.push(parseInt(aNumbers[len - 1],10));
		    } else { 
		    	sum  = sum + blockingHighNumbers(parseInt(aNumbers[len - 1],10));
		    }
		    len--;
	  	}
  	}
  	return sum;
	};

	/**
  *
  * name   : getNumbers.
  * params : String (numbers with a delimiter) 
  * return : Either 0 if there is an empty string as a parameter or a numbers array
  * 
  **/
  var getNumbers = function(numbers) { 
    var re = RegExpObj,
  	    n=[],temp,formatedDelimiter = getRegExp(numbers);
    console.log("delimiter" + formatedDelimiter);
		if (formatedDelimiter) {
				n = numbers.split("\n");
        n.shift();
        temp = n[n.length - 1];
				return n = temp.split(new RegExp(formatedDelimiter));  
		} 

		
		return n = (numbers === "") ? 0 : numbers.split(re.def);
	};

  /**
  *
  * name   : getRegExp.
  * params : String (numbers with a delimiter)  
  * return : The corresponding REgExpr depending on the string format or null if the format is not a permited one to
  *          customize the delimiters themselves
  * 
  **/
  var getRegExp = function (numbers) {
  	var re = RegExpObj,
  	    severalDelimiters = numbers.match(re.several),
  	    custom = numbers.match(re.custom),
				formatedDelimiter = null,scaned,aFormatedDelimiters = [];

    if(custom) { 
      if ( severalDelimiters) { 
        while ((scaned = re.several.exec(numbers)) != null) { 
          aFormatedDelimiters.push(scaned[0].replace(/\[|\]/g,""));           
        }         
        formatedDelimiter = aFormatedDelimiters.join("|");
      } else { 
        formatedDelimiter = custom[1];
      } 
       
  	return formatedDelimiter;
  };

  /**
  *
  * name   : isNegative.
  * params : int. 
  * return : true if the number is negative, false if it is not.
  * 
  **/
	var isNegative = function (number) { 
  	return parseInt(number,10) < 0;
	};

	/**
  *
  * name   : blockHighNumbers
  * params : int
  * return : 0 if the number is higher than 1000, if it is not so, it returns the provided number
  * 
  **/

  var blockingHighNumbers = function ( number ) { 
  	return number < 1000 ? number : 0;
  };


	var isArray = function(aObj) { 
		var arrayObj = "[object Array]",
				ops = Object.prototype.toString;
		return ops.call(aObj) === arrayObj;
	};

	return {
		addNumbers : function (numbers) { 
		  var arrayNumbers = getNumbers(numbers),
		      len = arrayNumbers.length,
		      sum = 0;
			
			try { 
	  		if(negatives.length > 0) { 
		  		throw new Error ("Negatives not allowed: " + negatives.join(","));	
	  		}
		  }
		  catch(e){
		  	console.log(e);
		  } 
		  return getSum(arrayNumbers);
       
		  
		} 
	}	
})();

