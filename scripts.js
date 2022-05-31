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