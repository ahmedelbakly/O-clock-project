function DateTime() {
  const dateCon = document.querySelector(".dateCont");
  const time = document.querySelector(".time");
  const date = new Date();
  //////////////////////////

  let hour;
  if (date.getHours() == 0) {
    hour = 12;
  } else {
    hour = date.getHours();
  }
  //////////////////////////////////

  if (date.getHours() > 12) {
    hour =( date.getHours() - 12);
   
  } else {
    hour = date.getHours();
  }
  // console.log(date.getHours() - 12);
  ////////////////////////////////
  let PmAm;
  if (date.getHours() >= 12) {
    PmAm = "Pm";
  } else {
    PmAm = "Am";
  }
  ////////////////////////////
  let second;
  if (date.getSeconds() < 10) {
    second = `0${date.getSeconds()}`;
  } else {
    second = date.getSeconds();
  }
  ////////////////////////////////
  let minuets;
  if (date.getMinutes() < 10) {
    minuets = `0${date.getMinutes()}`;
  } else {
    minuets = date.getMinutes();
  }
  /////////////////////
  // console.log(hour);

  if (hour < 10) {
    hour = `0${hour}`;
  } else {
    hour = date.getHours();
  }
  // console.log(hour);

  ///////////////////////////////
  dateCon.innerHTML = `${date.getDate()} - ${
    date.getMonth() + 1
  } -  ${date.getFullYear()} `;
  time.innerHTML = `${hour} : ${minuets} :  ${second} ${PmAm} `;
  // console.log(hour);
}

/////////////////////////////
setInterval(DateTime, 1000);

/////////////////////////////////

const urlBg = ["1.jpg","2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const  body = document.getElementsByTagName("body")[0];

let i = 1;

function changeBg() {
  body.style.backgroundImage = `url("image/${urlBg[i]}")`;

  i++;
  if (i >= urlBg.length) {
    i = 0;
  }
  
}

setInterval(changeBg, 15000);



