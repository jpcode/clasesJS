function tiene2( n ){
	/*
		si tiene un digito 2
	*/
	var cadena = n.toString();
	      //01
	//12-> "12"
	for ( var i = 0; i < cadena.length;i++ ){
		if ( cadena[ i ] === '2' ) return true;
	}
	return false;
}

function suma( n ){
	var x = n.toString();
}

function tiene2( n ){
	var suma = 0;
	while( n != 0){
		var dig = n % 10;
		n = Math.floor(n / 10);
		suma = suma + dig;
	}
	return suma;
}

function quita2( n ){
	for ( var i = 1; i <= n; i++ ){
		if ( !tiene2( i ) ) console.log( i );
	}
}