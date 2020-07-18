let conversions = {
  Weight: {
    kg: 1,
    g: 1000,
    st: 0.157473,
    lb: 2.204623,
    oz: 35.27396,
  },

  Length: {
    m: 1,
    km: 0.001,
    ft: 3.28084,
    in: 39.37008,
    yd: 1.09361,
    mi: 0.0006213712,
  },

  Area: {
    "sq. m": 1,
    "sq. km": 0.000001,
    "sq. ft": 10.763910417,
    "sq. in": 1550.0031,
    "sq. yd": 1.1959900463,
    "sq. mi": 3.861021585e-7,
  },

  Volume: {
    "cubic m": 1,
    L: 1000,
    gal: 264.17205236,
    qt: 1056.6882094,
    pt: 2113.3764189,
    cup: 4226.7528377,
  },
};

let modeSelector = document.querySelector("#mode-selector");
let fromInput = document.querySelector("#from-input");
let unitSelector = document.querySelector("#unit-selector");
let output = document.querySelector("#output");

modeSelector.addEventListener("change", updateMode);
fromInput.addEventListener("input", updateValues);
unitSelector.addEventListener("change", updateValues);

let mode;
let from;
let from_unit;

function updateMode() {
  mode = modeSelector.value;
  unitSelector.innerHTML = "";

  for (let unit in conversions[mode]) {
    let option = createOption(unit);
    unitSelector.appendChild(option);
  }

  unitSelector.value = unitSelector.firstChild.value;
  updateValues();
}

function updateValues() {
  from = parseFloat(fromInput.value);
  from_unit = unitSelector.value;

  if (from) {
    output.innerHTML = "";

    for (let unit in conversions[mode]) {
      let to = convert_to(unit).toFixed(3);

      output.innerHTML += ` <br/> 
                            <input type="text" class="value" value="${to}" readonly/><input type="text" class="unit" value="${unit}" readonly/>`;
    }
  }
}

function convert_to(to_unit) {
  return (from / conversions[mode][from_unit]) * conversions[mode][to_unit];
}

function createOption(value) {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.textContent = value;

  return option;
}

function init() {
  for (let mode in conversions) {
    let option = createOption(mode);
    modeSelector.appendChild(option);
  }

  updateMode();
  updateValues();
}

init();
