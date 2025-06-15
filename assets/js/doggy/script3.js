const dog = document.getElementById("dog");

    async function petDog() {
      const response = await fetch("http://127.0.0.1:8000/pet", {
        method: "GET"
      });
      const data = await response.json();
      console.log(data.count);
    }

    dog.addEventListener("click", petDog);
petDog()