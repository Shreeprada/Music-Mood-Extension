document.querySelector("button.play").addEventListener("click",function(){
    let selectedTrack=document.querySelector("select").value;
    chrome.runtime.sendMessage({name:"playTrack",track:selectedTrack});
})

document.querySelector("button.pause").addEventListener("click",function(){
    let selectedTrack=document.querySelector("select").value;
    chrome.runtime.sendMessage({name:"pauseTrack"});
})