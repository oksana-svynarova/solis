let styleMode = localStorage.getItem("styleMode");
const styleToggle = document.querySelector(".switch-mode");

const enableLightMode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("styleMode", "light");
}

const disableLightMode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("styleMode", null);
}

styleToggle.addEventListener("click", () => {
  styleMode = localStorage.getItem("styleMode");
  if(styleMode !== "light") {
    enableLightMode ();
  } else {
    disableLightMode ();
  }
});

if(styleMode === "light") {
  enableLightMode ();
}