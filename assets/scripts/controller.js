
const VIDEOS = [
  {
    src: "./assets/videos/flor.mp4",
    poster: "./assets/images/poster1.jpeg",
    video: "video1",
    id: "video1"
  },
  {
    src: "./assets/videos/tulipanes.mp4",
    poster: "./assets/images/poster2.PNG",
    video: "video2",
    id: "video2"
  },
  {
    src: "./assets/videos/dr.mp4",
    poster: "./assets/images/poster3.PNG",
    video: "video3",
    id: "video3"
  }

 
];

var reproductor = videojs('repro');


var videoInicial = document.getElementById('video1');
videoInicial.classList.remove("imgCaption");
videoInicial.classList.add('imgCaptionSelected');

var initialPosition = 0;

var fullscreen = reproductor.controlBar.getChild("FullscreenToggle")
var index = reproductor.controlBar.children().indexOf(fullscreen)
var capture = reproductor.controlBar.addChild("button", {}, index);
var captureDom = capture.el();
captureDom.innerHTML = "<span class='spanImg'><img src='./assets/images/picture.png' class= 'iconImg' alt=''></span>";

var volumePanel =  reproductor.controlBar.getChild('VolumePanel');
var indexPT = reproductor.controlBar.children().indexOf(volumePanel)
var next = reproductor.controlBar.addChild("button", {}, indexPT);
var nextDom = next.el();
nextDom.innerHTML = "<span class='spanImg'><img src='./assets/images/d.png' class= 'iconImg spanImg' alt=''></span>";

nextDom.onclick = function(){

  if (initialPosition === 2) {
    initialPosition = 0;
  }else{
    initialPosition ++;
  }
     
  removeSelected();
  addSelected(VIDEOS[initialPosition]);
  reproductor.src(  VIDEOS[initialPosition].src);
  reproductor.play();
}  

captureDom.onclick = function(){
  $('#modalImagen').modal('show');
  var repro = document.getElementById('repro_html5_api');
  var canvasContext = frame.getContext("2d");
  canvasContext.drawImage(repro,0,0,480,320);
}  

function closeModal(){
  $('#modalImagen').modal('hide');
}

function selectVideo(video){
    document.getElementById(video.id).style.cursor = "pointer";
}

 function playSelectedVudeo(video) {
   
  removeSelected();
  addSelected(video);
   const videoFound = VIDEOS.find((v) => v.video === video.id);
   initialPosition = VIDEOS.findIndex((v) => v.video === video.id);
   reproductor.poster(videoFound.poster);
   reproductor.src(videoFound.src);
   reproductor.play();
 }

function download(){
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = document.getElementById('frame').toDataURL()
  link.click();
}

function addSelected(video){
  var videoImg = document.getElementById(video.id);
  videoImg.classList.remove("imgCaption");
  videoImg.classList.add('imgCaptionSelected');
}

function removeSelected(){

  VIDEOS.forEach(video=>{
    var videoImg = document.getElementById(video.video);
    videoImg.classList.remove("imgCaptionSelected");
    videoImg.classList.add('imgCaption')
  })

  ;
}