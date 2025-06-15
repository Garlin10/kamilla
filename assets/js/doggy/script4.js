const dog = document.getElementById("dog");
const counter = document.getElementById("counter");

    async function petDog() {
      const response = await fetch("http://127.0.0.1:8000/pet", {
        method: "GET"
      });
      const data = await response.json();
      counter.textContent = `Pets: ${data.count}`;
    }

    dog.addEventListener("click", petDog);
petDog()