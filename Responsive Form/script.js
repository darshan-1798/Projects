const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

// let name = 'Yash Prasad'

// let age = 25

// let address = "Prestige Falcon City, Bangalore"

// console.log(`${personal details = My name is ${name} age is ${age} address is ${address}`)
