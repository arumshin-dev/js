const clockTitle = document.querySelector(".js-clock");

function updateCountdown() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmas = new Date(currentYear, 11, 25);

  if (today > christmas) {
    christmas.setFullYear(currentYear + 1);
  }

  const diffTime = christmas - today;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  clockTitle.textContent = `${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
