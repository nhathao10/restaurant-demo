 // Chuyển menu
 const menuTitle = document.querySelector(".menu-title");
    menuTitle.addEventListener("click",function(x){
     if(x.target.classList.contains("menu-button")) {
         const Target = x.target.getAttribute("data-title");

       menuTitle.querySelector(".active").classList.remove("active");
       x.target.classList.add("active");
       
       const menuItem = document.querySelector(".menu");
       menuItem.querySelector(".menu-item-content.active").classList.remove("active");
       menuItem.querySelector(Target).classList.add("active")
   }
 })


document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.big-image-content-btn').addEventListener('click', function() {

      var aboutSection = document.getElementById('about');
      
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});


document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.about-item .btn').addEventListener('click', function() {

      var menuSection = document.getElementById('menu');
      
      menuSection.scrollIntoView({ behavior: 'smooth' });
  });
});




// Scroll on top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}

// Lăn về đầu trang khi click vào nút
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
