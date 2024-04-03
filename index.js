const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

document.getElementById("buscarBtn").addEventListener("click", function() {
  const input = document.getElementById("pizzaId");
  const id = parseInt(input.value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(id) || id < 1 || id > 5) {
    resultadoDiv.innerHTML = "<p class='error'>Ingrese un número válido entre 1 y 5.</p>";
  } else {
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === id);

    if (pizzaEncontrada) {
      localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));

      resultadoDiv.innerHTML = `
        <div class="card">
          <h3>${pizzaEncontrada.nombre}</h3>
          <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
          <p>Precio: $${pizzaEncontrada.precio}</p>
        </div>
      `;
    } else {
      resultadoDiv.innerHTML = "<p class='error'>No se encontró ninguna pizza con ese ID.</p>";
    }
  }
});

window.addEventListener("load", function() {
  const resultadoDiv = document.getElementById("resultado");
  const ultimaPizzaGuardada = localStorage.getItem("ultimaPizza");

  if (ultimaPizzaGuardada) {
    const ultimaPizza = JSON.parse(ultimaPizzaGuardada);

    resultadoDiv.innerHTML = `
      <div class="card">
        <h3>${ultimaPizza.nombre}</h3>
        <img src="${ultimaPizza.imagen}" alt="${ultimaPizza.nombre}">
        <p>Precio: $${ultimaPizza.precio}</p>
      </div>
    `;
  }
});