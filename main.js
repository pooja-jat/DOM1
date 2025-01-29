let box1 = document.querySelector(".box1");
let picture = document.querySelector(".picture");
let i = document.querySelector(".fa-heart");

let like = 968;

i.innerText = like;

let unlike = () => {
  if (like == 968) {
    picture.style.display = "block";
    const hide = () => {
      picture.style.display = "none";
    };

    const time = 800; // 1000ms = 1 sec

    setTimeout(hide, time);

    i.style.color = "red";
     
    like = 969;     
    i.innerText = like;
  } else {
    i.style.color = "white";
    picture.style.display = "none";
    like = 968;
    i.innerText = like;
  }
};

box1.addEventListener("dblclick", unlike);
