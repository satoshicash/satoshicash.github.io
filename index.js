
//scroll top
let mybutton = document.getElementById("myBtn");

window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
  } else {
     mybutton.style.display = "none";
 }
}
//videos
function topFunction(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach(video =>{
  video.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove("active"));
    video.classList.add("active");
    if(video.classList.contains("active")){
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
  };
 };
});
var xValues = ["Private sale", "Liquidity", "Team", "Marketing", "Burn"];
var yValues = [30, 20, 20, 10, 20];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "TOKENOMICS"
    }
  }
});
