chrome.runtime.onMessage.addListener((msg,sender,response)=>{
    if(msg.name=='playTrack'){
        let trackName=msg.track;
       let audioElement= document.querySelector('.audioElement');
       audioElement.src=trackName+'.mp3';
       audioElement.play();
    }

    if(msg.name=='pauseTrack'){
        let audioElement= document.querySelector('.audioElement');
        audioElement.pause();
    }
})