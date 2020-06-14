function solve() {

  const allLinks = document.querySelectorAll("a");
  const visits = document.querySelectorAll("p");

  for (let i = 0; i < allLinks.length; i++) {
    let currentLink = allLinks[i];
    let currentP = visits[i];

    currentLink.addEventListener("click", function () {
      let count = Number(currentP.innerHTML.split(" ")[1]);
      currentP.innerHTML = `visited ${++count} times`;
    });
  }
}