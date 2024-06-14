const blogTopics = document.getElementById("blog-topics");
const guideAndTools = document.getElementById("guide-and-tools");
const trendingTopics = document.getElementById("trending-topics");

const topics = [
  "Company",
  "Design",
  "Technology",
  "Crypto",
  "Artificial Intelligence",
  "Work",
];

const _topics = ["Design Thinking", "Technology", "Web3", "Programming", "Ai"];

const tools = [
  "Guidelines",
  "Mentorship",
  "Tutorials",
  "Training",
  "Career",
  "Self care",
];

function appendChildELements(
  parent,
  listItems,
  child = "li",
  attributes = [{ name: "class", value: "" }]
) {
  listItems.map((item) => {
    let element = document.createElement(child);
    element.textContent = item;
    element.classList = attributes.map((att) => att.value);
    attributes.map((attr) => {
      element.setAttribute(attr.name, attr.value);
    });
    parent.appendChild(element);
  });
}

appendChildELements(blogTopics, topics);
appendChildELements(guideAndTools, tools);
appendChildELements(
  trendingTopics,
  _topics,
  (child = "span"),
  (attributes = [
    { attribute: "class", value: "br-5 p5 b-1 hover-grey text-tertiary" },
  ])
);
