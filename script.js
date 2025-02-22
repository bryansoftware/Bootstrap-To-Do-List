var container = document.querySelector("div");
var addNewButton = document.getElementById("add-new-button");
var userInput = document.getElementById("userinput");
var doneButton = document.getElementsByClassName("done");
var deleteButton = document.getElementsByClassName("delete");

function createNewCard() {
	var div = document.createElement("div");
	var img = document.createElement("img");
	var cardBodyDiv = document.createElement("div");
	var cardTitle = document.createElement("h5");
	var doneB = document.createElement("a");
	var deleteB = document.createElement("button");
	container.append(div);
	div.append(img, cardBodyDiv);
	cardBodyDiv.append(cardTitle, doneB, deleteB);

	div.style.width = "18rem";
	div.style.padding = "10px";
	div.style = "background-color: #61697D";
	deleteB.style.margin = "0px 0px 0px 20px";

	div.classList.add("card");
	img.classList.add("card-img-top");
	cardBodyDiv.classList.add("card-body");
	cardTitle.classList.add("card-title");
	doneB.classList.add("btn", "btn-primary", "task-done");
	deleteB.classList.add("btn", "btn-danger", "task-delete");

	cardTitle.innerHTML = userInput.value
	doneB.innerHTML = "Done?";
	deleteB.innerHTML = "Delete?";
	userInput.value = ""
}

function handleUIClick(element) {
	var parent = element.target.parentElement;
	var parentOfParent = parent.parentElement;
	var sibling = element.target.previousSibling;

	if (element.target.className === "btn btn-primary task-done") {
		sibling.classList.toggle("done");
	}

	if (element.target.className === "btn btn-danger task-delete") {
		parent.remove();
		parentOfParent.remove();
	}
}

addNewButton.addEventListener("click", createNewCard);
container.addEventListener("click", handleUIClick);