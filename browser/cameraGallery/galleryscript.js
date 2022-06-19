console.log("running");
let div = document.createElement('div');
div.setAttribute("class","load");
div.style.position = "absolute";
div.style.top = "50vh";
div.style.left = "50vw";
div.style.borderRadius = "50%";
div.style.height = "2rem";
div.style.width = "2rem";
div.style.backgroundColor = "#BBB"
div.style.opacity = "0.7";
div.style.zIndex = "4";
document.body.appendChild(div);
let backBtn = document.querySelector(".gallery");
backBtn.addEventListener("click", () => {
  location.assign("./index.html");
});
setTimeout(() => {
  document.body.removeChild(div);
  if (db) {
    console.log("runnin");
    let imageDBTransaction = db.transaction("image", "readonly");
    let imageStore = imageDBTransaction.objectStore("image");
    let imageRequest = imageStore.getAll();
    imageRequest.onsuccess = () => {
      let imageResult = imageRequest.result;
      let galleryCont = document.querySelector(".container");
      imageResult.forEach((imageObj) => {
        let imageElem = document.createElement("div");
        imageElem.setAttribute("class", "images media-cont");
        imageElem.setAttribute("id", imageObj.id);
        let url = imageObj.url;
        imageElem.innerHTML = `
        <img src="${url}">
        <div class="delete">DELETE</div>
        <div class="download">DOWNLOAD</div>
        `;
        galleryCont.appendChild(imageElem);
        console.log(imageElem);
        let deleteBtn = document.querySelectorAll(".delete");
        deleteBtn.forEach((deleteBtns)=>{
          deleteBtns.addEventListener("click", deleteListener);
        })
        

        let downloadBtn = document.querySelectorAll(".download");
        downloadBtn.forEach((downloadBtn)=>{
          downloadBtn.addEventListener("click", downloadListener);          
        })
      });
    };
    let videoDBTransaction = db.transaction("video", "readonly");
    let videoStore = videoDBTransaction.objectStore("video");
    let videoRequest = videoStore.getAll();
    videoRequest.onsuccess = () => {
      let videoResult = videoRequest.result;
      let galleryCont = document.querySelector(".container");
      videoResult.forEach((videoObj) => {
        let videoElem = document.createElement("div");
        videoElem.setAttribute("class", "media-cont");
        videoElem.setAttribute("id", videoObj.id);
        let url = URL.createObjectURL(videoObj.blobData);
        videoElem.innerHTML = `
        <video autoplay loop src="${url}"></video>
        <div class="delete">DELETE</div>
        <div class="download">DOWNLOAD</div>
        `;
        galleryCont.appendChild(videoElem);

        let deleteBtn = document.querySelectorAll(".delete");
        deleteBtn.forEach((deleteBtns)=>{
          deleteBtns.addEventListener("click", deleteListener);
        })
        

        let downloadBtn = document.querySelectorAll(".download");
        downloadBtn.forEach((downloadBtn)=>{
          downloadBtn.addEventListener("click", downloadListener);          
        })

      });
    };
  }
}, 5000);


function deleteListener(ev) {
  console.log("delete clicked");
    let id = ev.target.parentElement.getAttribute("id");
    let type = id.split('-')[0];
    let transaction;
    let store;
    let storeName;
    if(type == "img"){
      storeName="image"
    }else{
      storeName = "video"
    }
    transaction = db.transaction(storeName,"readwrite")
    store = transaction.objectStore(storeName);
    store.delete(id);
    ev.target.parentElement.remove();
}

function downloadListener(ev) {
  let id = ev.target.parentElement.getAttribute("id");
  let type = id.split("-")[0];
  let storeName,extension;
  if(type=="img"){
    storeName = "image";
    extension = "png";
  }else{
    storeName = "video";
    extension = "mp4";
  }
  let transaction = db.transaction(storeName,"readonly");
  let store = transaction.objectStore(storeName);
  let request = store.get(id);
  request.onsuccess = () =>{
    let result = request.result;
    let url = result.url;
    let anchorTag = document.createElement('a');
    anchorTag.href = url;
    anchorTag.download = `${storeName}.${extension}`;
    anchorTag.click();
  }
}
