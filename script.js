//Inputs & InnerHTML

// .innerHTML command:
//1. gets the contents of an HTML element. E.g. <p>Click <a>here</a> </p>
// - the inner HTML of the paragraph in: Click <a>here</a>
// - The inner HTM of the anchor <a> is: here
//2. Sets the content of an HTML element

document.getElementById("btn").addEventListener("click", showContent);

function showContent() {
  document.getElementById("greet").innerHTML = "Welcome to my Pizzaria";
}
let top1content = document.getElementById("btn").addEventListener("click", showContent);

// Value command: retrieves the content of an <input> element.
//      *IMPORTANT* value command should always be used within a
document.getElementById("order-btn").addEventListener("click", getorder);
function getorder() {
  let topping1 = document.getElementById("top1-input").value;
  let topping2 = document.getElementById("top2-input").value;
  let size = document.getElementById("size-input").value;
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;
  document.getElementById("order-output").innerHTML = output;
}
