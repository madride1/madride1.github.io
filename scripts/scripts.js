// adds the menu content to pages
// at the end only used for home page
document.getElementById("mainNav").innerHTML = '<a href="index.html" id="home"> Home</a>  \
      <a href="#portfolioS" id="portfolio">Portfolio</a>  \
      <a href="#about" id="aboutMe">About Me</a>  \
      <a id="contact">Contact</a>  \
      <a href="javascript:void(0);" class="hamIcon" onClick="collapseMenu()">  \
          <i class="fa fa-bars"></i>  \
      </a>';



// Needed to update className appropriately for 
// main navigation to handle smaller screen menu bar
function collapseMenu() {
    let cn = document.getElementById("mainNav");
    if (cn.className === "mainNav") {
      cn.className += " responsive";
    } else {
      cn.className = "mainNav";
    }
  }

// updates active class when menu option is selected
function updateActive(pageclass) {
  let pages = ['home', 'portfolio', 'aboutMe', 'contact'];

  for (let i= 0; i < pages.length; i++){
    let pg = document.getElementById(pages[i]);
    if ( pages[i] == pageclass) {
      pg.className = "active";
    } else {
      pg.className = "";
    }
  }
}

// // // Modal

var modal = document.getElementById("modalDiv");
var trigModal = document.getElementById("sendMsg");
var span = document.getElementsByClassName("close")[0];

// Open Modal 
// trigModal.onclick = function() {
//   modal.style.display = "block";
// }

// Close Modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var mainSpan = document.getElementsByClassName("mainClose")[0];
var mainModal = document.getElementById("mainModalDiv");
// Close Modal
mainSpan.onclick = function() {
  mainModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == mainModal) {
    mainModal.style.display = "none";
  }
}

// Handle menu selection to open model appropriately
// by loading the correct file 
// and changes modal background color
jQuery(document).ready(function() {
  jQuery("#gd").on("click", function() {
      mainModal.style.display = "block";
      jQuery(".mainModal-content").css({"background-color":"rgb(217, 217, 248)"});
      jQuery.get('index_gd.html',function(data){
          jQuery("#mainProject").html(data);
      });    
  });

  jQuery("#swm").on("click", function() {
    mainModal.style.display = "block";
    jQuery(".mainModal-content").css({"background-color":"#1B7381"});
    jQuery.get('kidsTrivia.html',function(data){
        jQuery("#mainProject").html(data);
    });    
  });
  
  jQuery("#craftyGifts").on("click", function() {
    mainModal.style.display = "block";
    jQuery.get('craftygifts.html',function(data){
        jQuery(".mainModal-content").css({"background-color":"#F8F8F8"});
        jQuery("#mainProject").html(data);
    });    
  });

  jQuery("#dbPage").on("click", function() {
    mainModal.style.display = "block";
    jQuery.get('rps.html',function(data){
        jQuery(".mainModal-content").css({"background-color":"rgba(46, 147, 230, 0.904)"});
        jQuery("#mainProject").html(data);
    });    
  });

  jQuery("#contact").on("click", function() {
    mainModal.style.display = "block";
    jQuery(".mainModal-content").css({"background-color":"rgb(223,213,190)"});
    jQuery.get('contact.html',function(data){
        jQuery("#mainProject").html(data);
    });    
  });
  
  // about me section will load p
  // jQuery("#resume").on("click", function() {
  //   mainModal.style.display = "block";
  //   jQuery(".mainModal-content").css({"background-color":"rgb(223,213,190)"});
  //   jQuery.get('SoftwareDeveloper_Madrid-Luna_Elizabeth.html',function(data){
  //       jQuery("#mainProject").html(data);
  //   });    
  // });

  // Handle "Return To Top" image
  // checks if user has scrolled down/up to trigger
  // the image to be displayed
  window.onscroll = function() {scrollFunction()};

    const scrollFunction = () => {
    let toTop = document.getElementById('returnToTop');
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // if scroll far enough display
      toTop.style.display = "block";
    } else {
      // if close to top do not show image
      toTop.style.display = "none";
    }
  }

})

//Line Animation
function homeAnimation() {
  var textWrapper = document.querySelector('.nameLine .letters');
  let ml = [];
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // handle animage for name
  ml["nameLine"]=anime.timeline({loop: true})
    .add({
      targets: '.nameLine .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    }).add({
      targets: '.nameLine .line',
      scaleX: [0,1],
      opacity: [0.5,0.8],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=675',
      delay: (el, i, l) => 80 * (l - i)
    }).add({
      targets: '.nameLine',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 2000
    });

  textWrapper = document.querySelector('.positionLine .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // handle animation for position
  ml["positionLine"]=anime.timeline({loop: true})
    .add({
      targets: '.positionLine .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 750,
      delay: (el, i) => 70 * (i+1)
    }).add({
      targets: '.positionLine',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 2000
    });
}


