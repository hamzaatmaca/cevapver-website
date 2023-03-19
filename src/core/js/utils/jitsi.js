const JITSI = () => {
  const domain = "meet.jit.si";

  const options = {
    roomName: "cevapver",
    width: "100%",
    height: 700,
    parentNode: document.querySelector("#meet"),
    lang: "tr",
  };
  const api = new JitsiMeetExternalAPI(domain, options);

  return api;
};

export default JITSI;
