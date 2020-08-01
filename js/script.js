const net = new brain.NeuralNetwork();
const data = [{"input": {"r": 0, "g": 0, "b": 0}, "output": [1]}, {
  "input": {"r": 1, "g": 1, "b": 1},
  "output": [0]
}, {
  "input": {"r": 0.8053718514535517, "g": 0.49367216130041247, "b": 0.0010003671273084436},
  "output": [1]
}, {
  "input": {"r": 0.5627138531690421, "g": 0.7417615864757385, "b": 0.8165547833263576},
  "output": [1]
}, {
  "input": {"r": 0.0027541426714294825, "g": 0.9847221587177559, "b": 0.44518536950167187},
  "output": [0]
}, {
  "input": {"r": 0.3823236135046417, "g": 0.22933437424579917, "b": 0.4076336860614327},
  "output": [1]
}, {
  "input": {"r": 0.6447342596409462, "g": 0.5096866261107462, "b": 0.6917243704144038},
  "output": [1]
}, {
  "input": {"r": 0.6521225672323894, "g": 0.08141052871725551, "b": 0.5258062131428454},
  "output": [1]
}, {
  "input": {"r": 0.19385416988423398, "g": 0.9205220176888673, "b": 0.07306835460587502},
  "output": [0]
}, {
  "input": {"r": 0.6238379956347118, "g": 0.9200499535352349, "b": 0.9146772167074395},
  "output": [0]
}, {
  "input": {"r": 0.48460847031561993, "g": 0.22682162198126976, "b": 0.8319506137143229},
  "output": [1]
}, {
  "input": {"r": 0.7215264245747872, "g": 0.9452976722685855, "b": 0.9438978102582387},
  "output": [0]
}, {
  "input": {"r": 0.7772043676424389, "g": 0.4634628602944977, "b": 0.43018196451045654},
  "output": [1]
}, {
  "input": {"r": 0.6803295270946708, "g": 0.15949558134644204, "b": 0.9732795356944393},
  "output": [1]
}, {
  "input": {"r": 0.4304809271415917, "g": 0.4733706629881296, "b": 0.3561278936505776},
  "output": [1]
}, {
  "input": {"r": 0.08445229735542781, "g": 0.9151963763869224, "b": 0.8656085889308307},
  "output": [0]
}, {
  "input": {"r": 0.4959236724062652, "g": 0.1322954309617932, "b": 0.8223982516835311},
  "output": [1]
}, {
  "input": {"r": 0.6666742982306402, "g": 0.45130158014063326, "b": 0.6340563872113509},
  "output": [1]
}, {
  "input": {"r": 0.5334282488997273, "g": 0.5687207648334602, "b": 0.5205684436270592},
  "output": [1]
}, {
  "input": {"r": 0.4120619882173213, "g": 0.9561712858136384, "b": 0.21920056904225316},
  "output": [0]
}, {
  "input": {"r": 0.3002350926516335, "g": 0.5728031277589163, "b": 0.6474409679682589},
  "output": [1]
}, {
  "input": {"r": 0.5000458616388239, "g": 0.01685871273634465, "b": 0.43032323311888954},
  "output": [1]
}, {
  "input": {"r": 0.3339666421662797, "g": 0.8589380833805067, "b": 0.3269115524266615},
  "output": [0]
}, {
  "input": {"r": 0.6603386557409578, "g": 0.6869171063339943, "b": 0.35269932290381023},
  "output": [1]
}, {
  "input": {"r": 0.6132022633280776, "g": 0.4987669853126162, "b": 0.4808781856250386},
  "output": [1]
}, {
  "input": {"r": 0.15436138361448748, "g": 0.8652506475915529, "b": 0.8490507767386517},
  "output": [0]
}, {
  "input": {"r": 0.18799963080307291, "g": 0.1988128254284558, "b": 0.2407317456768594},
  "output": [1]
}, {
  "input": {"r": 0.7701183307863455, "g": 0.20282683308124683, "b": 0.6220212476159739},
  "output": [1]
}, {
  "input": {"r": 0.18597644721157303, "g": 0.018469059888650996, "b": 0.014800686825165998},
  "output": [1]
}, {"input": {"r": 0.36512724777890204, "g": 0.672436827135231, "b": 0.7315694438665421}, "output": [1]}];
net.train(data);
const diagram = document.getElementById('diagram');
diagram.innerHTML = brain.utilities.toSVG(net);

// console.log(net.run({r: 1, g: .5, b: 0}));

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
let color;
setRandomColor();

whiteButton.addEventListener('click', () => {
  chooseColor(1);
});

blackButton.addEventListener('click', () => {
  chooseColor(0);
});

printButton.addEventListener('click', print);

function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0];
  guessEl.style.color = guess > .5 ? '#FFF' : '#000';
  colorEl.style.backgroundColor =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}