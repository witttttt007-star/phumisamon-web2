const audio = document.getElementById('bg-audio');
let isPlaying = false;

function toggleAudio(){
  if(!isPlaying){
    audio.play();
    audio.volume = 0.3;
    isPlaying = true;
  }else{
    audio.pause();
    isPlaying = false;
  }
}
