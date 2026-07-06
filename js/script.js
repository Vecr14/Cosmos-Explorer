document.addEventListener("DOMContentLoaded", () => {
  /*==================================================
              COSMOS EXPLORER
              SCRIPT.JS
  ==================================================*/

  "use strict";

  /*VARIABLES*/

  const body = document.body;

  const darkBtn = document.getElementById("darkModeBtn");

  const btnTop = document.getElementById("btnTop");

  const buscador = document.getElementById("buscarPlaneta");

  const tarjetas = document.querySelectorAll(".planeta-card");

  const curiosidad = document.getElementById("curiosidad");

  /*Estrellas y meteoritos*/

  window.addEventListener("DOMContentLoaded", () => {
    crearEstrellas();
  });

  /*BOTON SUBIR*/

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

  /*BUSCADOR PLANETAS*/

  buscador.addEventListener("keyup", () => {
    let texto = buscador.value.toLowerCase();

    tarjetas.forEach((card) => {
      let nombre = card.innerText.toLowerCase();

      if (nombre.includes(texto)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });

  /*QUIZ ESPACIAL*/

  const preguntas = [
    {
      pregunta: "¿Cuál es el planeta más grande del Sistema Solar?",
      opciones: ["Júpiter", "Marte", "Venus", "Mercurio"],
      correcta: "Júpiter",
    },
    {
      pregunta: "¿Qué planeta es conocido como el planeta rojo?",
      opciones: ["Marte", "Venus", "Neptuno", "Urano"],
      correcta: "Marte",
    },
    {
      pregunta: "¿Cuál es el planeta más cercano al Sol?",
      opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
      correcta: "Mercurio",
    },
    {
      pregunta: "¿Qué planeta posee los anillos más famosos?",
      opciones: ["Saturno", "Júpiter", "Urano", "Neptuno"],
      correcta: "Saturno",
    },
    {
      pregunta: "¿Cuál es el planeta donde vivimos?",
      opciones: ["Tierra", "Marte", "Venus", "Mercurio"],
      correcta: "Tierra",
    },
  ];

  const pregunta = document.getElementById("pregunta");
  const botones = document.querySelectorAll(".respuesta");
  const puntaje = document.getElementById("puntaje");

  let indicePregunta = 0;
  let puntos = 0;

  function cargarPregunta() {
    pregunta.textContent = preguntas[indicePregunta].pregunta;

    botones.forEach((boton, i) => {
      boton.textContent = preguntas[indicePregunta].opciones[i];

      boton.classList.remove("btn-success", "btn-danger");
      boton.classList.add("btn-outline-primary");
    });
  }

  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      const respuesta = this.textContent;

      if (respuesta === preguntas[indicePregunta].correcta) {
        puntos++;

        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-success");
      } else {
        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-danger");
      }

      puntaje.textContent = "Puntaje: " + puntos;

      setTimeout(() => {
        indicePregunta++;

        if (indicePregunta >= preguntas.length) {
          pregunta.textContent = "🎉 ¡Quiz terminado!";

          botones.forEach((b) => (b.disabled = true));

          return;
        }

        cargarPregunta();
      }, 1000);
    });
  });

  cargarPregunta();

  /*CURIOSIDADES*/

  const curiosidades = [
    "☀ La luz del Sol tarda aproximadamente 8 minutos y 19 segundos en llegar a la Tierra.",

    "🪐 Júpiter tiene más de 95 lunas confirmadas.",

    "🌍 La Tierra gira a unos 1670 km/h en el ecuador.",

    "🌕 La Luna se aleja de la Tierra unos 3.8 centímetros cada año.",

    "🚀 Voyager 1 es el objeto construido por el ser humano más lejano de la Tierra.",

    "🌌 La Vía Láctea contiene cientos de miles de millones de estrellas.",

    "🛰 El telescopio James Webb observa el universo en luz infrarroja.",

    "☄ Un año luz equivale a aproximadamente 9.46 billones de kilómetros.",

    "🪐 Saturno podría flotar en un océano gigantesco debido a su baja densidad.",
  ];

  let indice = 0;

  setInterval(() => {
    indice++;

    if (indice >= curiosidades.length) {
      indice = 0;
    }

    curiosidad.textContent = curiosidades[indice];
  }, 6000);

  /*ALERTA BIENVENIDA*/

  window.addEventListener("load", () => {
    setTimeout(() => {
      alert("🚀 Bienvenido a Cosmos Explorer");
    }, 1200);
  });

  /*ESTRELLAS*/

  const stars = document.getElementById("stars");

  function crearEstrellas() {
    for (let i = 0; i < 400; i++) {
      const estrella = document.createElement("div");

      estrella.classList.add("star");

      estrella.style.left = Math.random() * 100 + "%";

      estrella.style.top = Math.random() * 100 + "%";

      let size = Math.random() * 3 + 1;

      estrella.style.width = size + "px";

      estrella.style.height = size + "px";

      estrella.style.animationDuration = Math.random() * 4 + 2 + "s";

      stars.appendChild(estrella);
    }
  }

  crearEstrellas();

  /*METEORITOS*/

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

  /*DISTANCIA VOYAGER*/

  /*
  
  Distancia aproximada
  
  24 900 millones km
  
  */

  const voyager = document.getElementById("voyagerDistance");

  let distancia = 24900000000;

  const velocidad = 17;

  /*
  
  17 km/s
  
  */

  function actualizarVoyager() {
    distancia += velocidad;

    voyager.innerHTML = distancia.toLocaleString() + " km";
  }

  setInterval(actualizarVoyager, 1000);

  /*TIEMPO LUZ*/

  const destino = document.getElementById("destinoActual");

  const tiempo = document.getElementById("tiempoLuz");

  const distanciaTexto = document.getElementById("distanciaActual");

  const botonViaje = document.getElementById("iniciarViaje");

  const foton = document.getElementById("foton");

  const destinos = [
    {
      nombre: "Mercurio",

      tiempo: "3.2 min",

      distancia: "57.9 millones km",
    },

    {
      nombre: "Venus",

      tiempo: "6 min",

      distancia: "108 millones km",
    },

    {
      nombre: "Tierra",

      tiempo: "8 min 19 s",

      distancia: "149.6 millones km",
    },

    {
      nombre: "Marte",

      tiempo: "12.7 min",

      distancia: "228 millones km",
    },

    {
      nombre: "Júpiter",

      tiempo: "43 min",

      distancia: "778 millones km",
    },

    {
      nombre: "Saturno",

      tiempo: "1 h 20 min",

      distancia: "1 430 millones km",
    },

    {
      nombre: "Urano",

      tiempo: "2 h 40 min",

      distancia: "2 870 millones km",
    },

    {
      nombre: "Neptuno",

      tiempo: "4 h 10 min",

      distancia: "4 500 millones km",
    },
  ];

  botonViaje.addEventListener("click", () => {
    let indice = 0;

    foton.style.left = "0px";

    let recorrido = setInterval(() => {
      if (indice >= destinos.length) {
        clearInterval(recorrido);

        return;
      }

      destino.innerHTML = destinos[indice].nombre;

      tiempo.innerHTML = destinos[indice].tiempo;

      distanciaTexto.innerHTML = destinos[indice].distancia;

      foton.style.left = indice * 13 + "%";

      indice++;
    }, 1200);
  });

  /*PANEL DE CONTROL Voyager 1*/

  const panel = {
    señal: document.getElementById("senal"),

    velocidad: document.getElementById("velocidad"),

    potencia: document.getElementById("potencia"),

    temperatura: document.getElementById("temperatura"),

    estado: document.getElementById("estado"),

    direccion: document.getElementById("direccion"),
  };

  function actualizarPanel() {
    // Señal simulada

    let señal = Math.floor(Math.random() * 4) + 97;

    panel.señal.innerHTML = señal + "%";

    // Velocidad Voyager

    panel.velocidad.innerHTML = "17 km/s";

    // Potencia RTG

    let potencia = (58 + Math.random() * 2).toFixed(1);

    panel.potencia.innerHTML = potencia + " %";

    // Temperatura

    let temperatura = (-79 + Math.random() * 4).toFixed(1);

    panel.temperatura.innerHTML = temperatura + " °C";

    // Estado

    panel.estado.innerHTML = "🟢 Operativa";

    // Dirección

    panel.direccion.innerHTML = "Espacio Interestelar";
  }

  actualizarPanel();

  setInterval(actualizarPanel, 2500);

  /*¿CUÁNTO PESARÍAS EN OTRO PLANETA?*/

  const inputPeso = document.getElementById("peso");

  const planetaPeso = document.getElementById("planetaPeso");

  const botonCalcular = document.getElementById("calcularPeso");

  const resultadoPeso = document.getElementById("resultadoPeso");

  /* Gravedad relativa respecto a la Tierra */

  const gravedad = {
    Mercurio: 0.38,

    Venus: 0.91,

    Tierra: 1,

    Marte: 0.38,

    Júpiter: 2.34,

    Saturno: 1.06,

    Urano: 0.92,

    Neptuno: 1.19,
  };

  botonCalcular.addEventListener("click", () => {
    const peso = parseFloat(inputPeso.value);

    const planeta = planetaPeso.value;

    if (isNaN(peso) || peso <= 0) {
      resultadoPeso.innerHTML = "⚠ Introduce un peso válido.";

      return;
    }

    const pesoFinal = peso * gravedad[planeta];

    resultadoPeso.innerHTML = `
        Si en la <strong>Tierra</strong> pesas
        <strong>${peso.toFixed(1)} kg</strong>,
        en <strong>${planeta}</strong> pesarías
        <span class="text-warning">
            ${pesoFinal.toFixed(2)} kg
        </span>.
    `;
  });

  /*MODAL PLANETAS*/

  const planetas = {
    Mercurio: {
      titulo: "☿ Mercurio",
      imagen: "img/Modales/mercurio.jpg",
      masa: "3.30 ×10²³ kg",
      gravedad: "3.7 m/s²",
      dia: "58.6 días",
      anio: "88 días",
      lunas: "0",
      temperatura: "-180°C a 430°C",
      descripcion: `
      <p>
        La imagen muestra una de las regiones más antiguas de Mercurio, donde pueden apreciarse miles de cráteres formados por impactos de meteoritos durante miles de millones de años. Al no poseer una atmósfera densa, casi todas estas huellas permanecen intactas.
      </p>

      <p>
        Mercurio posee un enorme núcleo de hierro que representa aproximadamente el 85 % de su radio, una proporción mucho mayor que la de cualquier otro planeta del Sistema Solar. 
        Este núcleo genera un campo magnético débil, pero suficiente para interactuar con el viento solar.
      </p>

      <p>
        Aunque es el planeta más rápido alrededor del Sol y completa una órbita en solo 88 días terrestres, su rotación es muy lenta. 
        Como resultado, un día solar en Mercurio dura aproximadamente 176 días terrestres, por lo que un amanecer puede tardar meses en repetirse.

      </p>

      <p>
        La superficie de Mercurio presenta grandes llanuras volcánicas y enormes escarpes de cientos de kilómetros de longitud. 
        Estas formaciones se originaron cuando el planeta se enfrió y contrajo lentamente a lo largo de miles de millones de años.

      </p>

      <p>
      Las misiones Mariner 10, MESSENGER y la actual BepiColombo han permitido descubrir depósitos de hielo de agua ocultos en cráteres cercanos a los polos, donde la luz del Sol nunca llega directamente. 
      Estos hallazgos han cambiado la forma en que los científicos entienden la evolución del planeta.
      </p>
    `,
      misiones: "Mariner 10, MESSENGER, BepiColombo",
    },

    Venus: {
      titulo: "♀ Venus",
      imagen: "img/Modales/venus.jpeg",
      masa: "4.87 ×10²⁴ kg",
      gravedad: "8.87 m/s²",
      dia: "243 días",
      anio: "225 días",
      lunas: "0",
      temperatura: "464°C",
      descripcion: `
      <p>
        Aunque la imagen muestra una representación artística de Venus, su superficie permanece completamente oculta por una gruesa capa de nubes de ácido sulfúrico. Por ello, la mayor parte de su relieve ha sido estudiado mediante radares espaciales.
      </p>

      <p>
        La superficie de Venus permanece oculta bajo una espesa capa de nubes de ácido sulfúrico que impide observar directamente el planeta con telescopios ópticos. Gracias al uso de radares desde sondas espaciales, los científicos han podido elaborar mapas detallados de su relieve.

      </p>

      <p>
        El planeta presenta enormes llanuras volcánicas, montañas y miles de volcanes, muchos de los cuales podrían seguir activos en la actualidad. Estas características indican que Venus experimentó una intensa actividad geológica a lo largo de su historia.

      </p>

      <p>
        La presión atmosférica en la superficie es aproximadamente 90 veces mayor que la de la Tierra, equivalente a la que existiría a casi un kilómetro de profundidad en los océanos terrestres. Estas condiciones hacen extremadamente difícil el funcionamiento prolongado de las sondas espaciales.

      </p>

      <p>
        Diversas misiones, como las soviéticas Venera, la estadounidense Magellan y la japonesa Akatsuki, han permitido estudiar su atmósfera, su relieve y su clima. En los próximos años, nuevas misiones buscarán comprender cómo un planeta tan parecido a la Tierra evolucionó de forma tan diferente.
      </p>
    `,
      misiones: "Venera, Magellan, Akatsuki",
    },

    Tierra: {
      titulo: "🌍 Tierra",
      imagen: "img/Modales/tierra.jpg",
      masa: "5.97 ×10²⁴ kg",
      gravedad: "9.81 m/s²",
      dia: "24 horas",
      anio: "365 días",
      lunas: "1",
      temperatura: "15°C",
      descripcion: `
      <p>
        La fotografía muestra nuestro planeta visto desde el espacio, donde destacan los océanos, continentes y las nubes que cubren gran parte de la atmósfera. La Tierra es el único planeta donde se ha confirmado la existencia de vida.
      </p>

      <p>
        La Tierra es el único planeta donde se ha confirmado la existencia de
        vida. Su combinación de agua líquida, atmósfera rica en oxígeno y una
        temperatura adecuada hacen posible una enorme diversidad de ecosistemas.
      </p>

      <p>
        Aproximadamente el 71 % de su superficie está cubierta por océanos, que
        desempeñan un papel fundamental en la regulación del clima y el ciclo del
        agua.
      </p>

      <p>
        Su campo magnético protege al planeta del viento solar y la radiación
        espacial, permitiendo el desarrollo y la conservación de la vida.
      </p>
    `,
      misiones: "ISS, Artemis, Landsat",
    },

    Marte: {
      titulo: "🔴 Marte",
      imagen: "img/Modales/marte-superficie.webp",
      masa: "6.42 ×10²³ kg",
      gravedad: "3.71 m/s²",
      dia: "24 h 37 min",
      anio: "687 días",
      lunas: "2",
      temperatura: "-63°C",
      descripcion: `
      <p>
        La imagen corresponde a una vista real de la superficie marciana, donde predominan los tonos rojizos producidos por el óxido de hierro presente en el suelo.
      </p>

      <p>
        Marte es conocido como el planeta rojo debido al óxido de hierro que
        cubre gran parte de su superficie.
      </p>

      <p>
        Alberga el Olympus Mons, el volcán más grande conocido del Sistema Solar,
        y el inmenso cañón Valles Marineris, una de las estructuras geológicas
        más impresionantes descubiertas.
      </p>

      <p>
        Diversas misiones robóticas han encontrado evidencias de que hace miles
        de millones de años existieron ríos, lagos y posiblemente océanos en su
        superficie.
      </p>
    `,
      misiones: "Perseverance, Curiosity, Viking",
    },

    Jupiter: {
      titulo: "🟠 Júpiter",
      imagen: "img/Modales/jupiter-aurora.webp",
      masa: "1.898 ×10²⁷ kg",
      gravedad: "24.79 m/s²",
      dia: "9 h 56 min",
      anio: "11.86 años",
      lunas: "95",
      temperatura: "-145°C",
      descripcion: `
      <p>
        La imagen muestra una espectacular aurora sobre los polos de Júpiter. Estas auroras son cientos de veces más energéticas que las terrestres y son producidas por su enorme campo magnético.
      </p>

      <p>
        El planeta está compuesto principalmente por hidrógeno y helio, por lo que no posee una superficie sólida donde una nave pueda aterrizar.
      </p>

      <p>
        Su atmósfera contiene gigantescas bandas de nubes y la famosa Gran Mancha Roja, una tormenta que lleva activa desde hace siglos.
      </p>

      <p>
        La misión Juno continúa investigando el interior del planeta, su atmósfera y su extraordinario campo magnético.
      </p>
    `,
      misiones: "Pioneer, Voyager, Galileo, Juno",
    },

    Saturno: {
      titulo: "🪐 Saturno",
      imagen: "img/Modales/saturnoreal.webp",
      masa: "5.683 ×10²⁶ kg",
      gravedad: "10.44 m/s²",
      dia: "10 h 42 min",
      anio: "29.5 años",
      lunas: "146",
      temperatura: "-178°C",
      descripcion: `
      <p>
        La imagen muestra los impresionantes anillos de Saturno con gran detalle. Aunque parecen sólidos desde la distancia, están formados por miles de millones de fragmentos de hielo, polvo y roca.
      </p>

      <p>
        Estas partículas varían desde diminutos granos de polvo hasta enormes bloques de hielo de varios metros de diámetro, todos orbitando alrededor del planeta.
      </p>

      <p>
        Saturno alberga más de un centenar de lunas. Entre ellas destacan Titán y Encélado, consideradas dos de los mundos más interesantes para la búsqueda de vida fuera de la Tierra.
      </p>

      <p>
        La misión Cassini-Huygens revolucionó el conocimiento del planeta durante más de trece años de observaciones continuas.
      </p>
    `,
      misiones: "Pioneer 11, Voyager, Cassini-Huygens",
    },

    Urano: {
      titulo: "🟢 Urano",
      imagen: "img/Modales/urano.jpg",
      masa: "8.681 ×10²⁵ kg",
      gravedad: "8.69 m/s²",
      dia: "17 horas",
      anio: "84 años",
      lunas: "28",
      temperatura: "-224°C",
      descripcion: `
      <p>
        La imagen muestra el característico color azul verdoso de Urano, producido por el metano presente en su atmósfera, que absorbe parte de la luz roja proveniente del Sol junto con sus anillos casi invisibles ya que son muy oscuros y delgados.
      </p>

      <p>
        Urano gira prácticamente acostado debido a la inclinación extrema de su eje, una característica única entre los grandes planetas del Sistema Solar.
      </p>

      <p>
        Su interior contiene enormes cantidades de agua, amoníaco y metano sometidos a altas presiones, razón por la cual pertenece al grupo de los gigantes helados.
      </p>

      <p>
        Hasta ahora, Voyager 2 ha sido la única nave espacial que ha explorado este lejano planeta de cerca.
      </p>
    `,
      misiones: "Voyager 2",
    },

    Neptuno: {
      titulo: "🔵 Neptuno",
      imagen: "img/Modales/Neptuno-anillos.jpg",
      masa: "1.024 ×10²⁶ kg",
      gravedad: "11.15 m/s²",
      dia: "16 horas",
      anio: "165 años",
      lunas: "16",
      temperatura: "-214°C",
      descripcion: `
      <p>
        La imagen destaca los delicados anillos de Neptuno, mucho más tenues que los de Saturno y compuestos principalmente por polvo y partículas heladas.
      </p>

      <p>
        Su atmósfera es extremadamente activa y presenta enormes tormentas impulsadas por los vientos más rápidos conocidos del Sistema Solar.
      </p>

      <p>
        Neptuno fue el primer planeta descubierto gracias a cálculos matemáticos antes de ser observado directamente con telescopios, marcando un importante logro para la astronomía.
      </p>

      <p>
        En 1989, la sonda Voyager 2 realizó el único sobrevuelo del planeta, obteniendo imágenes detalladas de sus anillos, lunas y sistemas meteorológicos.
      </p>
    `,
      misiones: "Voyager 2",
    },
  };

  window.abrirModal = function (nombre) {
    const p = planetas[nombre];

    document.getElementById("tituloModal").innerHTML = p.titulo;

    document.getElementById("imagenModal").src = p.imagen;

    document.getElementById("descripcionModal").innerHTML = p.descripcion;

    document.getElementById("misionesModal").innerHTML = p.misiones;

    document.getElementById("listaModal").innerHTML = `
        <li><b>Masa:</b> ${p.masa}</li>
        <li><b>Gravedad:</b> ${p.gravedad}</li>
        <li><b>Día:</b> ${p.dia}</li>
        <li><b>Año:</b> ${p.anio}</li>
        <li><b>Lunas:</b> ${p.lunas}</li>
        <li><b>Temperatura:</b> ${p.temperatura}</li>
    `;

    new bootstrap.Modal(document.getElementById("modalPlaneta")).show();
  };
});

