let fromInput = document.querySelector("#from-input");
let modeSelector = document.querySelector("#mode-selector");
let output = document.querySelector("#output");

fromInput.addEventListener("input", update);
modeSelector.addEventListener("change", update);

let bases = [
  { value: 10, string: "Decimal (Base 10)" },
  { value: 16, string: "Hexadecimal (Base 16)" },
  { value: 8, string: "Octal (Base 8)" },
  { value: 2, string: "Binary (Base 2)" },
];

for (let base of bases) {
  let option = document.createElement("option");
  option.textContent = base.string;
  option.value = base.value;

  modeSelector.appendChild(option);
}

function update() {
  let input = fromInput.value.split(",");
  let fromBase = parseInt(modeSelector.value);

  output.innerHTML = "";

  bases.forEach((base) => {
    let toBase = base.value;
    let baseString = base.string;

    let result = input.map((str) => convertNumber(str, fromBase, toBase));

    output.innerHTML += `      <br />
    <input type="text" value="${result}" readonly />
    <input type="text" value="${baseString}" readonly />`;
  });
}

function convertNumber(str, fromBase, toBase) {
  let num = parseInt(str, fromBase);
  return num.toString(toBase);
}

update();
