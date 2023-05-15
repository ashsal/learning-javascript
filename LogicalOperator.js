const dish1 = "rajma";
const dish2 = "chawal";
let isRajmaChawal;

if (dish1 == "rajma" && dish2 == "chawal") {
  isRajmaChawal = true;
} else {
  isRajmaChawal = false;
}

if (!isRajmaChawal) {
  console.log("No it is not rajma chawal");
} else {
  console.log("Yes it is rajma chawal");
}
