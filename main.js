// Html' deki elemanlara eriş

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// ! menuBtn elemanuna tıklanıpdığında nav ve header elemanına eriş

menuBtn.addEventListener("click", () => {
  // header'a nav-active class'ı ekle
  header.classList.add("nav-active");

  // nav elemanına active class'ı ekle
  nav.classList.add("active");

  // menuBtn'i gizle
  menuBtn.style.display = "none";

  // closeBtn'i aktif et
  closeBtn.style.display = "block";
});

// ! clsoeBtn elemanına tıklanınca class header ve nav elemanından class kaldır

closeBtn.addEventListener("click", () => {
  // header'dan nav-active class'ını kaldır
  header.classList.remove("nav-active");

  // nav elemanından active class'ını kaldır
  nav.classList.remove("active");

  // menuBtn'i aktif et
  menuBtn.style.display = "block";

  // closeBtn'i gizle
  closeBtn.style.display = "none";
});
