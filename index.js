jQuery(document).ready(function($){
	
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});

jQuery(document).ready(function($){
        
        // Hide all panels to start
        var panels = $('.accordion > dd').hide();
        
        // Show first panel on load (optional). Remove if you want
        panels.first().show();
        
        // On click of panel title
        $('.accordion > dt > a').click(function() {
          var $this = $(this);
          
          // Slide up all other panels
          panels.slideUp();
          
          //Slide down target panel
          $this.parent().next().slideDown();
          
          return false;
        });
      });
	  
$(document).ready(function(){
	$('.three.1').hover(function(){
		$('.three.1 p').toggle(500);
    });
	$('.three.2').hover(function(){
		$('.three.2 p').toggle(500);
	});
	$('.three.3').hover(function(){
		$('.three.3 p').toggle(500);
	});
});


//handling login and logout status

var config = {
	apiKey: "AIzaSyAt1jlcZyTjOiDycOSztbOgVHhn1h-vgaM",
	authDomain: "idknewproject-af583.firebaseapp.com",
	databaseURL: "https://idknewproject-af583.firebaseio.com",
	projectId: "idknewproject-af583",
	storageBucket: "idknewproject-af583.appspot.com",
	messagingSenderId: "741811417775",
	appId: "1:741811417775:web:fe4928890ab0e598ce1a5a",
	measurementId: "G-8JM8B7F2C3"
  };
  firebase.initializeApp(config);

function signoutBtn() {
	if (firebase.auth().currentUser) {
	  // [START signout]
	  firebase.auth().signOut();
	}
  }
	/**
	 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
	 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
	 *    out, and that is where we update the UI.
	 */
	function initApp() {
	  // Listening for auth state changes.
	  // [START authstatelistener]
	  firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		  // User is signed in.
		  var displayName = user.displayName;
		  var email = user.email;
		  var emailVerified = user.emailVerified;
		  var photoURL = user.photoURL;
		  var isAnonymous = user.isAnonymous;
		  var uid = user.uid;
		  var providerData = user.providerData;
		  // [START_EXCLUDE]
		  document.getElementById('quickstart-sign-in-status').textContent = `${user.email}`;
		  document.getElementById('loginStatus').textContent = 'Log out';

		  // [END_EXCLUDE]
		} else {
		  // User is signed out.
		  // [START_EXCLUDE]
		  document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
		  document.getElementById('loginStatus').textContent = 'Log in';
		  // [END_EXCLUDE]
		}
	  });
	  // [END authstatelistener]
  
	  document.getElementById('loginStatus').addEventListener('click', signoutBtn);
	}
  
	window.onload = function() {
	  initApp();
	};