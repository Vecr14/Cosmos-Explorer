document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /*==================================================
                    ESTRELLAS
    ==================================================*/

  const stars = document.getElementById("stars");

  function crearEstrellas() {
    if (!stars) return;

    for (let i = 0; i < 400; i++) {
      const estrella = document.createElement("div");

      estrella.classList.add("star");

      estrella.style.left = Math.random() * 100 + "%";
      estrella.style.top = Math.random() * 100 + "%";

      const size = Math.random() * 3 + 1;

      estrella.style.width = size + "px";
      estrella.style.height = size + "px";

      estrella.style.animationDuration = Math.random() * 4 + 2 + "s";

      stars.appendChild(estrella);
    }
  }

  crearEstrellas();

  /*==================================================
                    METEORITOS
    ==================================================*/

  function crearMeteorito() {
    const meteor = document.createElement("div");

    meteor.classList.add("meteor");

    meteor.style.left = Math.random() * window.innerWidth + "px";
    meteor.style.top = "-80px";

    document.body.appendChild(meteor);

    setTimeout(() => {
      meteor.remove();
    }, 3000);
  }

  setInterval(crearMeteorito, 6000);

  /*==================================================
                    NAVBAR
    ==================================================*/

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  });
});

/*==================================================
              BOTON SUBIR
  ==================================================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
