//Colorbox

    //Selections

const box = document.querySelector('.colorbox');
const mousemove = document.querySelector('.mouse-location');

    //Events

box.addEventListener('mousemove',colorchange);
box.addEventListener('mouseleave', colorreset);
box.addEventListener('mousemove', recordmouse);
box.addEventListener('mouseleave', mousereset);


    //functions

function colorchange(e){
    console.log('Event type: '+e.type)

    box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',100)';
}

function colorreset(e){
    console.log('Event type: '+e.type+' , Color reset')

    box.style.backgroundColor = 'rgb(179, 177, 177)';
}

function recordmouse(e){
    mousemove.innerHTML = '<h3>Red: '+e.offsetX+'</h3><h3>Green: '+e.offsetY+'</h3><h3>Blue: 100</h3>';
}

function mousereset(e){
    mousemove.innerHTML = '<h3>Red: 179</h3><h3>Green: 177</h3><h3>Blue: 177</h3>';
}


//Form

    //Selections

const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

    //Events

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

    //Functions

function addItem(e){
    e.preventDefault();
    //Create new list item from input
    const newItem = document.querySelector('#item').value;  //selects value of input
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem))
    //Create delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    const lower = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');  //returns HTML collection
    //Convert to array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(lower) != -1) {   //if itemName matches search input:
            item.style.display = 'block';
        } else {item.style.display = 'none';}
    })
}