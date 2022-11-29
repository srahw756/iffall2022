var audio1 = document.getElementById("audio1");
var img1 = document.getElementById("one");

function play() {
  audio1.play();
}

function stop() {
  audio1.pause();
}

img1.addEventListener('click', play);
img1.addEventListener('mouseover', play);
img1.addEventListener('mouseout', stop);

var audio2 = document.getElementById("audio2");
var img2 = document.getElementById("two");

function play() {
  audio2.play();
}

function stop() {
  audio2.pause();
}

img2.addEventListener('click', play);
img2.addEventListener('mouseover', play);
img2.addEventListener('mouseout', stop);