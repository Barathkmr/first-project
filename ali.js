// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("my-slides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" current", "");
//   }
//   slides[slideIndex-1].style.display="block";
//   dots[slideIndex-1].className += " current";
//   setTimeout(showSlides, 2000);
// }
// add product
var li,a,div,div2,img,info,pr,span;
var image=document.getElementById("image-add");
var price=document.getElementById("price-add");
console.log(image.value);
var pic=localStorage.setItem("imgnam",image);
  var pri=localStorage.setItem("pric",price);
// var sold=document.getElementsByClassName("sold-add");
function add(){
  
  var ul=document.getElementById('addition'); 
  console.log("hi");
  li=document.createElement('li');
  a=document.createElement('a');
  div=document.createElement('div');
  div2=document.createElement('div');
  img=document.createElement('img');
  info=document.createElement('div');
  pr=document.createElement('div');
  span=document.createElement('span');

  li.classList.add("product-item");
  a.classList.add("flex");
  a.classList.add("flex-vertical");
  a.classList.add("justify-between");
  div.classList.add("img-wrapper");
  div.classList.add("flex-vertical");
  div.classList.add("justify-center");
  div.classList.add("flex-auto");
  info.classList.add("product-info");
  pr.classList.add("pro-price");
  pr.classList.add("flex");
  span.classList.add("current-price");

  span.innerHTML= price.value ;
  img.setAttribute("src",image.value);

  li.appendChild(a);
  a.appendChild(div);
  a.appendChild(info);
  div.appendChild(div2);
  div2.appendChild(img);
  info.appendChild(pr);
  pr.appendChild(span);
  console.log(li);

  ul.insertBefore(li,ul.firstChild);
};