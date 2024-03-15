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

topics.map((topic) => {
  let li = document.createElement("li");
  li.textContent = topic;
  blogTopics.appendChild(li);
});

tools.map((tool) => {
  let li = document.createElement("li");
  li.textContent = tool;
  guideAndTools.appendChild(li);
});

//  <span class="">Ai</span>

_topics.map((topic) => {
  let span = document.createElement("span");
  span.textContent = topic;
  span.setAttribute("class", "br-5 p5 b-1 hover-grey text-tertiary");
  trendingTopics.appendChild(span);
});
