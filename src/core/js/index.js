import { name } from "./dom/dom";
import { email } from "./dom/dom";
import { message } from "./dom/dom";
import { phone } from "./dom/dom";
import { sendMessage } from "./dom/dom";

import useFetch from "./hooks/axiosServices.js";

import Swal from "sweetalert2";

sendMessage.addEventListener("click", () => {
  if (
    name.value === "" ||
    email.value === "" ||
    message.value === "" ||
    phone.value === ""
  ) {
    Swal.fire("Tüm alanları Doldurunuz");
  } else {
    let payload = {
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value,
    };
    console.log(payload);
    useFetch("userMessage", "POST", payload)
      .then((res) => {
        Swal.fire("Mesajınız başarı ile iletildi");
      })
      .catch((err) => {
        Swal.fire("Mesajınız iletilemedi");
      });
  }
});
