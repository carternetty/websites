window.onload = function()
{
	var 
	todoInput;

	todoInput = document.getElementById("enterItems");
	todoInput.onkeypress = createListItem;

	document.getElementById("bottomBarDivTag").style.display = "none";

	/*var items = 0;*/
	
}

var items = 0;
var itemText = document.getElementById("itemsLeft");

var levelTester = document.getElementById("levelTester");

function createListItem(eventObject)
{
	var text = document.getElementById("enterItems").value;

	if(eventObject.which === 13 && text != "")
	{
		document.getElementById("bottomBarDivTag").style.display = "";

		var ul = document.getElementById("listElements");
		var li = document.createElement("li");
		var input = document.createElement("input");
		var pic = document.createElement("input");
		var p = document.createElement("p");

		input.setAttribute("type", "checkbox");
		input.setAttribute("id", "checkButton");
		input.onclick = checkPressed;
		li.onmouseenter = enter;
		li.onmouseleave = leave;
		li.setAttribute("id", "listItem");
		li.setAttribute("class", "unchecked");
		//li.setAttribute("onmouseover", "xAppear()");
		p.setAttribute("class", "stayInline");
		pic.setAttribute("class", "x");
		pic.setAttribute("type", "image");
		pic.setAttribute("src", "x.png");
		//pic.setAttribute("onclick", "xPressed()");
		pic.onclick = xPressed;
		
		ul.appendChild(li);
		li.appendChild(input);
		li.appendChild(p);
		li.appendChild(pic);
		p.appendChild(document.createTextNode(text));

		document.getElementById("enterItems").value = null;
		itemValue("pos");

		checkPressed();
		allPressed();
	}
}

function checkPressed()
{
	if (this.checked == true)
	{
		this.parentNode.style.textDecoration = "line-through";
		this.parentNode.style.opacity = 0.8;

		this.parentNode.setAttribute("class", "checked");

		itemValue("neg");
	}
	if (this.checked == false)
	{
		this.parentNode.style.textDecoration = "none";
		this.parentNode.style.opacity = 1.0;

		this.parentNode.setAttribute("class", "unchecked");

		itemValue("pos");
	}
	if (levelTester.class == "active")
	{
		activePressed();
	}
	if (levelTester.class == "completed")
	{
		completedPressed();
	}
}

function itemValue(check)
{
	if (check == "pos")
	{
		items++;
		itemsLeft.innerHTML = items + " Items left";
	}
	if (check == "neg" && items > 0)
	{
		items--;
		itemsLeft.innerHTML = items + " Items left";
	}
}

function allPressed()
{
	var checked = document.getElementsByClassName("checked");
	var unchecked = document.getElementsByClassName("unchecked");

	for (var i = 0; i < checked.length; i++)
	{
		checked[i].style.display = "";
	}

	for (var i = 0; i < unchecked.length; i++)
	{
		unchecked[i].style.display = "";
	}

	levelTester.class = "all";

	document.getElementById("all").style.backgroundColor = "#666666";
	document.getElementById("active").style.backgroundColor = "#FFFFFF";
	document.getElementById("completed").style.backgroundColor = "#FFFFFF";
}

function activePressed()
{
	var checked = document.getElementsByClassName("checked");
	var unchecked = document.getElementsByClassName("unchecked");

	for (var i = 0; i < checked.length; i++)
	{
		checked[i].style.display = "none";
	}

	for (var i = 0; i < unchecked.length; i++)
	{
		unchecked[i].style.display = "";
	}

	levelTester.class = "active";

	document.getElementById("all").style.backgroundColor = "#FFFFFF";
	document.getElementById("active").style.backgroundColor = "#666666";
	document.getElementById("completed").style.backgroundColor = "#FFFFFF";
}

function completedPressed()
{
	var checked = document.getElementsByClassName("checked");
	var unchecked = document.getElementsByClassName("unchecked");

	for (var i = 0; i < unchecked.length; i++)
	{
		unchecked[i].style.display = "none";
	}

	for (var i = 0; i < checked.length; i++)
	{
		checked[i].style.display = "";
	}

	levelTester.class = "completed";

	document.getElementById("all").style.backgroundColor = "#FFFFFF";
	document.getElementById("active").style.backgroundColor = "#FFFFFF";
	document.getElementById("completed").style.backgroundColor = "#666666";
}

function clearCompletedPressed()
{
	var checked = document.getElementsByClassName("checked");
	var unchecked = document.getElementsByClassName("unchecked");

	while (checked.length > 0)
	{
		checked[0].parentNode.removeChild(checked[0]);
	}

	if (checked.length == 0 && unchecked.length == 0)
	{
		document.getElementById("bottomBarDivTag").style.display = "none";
	}

	levelTester.class = "all";
	allPressed();
}

function xPressed()
{
	var checked = document.getElementsByClassName("checked");
	var unchecked = document.getElementsByClassName("unchecked");

	if (this.parentNode.className == "unchecked")
	{
		itemValue("neg");
	}

	this.parentNode.parentNode.removeChild(this.parentNode);

	if (checked.length == 0 && unchecked.length == 0)
	{
		document.getElementById("bottomBarDivTag").style.display = "none";
	}
}

function enter()
{
	var x = this.getElementsByClassName("x")[0];
	x.style.opacity = .8;
}

function leave()
{
	var x = this.getElementsByClassName("x")[0];
	x.style.opacity = 0;
}