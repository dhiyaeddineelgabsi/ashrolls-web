function updateStatusBadge() {
  const now = new Date();
  const tunisiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Tunis" }));
  const hour = tunisiaTime.getHours();
  const minute = tunisiaTime.getMinutes();
  const totalMinutes = hour * 60 + minute;
  const isOpen = totalMinutes >= 780 && totalMinutes < 1440;
  const badge = document.getElementById("statusBadge");
  if (!badge) return;
  badge.textContent = isOpen ? "🟢 Ouvert maintenant" : "🔴 Fermé";
  badge.classList.toggle("open", isOpen);
  badge.classList.toggle("closed", !isOpen);
}

document.getElementById("hamburger")?.addEventListener("click", () => {
  document.getElementById("nav")?.classList.toggle("show");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

updateStatusBadge();
setInterval(updateStatusBadge, 60000);
