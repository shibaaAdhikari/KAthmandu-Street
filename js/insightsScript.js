let filterTopics = document.querySelector("#topicFilters");
let filterInsights = document.querySelector("#insightFilters");

let topicArrow = document.querySelector("#topicArrow");
let insightArrow = document.querySelector("#insightArrow");

let arrow = document.querySelector("#arrow");
let arrow1 = document.querySelector("#arrow1");

topicArrow.addEventListener("click", handleClick);
insightArrow.addEventListener("click", handleClick1);

function handleClick() {
  if (arrow.style.transform == `rotate(180deg)`) {
    arrow.style.transform = `rotate(0deg)`;
    filterTopics.style.display = "none";
    filterTopics.style.height = "0";
  } else {
    arrow.style.transform = `rotate(180deg)`;
    filterTopics.style.display = "block";
    filterTopics.style.height = "100%";
  }
}
function handleClick1() {
  if (arrow1.style.transform == `rotate(180deg)`) {
    arrow1.style.transform = `rotate(0deg)`;
    filterInsights.style.display = "none";
    filterInsights.style.height = "0";
  } else {
    arrow1.style.transform = `rotate(180deg)`;
    filterInsights.style.display = "block";
    filterInsights.style.height = "100%";
  }
}
