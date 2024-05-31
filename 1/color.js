window.addEventListener("load", function () {
  let intervalId;

	let currentColor;
  let randomColor = getRandomColor();

  function getRandomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  }

  function changeButtonColor() {
    currentColor = getRandomColor();
    document.getElementById("random").style.backgroundColor = currentColor;
  }

  function getDefaultColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  intervalId = setInterval(changeButtonColor, 1000);

  document.getElementById("random").addEventListener("click", function () {
    body.style.backgroundColor = currentColor;
    clearInterval(intervalId);
  });
});

const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}
