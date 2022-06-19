let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn")
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");
let transparentColor = 'transparent';
let uid = new ShortUniqueId();
let gallery = document.querySelector(".gallery");
gallery.addEventListener("click",()=>{
    location.assign('./gallery.html')
})
let recorder;
let chunks = [];
let shouldRecord = false;
let constraints = {
    video:true,
    audio:false
}
navigator.mediaDevices.getUserMedia(constraints)
.then((Stream) => {
    video.srcObject = Stream;
    video.addEventListener("loadedmetadata",()=>{
        video.play();
    })

    recorder = new MediaRecorder(Stream);
    recorder.addEventListener("start",()=>{
        chunks = [];
    })
    recorder.addEventListener("dataavailable",(e)=>{
        chunks.push(e.data);
    })
    
    recorder.addEventListener("stop",()=>{
        let blob = new Blob(chunks ,{type:"video/mkv"} );
     
        let videoURL = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = videoURL
        if ( db ){
            let videoID = uid();
            let dbTransaction = db.transaction("video","readwrite");
            let videoStore = dbTransaction.objectStore("video");
            let videoEntry = {
                id:`vid-${videoID}`,
                blobData:blob,
            }
            let addRequest = videoStore.add(videoEntry);
            addRequest.onsuccess = () =>{
                console.log("image added successfully");
            }
        }
        // a.download = "myvideo.mp4";
        // a.click();
    })
})

captureBtnCont.addEventListener("click",()=>{
    captureBtn.classList.add("scale-capture");
    let canvas = document.createElement('canvas');
    let tool = canvas.getContext('2d')
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    tool.drawImage(video,0,0,canvas.width,canvas.height)
    //applying filter
    tool.fillStyle = transparentColor;
    tool.fillRect(0 ,0 , canvas.width , canvas.height);
    let imgURL = canvas.toDataURL();
    // let img = document.createElement('img');
    // img.src = imgURL;
    if ( db ){
        let imageID = uid();
        let dbTransaction = db.transaction("image","readwrite");
        let imageStore = dbTransaction.objectStore("image");
        let imageEntry = {
            id:`img-${imageID}`,
            url:imgURL,
        }
        let addRequest = imageStore.add(imageEntry);
        addRequest.onsuccess = () =>{
            console.log("image added successfully");
        }
    }
    // document.body.append(img);
    setTimeout(()=>{
        captureBtn.classList.remove('scale-capture');
    },510);
});

recordBtn.addEventListener("click",()=>{
    shouldRecord = !shouldRecord;
    if(shouldRecord){
        recordBtn.classList.add("scale-record");
        //start recording
        recorder.start();
        //start timer
        startTimer();
    }else{
        recordBtn.classList.remove("scale-record");
        //stop recording
        recorder.stop();
        //stop timer
        stopTimer();
    }
})

let timer = document.querySelector('.timer');
let timerID;
let counter = 0;
function startTimer(){
    timer.style.display = 'block';
    counter =  0;
    function displayTimer(){
        let totalSeconds = counter;
        let hours = Number.parseInt(totalSeconds/3600);
        totalSeconds = totalSeconds%3600;
        let minutes = Number.parseInt(totalSeconds/60);
        totalSeconds = totalSeconds%60;
        let seconds = totalSeconds;
        hours = hours<10?`0${hours}`:`${hours}`
        minutes = minutes<10?`0${minutes}`:`${minutes}`
        seconds = seconds<10?`0${seconds}`:`${seconds}`
        timer.innerText = `${hours}:${minutes}:${seconds}`
        counter++;
    }
    timerID = setInterval(displayTimer , 1000);
    counter = 0;
}

function stopTimer(){
    clearInterval(timerID)
    timer.innerText= "00:00:00";
    timer.style.display = 'none';
}

let filterLayer = document.querySelector(".filter-layer");
let allFilters = document.querySelectorAll(".filter");

allFilters.forEach((filterElem)=>{
    filterElem.addEventListener("click",()=>{
        transparentColor = getComputedStyle(filterElem).getPropertyValue('background-color');
        filterLayer.style.backgroundColor = transparentColor;
    })
})
