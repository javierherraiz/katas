


Number.prototype.toRoman = (function () {

	var map = { M : 1000 ,CM: 900 , D: 500 ,CD:400, C :100, XC: 90, L : 50 , XL: 40 , X: 10 , IX: 9 , V : 5, IV: 4, I : 1 };

	var toRomans = function toRomans(num) {  
		for (a in map) { 
			if(map[a] <= num ) {
				return a + toRomans(num - map[a]);
			} 
		} 

		return '';
	};

	return function toRoman(){ 
		return toRomans(this);
	}; 
})();



String.prototype.toDecimal = (function () {
	var map = { M : 1000 ,CM: 900 , D: 500 ,CD:400, C :100, XC: 90, L : 50 , XL: 40 , X: 10 , IX: 9 , V : 5, IV: 4, I : 1 };
	var toDecimals = function toDeciamls(str) { 
		for( var a in map ) { 
			if(str.substr(0,a.length) === a) { 
				return map[a] + toDecimals(str.slice(a.length));
			}
		}

		return 0;
	} 
			
	return function toDecimal () { 
		return toDecimals(this);
	}

})();
