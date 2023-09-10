const tableRows = document.querySelectorAll(".lc-table table tr");
tableRows.forEach(row => {
  const btn = row.querySelector(".lc-table__btn");

  if (btn) {
    btn.addEventListener("click", () => {
      row.classList.toggle("_open");
    });
  }
});