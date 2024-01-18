let i = 1; // Initialize a counter variable

setInterval(function () {
  const show = document.querySelector("span[data-show]");
  const next = show.nextElementSibling || document.querySelector("span:first-child");
  const up = document.querySelector("span[data-up]");

  if (up) {
    up.removeAttribute("data-up");
  }

  show.removeAttribute("data-show");
  show.setAttribute("data-up", "");

  next.setAttribute("data-show", "");

  // Increment the counter and reset it to 1 when it reaches 10
  i = (i % 10) + 1;

  // Optionally, you can log the counter for debugging purposes
  console.log("Counter:", i);

}, 8000);