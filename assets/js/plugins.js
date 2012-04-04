// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.



// $('#results').modal('show');

$('#results').on('shown', function () {
  var $seconds = $(".seconds");

  var intervalID = window.setInterval(function() {
  	log("interval")
  	//
  	var s = parseInt($seconds.text()) - 1 ;
  	
  	if(s < 0) {
  		clearInterval(intervalID);
  		$('#results').modal('hide');
  		
  	} else {
  		$seconds.text(s);
  	}

  }, 1000);

});

$('#results').on('hidden', function () {
  log('hidden')
  // open DashBoard
  //Crafty.scene("DashBoard");
});

