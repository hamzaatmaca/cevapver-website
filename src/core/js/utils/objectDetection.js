import { video } from "../dom/dom.js";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import Swal from "sweetalert2";

const videoAnalyze = (predictions) => {
  predictions.map((param) => {
    console.log(param.class);
    if (param.class !== "person") {
      Swal.fire("Yabancı bir cisim gösterdiniz");
      var canvas = document.getElementById("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 140, 0, video.videoWidth, video.videoHeight);
      var blob = canvas.toBlob(function (blob) {
        var anchor = document.createElement("a");
        anchor.style.display = "none";
        // document.body.appendChild(anchor);
        var url = window.URL.createObjectURL(blob);
        anchor.href = url;
        anchor.download = "capture.png";
        anchor.click();
        // window.setTimeout(() => {
        //   window.URL.revokeObjectURL(url);
        //   document.body.removeChild(anchor);
        // }, 100);
      }, "image/png");
    }
  });
};

const runCoCo = (video) => {
  cocoSsd.load().then((model) => {
    // detect objects in the image.
    model.detect(video).then((predictions) => {
      videoAnalyze(predictions);
    });
  });
};

const runVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
      setInterval(() => {
        runCoCo(video);
      }, 3000);
    })
    .catch(function (err) {
      console.log("Hata: " + err);
    });
};

export default runVideo;
