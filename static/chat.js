const sendMessage = async () => {
  const input = document.querySelector("input");
  const msg = input.value;
  appendMsg(msg, true);

  const url = "/chat";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      question: `${msg}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseText = await response.text();
  appendMsg(responseText, false);
  input.value = "";
};

function appendMsg(msg, sentMsg) {
  const element = createMsgElem(msg, sentMsg);
  const window = document.querySelector(".messages");
  window.append(element);
  window.scrollTop = window.scrollHeight;
}

function createMsgElem(message, sentMsg) {
  let template = document.createElement("template");
  template.innerHTML = `<div class="${
    sentMsg ? "sent" : "received"
  }">${message}</div>`;
  return template.content;
}
