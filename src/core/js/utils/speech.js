import Swal from "sweetalert2";
class Speech {
  BadWords(text) {
    console.log(text);

    text.includes("*") && Swal.fire("Sövme lan... Terbiyesiz");
  }
}

const speech = new Speech();

export default speech;
