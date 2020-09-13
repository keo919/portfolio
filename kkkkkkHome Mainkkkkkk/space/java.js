var box = document.getElementById("box");

window.onmousemove = function (e) {
  
  'use strict';
  
  var x = e.clientX / 20,
      
      y = e.clientY / 20;
  
  box.style.top = y - 50 + "px";
  
  box.style.left = x - 80 + "px"
  
}

// ====================================

// creating my image link

var link = document.createElement("a");
document.body.appendChild(link);

link.href = "https://codepen.io/mo7hamed/pens/public";
link.target = "_blank";

var photo = document.createElement("img");
link.appendChild(photo);

photo.src =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1292524/profile/profile-80.jpg";
photo.alt = "mo7amed";

photo.style =
  "border-radius:50%;position:fixed;bottom:20px;right:20px;transition:all 0.5s ease;width:80px;height:80px;z-index:30";

photo.onmouseover = function() {
  this.style.transform = "scale(1.1,1.1)";
  this.style.boxShadow = "5px 5px 15px #000";
};

photo.onmouseout = function() {
  this.style.transform = "scale(1,1)";
  this.style.boxShadow = "none";
};
