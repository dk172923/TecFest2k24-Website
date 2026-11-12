// Mobile navigation menu
const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
  menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  });
}

// Countdown to the event (only on pages that have the countdown)
const EVENT_DATE = new Date("2024-03-26T09:00:00+05:30");
const countdown = document.getElementById("countdown");

if (countdown) {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const endedMessage = document.getElementById("countdown-ended");
  const registerBtn = document.getElementById("register-btn");
  const pad = (n) => String(n).padStart(2, "0");
  let timer;

  const updateCountdown = () => {
    const diff = EVENT_DATE - new Date();

    if (diff <= 0) {
      countdown.hidden = true;
      if (endedMessage) endedMessage.hidden = false;
      if (registerBtn) registerBtn.hidden = true;
      clearInterval(timer);
      return;
    }

    days.textContent = Math.floor(diff / 86400000);
    hours.textContent = pad(Math.floor(diff / 3600000) % 24);
    minutes.textContent = pad(Math.floor(diff / 60000) % 60);
    seconds.textContent = pad(Math.floor(diff / 1000) % 60);
  };

  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
}