/*Modal Sol*/

function abrirModalSol() {
  const modalAnterior = document.getElementById("modalDinamico");

  if (modalAnterior) {
    modalAnterior.remove();
  }

  const modalHTML = `

    <div class="modal fade" id="modalDinamico" tabindex="-1">

        <div class="modal-dialog modal-lg modal-dialog-centered">

            <div class="modal-content bg-dark text-light">

                <div class="modal-header">

                    <h3>☀ El Sol</h3>

                    <button type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal">
                    </button>

                </div>

                <div class="modal-body">

                    <img src="img/Modales/sol-risa.jpg"
                        class="img-fluid rounded shadow mb-4"
                        alt="El Sol">

                    <ul class="list-group list-group-flush mb-4">

                        <li class="list-group-item bg-dark text-light">
                            <b>Tipo:</b> Estrella enana amarilla (G2V)
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Edad:</b> 4.600 millones de años
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Diámetro:</b> 1 392 700 km
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Masa:</b> 1.989 × 10³⁰ kg
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Temperatura superficial:</b> ≈ 5 500 °C
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Temperatura del núcleo:</b> ≈ 15 millones °C
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Distancia media a la Tierra:</b> 149.6 millones de km
                        </li>

                        <li class="list-group-item bg-dark text-light">
                            <b>Composición:</b> 74% hidrógeno y 24% helio
                        </li>

                    </ul>

                    <p>

                        El Sol es la estrella situada en el centro del Sistema Solar y representa
                        aproximadamente el <b>99.86 % de toda la masa</b> del sistema. Gracias a su enorme
                        gravedad, mantiene en órbita a los ocho planetas, sus lunas, los planetas enanos,
                        asteroides y cometas.

                    </p>

                    <p>

                        Se formó hace unos <b>4 600 millones de años</b> a partir del colapso de una
                        gigantesca nube de gas y polvo interestelar. Actualmente se encuentra en la etapa
                        conocida como <b>secuencia principal</b>, donde produce energía mediante la fusión
                        del hidrógeno.

                    </p>

                    <p>

                        En su núcleo, alrededor de <b>600 millones de toneladas de hidrógeno</b> se
                        transforman en helio cada segundo. Esta reacción libera enormes cantidades de
                        energía que viajan hasta la superficie y finalmente se emiten como luz y calor.

                    </p>

                    <p>

                        La luz solar tarda aproximadamente <b>8 minutos y 19 segundos</b> en recorrer los
                        casi 150 millones de kilómetros que separan al Sol de la Tierra.

                    </p>

                    <p>

                        Además de proporcionar luz y calor, el Sol genera viento solar, manchas solares,
                        llamaradas y eyecciones de masa coronal que pueden influir en las comunicaciones,
                        los satélites y producir impresionantes auroras polares en la Tierra.

                    </p>

                </div>

            </div>

        </div>

    </div>

    `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = new bootstrap.Modal(document.getElementById("modalDinamico"));

  modal.show();

  document
    .getElementById("modalDinamico")
    .addEventListener("hidden.bs.modal", function () {
      this.remove();
    });
}
