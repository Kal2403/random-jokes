let jokesContainer = [
    '¿Qué le dice un semáforo a otro?\n¡No mires que me estoy cambiando!',
    '¿Cuál es el colmo de un ladrón?\nLlamarse Esteban Dido.',
    '¿Qué le dice el 0 al 8?\nMe gusta tu cinturón.',
    'Qué le dice un pez a otro?\n¡Nada!',
    'Mamá, en el colegio me llaman distraído.\nJuanito, tú vives en la casa de enfrente.',
    '¿Qué le dice un semáforo a otro?\n¡No mires que me estoy cambiando!',
    '¿Por qué llora el libro de Matemáticas?\nPorque tiene muchos problemas.',
    '¿Qué le dice un árbol a otro?\n¡Qué pasa, tronco!',
    'En el parque, una madre le dice a sus hijos:\nNiños, no juguéis en la tierra, Entonces se fueron a jugar a Marte.',
    '¿Cuál es el animal que más dientes tiene?\nEl Ratoncito Pérez.',
]

const showJokes = document.getElementById('jokes-display');
const btn = document.getElementById('btn');

const changeJoke = () => {
  const randomIndex =  Math.floor(Math.random() * jokesContainer.length);
  const randomJoke = jokesContainer[randomIndex];
  showJokes.textContent = randomJoke;
}

btn.addEventListener('click', changeJoke);