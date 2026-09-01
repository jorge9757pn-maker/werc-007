$(document).ready(function() {
  var audioBeep = document.createElement('audio');
  audioBeep.setAttribute('src', 'media/beep.mp3');
  audioBeep.setAttribute('preload', 'auto');

  var audioVoice = document.createElement('audio');
  audioVoice.setAttribute('src', 'media/voice.mp3');
  audioVoice.setAttribute('preload', 'auto');

  audioBeep.addEventListener('ended', function() {
      this.play();
  }, false);

  audioVoice.addEventListener('ended', function() {
      this.play();
  }, false);

   $('#mycanvas').click(function() {
      audioBeep.play();
      audioVoice.play();
  });

});

   document.onkeydown = function (e) {
   return false;
   }

   
 
function addEvent(obj, evt, fn) {
		if (obj.addEventListener) {
				obj.addEventListener(evt, fn, false);
		}
		else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
		}
}
addEvent(window,"load",function(e) {
		addEvent(document, "mouseout", function(e) {
				e = e ? e : window.event;
				var from = e.relatedTarget || e.toElement;
				if (!from || from.nodeName == "HTML") {
						// stop your drag event here
						// for now we can just use an alert
				 //alert("hello");

			 modal.style.display = "block";

				}
		});
});

	$(document).mousemove(function(){
	var canvas = document.getElementById('mycanvas');
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
canvas.requestPointerLock();

	//capture mouse movement event
		 // remove our layover from the DOM
	});

 //  $(document).mousemove(function(){
 // alert("move detect");
	//capture mouse movement event
 //   $("#pageLayover").remove(); // remove our layover from the DOM
 // });