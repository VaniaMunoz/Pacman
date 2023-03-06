var world = [
    [1,1,1,1,1],
    [1,0,2,2,1],
    [1,3,1,3,1],
    [1,3,2,2,1],
    [1,3,2,2,1],
    [1,2,1,2,1],
    [1,2,3,3,1],
    [1,2,2,2,1],
    [1,3,1,2,1],
    [1,3,2,3,1],
    [1,1,1,1,1],
];
var worldDict = {
    0: 'blank' ,
    1: 'wall' ,
    2: 'sushi',
    3: 'onigiri'
}

function drawWorld(){
    output = "";

    for(var row = 0; row < world.length; row++){
        output += "<div class = 'row'>"
        for(var x = 0; x < world[row].length; x++){
            output += "<div class = '" + worldDict [world[row][x]] +"'></div>"
            // worldDict [world[row][x]]
        }
    }

    document.getElementById('world').innerHTML = output;
}
drawWorld()

var Pacman = {
    x: 1,
    y: 1
}

function drawPacman(){
    document.getElementById('Pacman').style.top = Pacman.y * 40 + 'px'
    document.getElementById('Pacman').style.left = Pacman.x * 40 + 'px'
}
drawPacman()

document.onkeydown = function(e){
    if(e.keyCode == 37){
        if(world[Pacman.y] [Pacman.x - 1] != 1){
        Pacman.x--;
        }
    }
    if(e.keyCode == 39){
        if(world[Pacman.y] [Pacman.x + 1] != 1){
        Pacman.x++;
        }
    }
    if(e.keyCode == 40){
        if(world[Pacman.y + 1] [Pacman.x] != 1){
        Pacman.y++;
        }
    }
    if(e.keyCode == 38){
        if(world[Pacman.y - 1] [Pacman.x] != 1){
        Pacman.y--;
    }
}
// add going down functionality
world[Pacman.y] [Pacman.x] =0;
drawPacman()
drawWorld()
}

// keep score of how many sushi's ninjaman eats
// sushi = 10pts onigiri = 5pts

// advanced challenges - random world


// hacker challenges - create ghosts that chase ninjaman