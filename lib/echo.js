module.exports = function( ) {
	
	 var sender, msg;
    if (arguments.length == 2){
      sender = arguments[0];
      msg = arguments[1];
    } else { 
      if ( typeof self == 'undefined' ) {
	return;
      }
      sender = self;
      msg = arguments[0];
    }
       sender.sendMessage( msg );
  }