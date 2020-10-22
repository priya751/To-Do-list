var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);



function addItem(e)
{
    e.preventDefault();

    var newItem = document.getElementById("item").value;
    var li = document.createElement("li");

    li.className = "list-group-item rounded-0 colorchange";
    li.style.backgroundColor= "#5d2163";
    li.style.marginBottom = "10px";
    li.appendChild(document.createTextNode(`${newItem} ${new Date().toLocaleTimeString()}` ));

    var deleteBtn = document.createElement("i");
    deleteBtn.className = "far fa-trash-alt float-right text-light delete ";
    deleteBtn.style.cursor = "pointer";

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
    form.reset();

}

function removeItem(e)
{
  
    if(e.target.classList.contains("delete"))
    {
        if(confirm("Are You Sure To Delete ?"))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }

    }
}