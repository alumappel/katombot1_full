

function findFace() {
    let arr = []
    let counter = 0
    let video = document.getElementById("videoFeed");

    webgazer.setRegression('ridge').setTracker('clmtrackr').setGazeListener((data, clock) => {
        if (!clock || !data) return;
        webgazer.setVideoElementCanvas(video);
        if (clock.toPrecision(1) % 100 === 0) {
            arr.push({ x: data.x, y: data.y })
            counter++;
            console.log(counter)
        }

        if (counter === 50) {
            console.log(arr)
            arr = [];
            counter = 0;
        }
    }).begin()
    
}




//הפעלת המצלמה
function startVideo(srcVid, srcAud) {
    //בקשה לשימוש במצלמה
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio:true }).then(function (stream) {
            let video = document.getElementById(srcVid);
            let audio = document.getElementById(srcAud);
             
            if ("srcObject" in video) {
                video.srcObject = stream;
                window.localStream = stream;

            } else {
                video.src = window.URL.createObjectURL(stream);
                window.localStream = stream;

            //    audio.src = window.URL.createObjectURL(stream);
            }
            
            //הפעלה
            video.onloadedmetadata = function (e) {
                video.play();
            };
            //סיבוב
            video.style.webkitTransform = "scaleX(-1)";
            video.style.transform = "scaleX(-1)";
        });

    }
    
}
//סיום פרזנטציה
function endVideo(src) {
    let video = document.getElementById(src);
    video.pause();

    localStream.getVideoTracks()[0].stop();
    video.src = '';

    localStream.getAudioTracks()[0].stop();


}

//פונקציה לבחירת תמונה ספציפית
function getFrame(src, dest, dotNetHelper) {
    let video = document.getElementById(src);
    let canvas = document.getElementById(dest);
    canvas.getContext('2d').drawImage(video, 0, 0, 320, 240);
    let dataUrl = canvas.toDataURL("image/jpeg");
    dotNetHelper.invokeMethodAsync('ProcessImage', dataUrl);
}

