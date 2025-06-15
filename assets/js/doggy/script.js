const dog = document.getElementById("dog");
const counter = document.getElementById("counter");

    async function petDog() {
      const response = await fetch("https://galgyula.hu/pet", {
        method: "GET"
      });
      const data = await response.json();
      counter.textContent = `Pets: ${data.count}`;
    }

    dog.addEventListener("click", petDog);
petDog()