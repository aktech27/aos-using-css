window.addEventListener("scroll", () => {
  let elements = document.querySelectorAll(".aos");
  let appearPoint = 50; //tweak this to make element appear sooner
  elements.forEach((element) => {
    let positionFromTop = element.getBoundingClientRect().top;
    if (positionFromTop < window.innerHeight - appearPoint) element.classList.add("appeared");
    else element.classList.remove("appeared"); //remove else if AOS should appear only once
  });
});
