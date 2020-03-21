const HEADER_NAV = document.getElementById("header_nav");
const SLIDER = document.getElementById("slider");
const ARROW-LEFT = document.getElementById("arrow-left");
const ARROW-RIGHT = document.getElementById("arrow-right");
const IPHONEVERT = document.getElementById('iphone-vert');
const IPHONERHOR = document.getElementById('iphone-hor');
const SCRVERT = document.getElementById('screen-vert');
const SCRHOR = document.getElementById('screen-hor');
const TAGS = document.getElementById("tags")
const GALERY = document.getElementById("galery");
const CONTACTS_FORM = document.getElementById("contacts_form");

HEADER_NAV.addEventListener('click', (event) => {
  HEADER_NAV.querySelectorAll("homie").forEach((el) => el.classList.remove("red"));
  event.target.classList.add("red");
});

IPHONEVERT.addEventListener('click', () => {
  if (SCRVERT.classList.contains('hide')) SCRVERT.classList.remove('hide');
  else SCRVERT.classList.add('hide');
});

IPHONERHOR.addEventListener('click', () => {
  if (SCRHOR.classList.contains('hide')) SCRHOR.classList.remove('hide');
  else SCRHOR.classList.add('hide');
});

SCRVERT.addEventListener('click', () => {
  if (SCRVERT.classList.contains('hide')) SCRVERT.classList.remove('hide');
  else SCRVERT.classList.add('hide');
});

SCRHOR.addEventListener('click', () => {
  if (SCRHOR.classList.contains('hide')) SCRHOR.classList.remove('hide');
  else SCRHOR.classList.add('hide');
});

TAGS.addEventListener('click', (event) => {
  if (event.target.toString() === '[object HTMLButtonElement]') {
    TAGS.querySelectorAll("span").forEach((el) => el.classList.remove("on"));
    event.target.classList.add("on");
  }
});

document.getElementById("all").onclick = function() {
  const imgArr = GALERY.querySelectorAll("img");
  for (let i = imgArr.length - 1; i > 0; i -= 1) {
    const pseudoRandom = Math.floor(Math.random()*(i + 1));
    GALERY.appendChild(imgArr[pseudoRandom]);
  }
}

document.getElementById("web_design").onclick = function() {
  const imgArr = GALERY.querySelectorAll("img");
  for (let i = imgArr.length - 1; i > 0; i -= 1) {
    const pseudoRandom = Math.floor(Math.random()*(i + 1));
    GALERY.appendChild(imgArr[pseudoRandom]);
  }
}

document.getElementById("graphic_design").onclick = function() {
  const imgArr = GALERY.querySelectorAll("img");
  for (let i = 0; i < imgArr.length; i += 1) {
    const newIndex = i === imgArr.length - 1 ? 0 : i + 1;
    GALERY.appendChild(imgArr[newIndex]);
  }
}

document.getElementById("artwork").onclick = function() {
  const imgArr = GALERY.querySelectorAll("img");
  for (let i = 0; i < imgArr.length - 1; i += 1) {
    GALERY.appendChild(imgArr[i]);
  }
}

GALERY.addEventListener('click', (event) => {
  GALERY.querySelectorAll("img").forEach((el) => el.classList.remove('img-border'));
  event.target.classList.add('img-border');
});

ARROW-RIGHT.addEventListener('click', () => {
  const slider_1 = document.getElementById('slider-1');
  const slider_2 = document.getElementById('slider-2');
  if (slider_1.classList.contains('display-none')) {
    slider_1.classList.remove('display-none');
    slider_2.classList.add('display-none');
    SLIDER.style.cssText = "background-color: var(--orange); border-bottom: 6px solid var(--darkorange);";
  }
  else {
    slider_2.classList.remove('display-none');
    slider_1.classList.add('display-none');
    SLIDER.style.cssText = "background-color: var(--slider2bg); border-bottom: 6px solid var(--slider2bg);";
  }
});

ARROW-LEFT.addEventListener('click', () => {
  const slide1 = document.getElementById('slide-1');
  const slide2 = document.getElementById('slide-2');
  if (slide1.classList.contains('display-none')) {
    slide1.classList.remove('display-none');
    slide2.classList.add('display-none');
    SLIDER.style.cssText = "background-color: var(--orange); border-bottom: 6px solid var(--darkorange);";
  }
  else {
    slide2.classList.remove('display-none');
    slide1.classList.add('display-none');
    SLIDER.style.cssText = "background-color: var(--slider2bg); border-bottom: 6px solid var(--slider2bg);";
  }
});

CONTACTS_FORM.onsubmit = function() {
  const subject = document.getElementById("subject-text").value.toString() === ''
    ? 'Без темы' :
    `Тема: ${document.getElementById("subject-text").value.toString()}`;
  const describe = document.getElementById("desribe-text").value.toString() === ''
    ? 'Без описания' :
    `Описание: ${document.getElementById("desribe-text").value.toString()}`;
}
