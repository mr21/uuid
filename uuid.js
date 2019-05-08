"use strict";

function newUUID() {
	const rnd = crypto.getRandomValues( new Uint8Array( 36 ) ),
		s = rnd.reduce( ( arr, n ) => {
			arr.push( ( n % 16 ).toString( 16 ) );
			return arr;
		}, [] );

	s[ 14 ] = "4";
	s[ 19 ] = ( 8 + rnd[ 19 ] % 4 ).toString( 16 );
	s[ 8 ] =
	s[ 13 ] =
	s[ 18 ] =
	s[ 23 ] = "-";
	return s.join( "" );
}
