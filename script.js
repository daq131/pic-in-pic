const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//prompt to select media stream, pass the video element, the play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error here
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start pic in pic
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});

//on Load
selectMediaStream();
