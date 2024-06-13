const navbarNav = document.querySelector(".navbar-nav");
const navbarExtra = document.querySelector(".navbar-extra");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!navbarExtra.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const form = document.querySelector('form[name="art-contact-form"]');
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  form.appendChild(spinner);
  const formFields = form.querySelectorAll("input, textarea, button");
  formFields.forEach((field) => {
    field.disabled = true;
  });
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwsQDKhb7vHot-FBm3Atr73ignGLdc21gj69BakdW7iZ2O5KL8gdpjVCL4-1suQEe83/exec", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    spinner.style.display = "none";
    formFields.forEach((field) => {
      field.disabled = false;
    });
    form.reset();
    const alertMsg = document.createElement("div");
    alertMsg.classList.add("alert", "success");
    alertMsg.textContent = "Your message has been sent!";
    form.appendChild(alertMsg);
    setTimeout(() => {
      alertMsg.style.opacity = "0";
      setTimeout(() => {
        alertMsg.remove();
      }, 300);
    }, 3000);
  } catch (error) {
    console.error(error);
    spinner.style.display = "none";
    formFields.forEach((field) => {
      field.disabled = false;
    });
    const alertMsg = document.createElement("div");
    alertMsg.classList.add("alert", "error");
    alertMsg.textContent = "An error occurred. Please try again later.";
    form.appendChild(alertMsg);
    setTimeout(() => {
      alertMsg.style.opacity = "0";
      setTimeout(() => {
        alertMsg.remove();
      }, 300);
    }, 3000);
  }
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var slideDots = document.querySelectorAll(".slide-dot");

slideDots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    swiper.slideTo(index + 1);
  });
});

swiper.on("slideChange", function () {
  slideDots.forEach(function (dot, index) {
    if (swiper.activeIndex - 1 === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
});


function handleResponse(response) {
  var posts = response.feed.entry;
  var blogPosts = document.getElementById("blog-posts");
  var maxPosts = 4;

  for (var i = 0; i < Math.min(posts.length, maxPosts); i++) {
    var post = posts[i];
    var title = post.title.$t;
    var link = post.link.pop().href;
    var backgroundImageUrl =
      post.media$thumbnail && post.media$thumbnail.url
        ? post.media$thumbnail.url
        : "URL_GAMBAR_DEFAULT";

    var blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    blogPost.innerHTML = `
      <a href="${link}" target="_blank">
        <div class="thumbnail" style="background-image: url('${backgroundImageUrl}');"></div>
        <h3>${title}</h3>
      </a>
    `;
    blogPosts.appendChild(blogPost);
  }
}


const slideContainer = document.querySelector(".logos-slide");
const slides = document.querySelectorAll(".logos-slide img");
const slideWidth = slides[0].offsetWidth;
let slideIndex = 0;

function slideNext() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(slideNext, 2000);




type="text/javascript">
      particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

      var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
