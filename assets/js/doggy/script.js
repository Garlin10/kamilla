    const dog = document.getElementById("dog");
    const counter = document.getElementById("counter");
    async function petDog() {
      const response = await fetch("https://galgyula.hu/pet", {
        method: "GET"
      });
      const data = await response.json();
      console.log(data.count);
      counter.textContent = "Pets: "+ data.count
    }
    async function numberzero() {
      const response = await fetch("https://galgyula.hu/delete_petting", {
        method: "DELETE"
      });
      const data = await response.json();
      console.log(data.count);
      counter.textContent = "Pets: "+ data.count
    }
    dog.addEventListener("click", petDog);
    counter.addEventListener("click", numberzero);

petDog()