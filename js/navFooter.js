const navContent = `
  <div>
    <a href="#">Find Talents <i class="ri-arrow-down-s-line"></i></a>
    <a href="#">Find Freelancing Jobs <i class="ri-arrow-down-s-line"></i></a>
    <input type="search" placeholder="Search">
  </div>
  <div>
    <a href="#">Login</a>
    <a href="#">Sign Up</a>
    <button>Post a Job</button>
  </div>`

const loadNav = () => {
  const navbar = document.querySelector("nav");

  navbar.innerHTML = navContent;
}

document.addEventListener("DOMContentLoaded", loadNav);