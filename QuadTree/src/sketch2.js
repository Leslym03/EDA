let qt;
let count = 0;

// Insertar puntos con el mouse
function setup () {
    createCanvas (400 ,400) ;
    let boundary = new Rectangle (200 ,200 ,200 ,200) ;
    qt = new QuadTree ( boundary , 4) ;
}

function draw () {
    background (0) ;
    // para agregar puntos si el mouse esta precionado
    if ( mouseIsPressed ) {
        for (let i = 0; i < 1; i ++) {
            // posision aleatoria para los puntos e insercion
            let m = new Point ( mouseX + random ( -5 ,5) , mouseY + random ( -5 ,5) );
            qt.insert(m)
        }
    }
    background (0);
    qt.show();
}
