var escena = new THREE.Scene();
    
//---ejes//
    var ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//---ejes//

//---luz//
var luz = new THREE.PointLight( 0xFFFFFF, 1, 100 );
luz.position.set( 15, 15, 15 );
escena.add( luz );
//---luz//



//--camara//

//--Perspectiva
 var campoVision=60;//grados
 var relacionAspecto=window.innerWidth/window.innerHeight;
 var planoCercano=1;
 var planoLejano=1000;
var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
 //camara.position.set(0,0,75); //Posicion 1
 //camara.position.set(-15,25,15); //Posicion 2
 camara.position.set(25,25,15);// Posicion 3
 camara.lookAt( escena.position );
 camara.rotation.z +=Math.PI/2; //Para posicion 1 y 3
 camara.rotation.z +=Math.PI*1/8;//Para posicion 1 y 3
 //camara.rotation.z +=2*Math.PI/7;//Para posicion 2
 //camara.rotation.z +=Math.PI;//Para posicion 2

//--Perpectiva

//--Ortografica
 //var camara = new THREE.OrthographicCamera();
 //camara.left = window.innerWidth/-8;
 //camara.right = window.innerWidth/8;
 //camara.top = window.innerHeight/8;
 //camara.bottom= window.innerHeight/-8;

 //camara.near=0.1;
 //camara.far=1000;
 //camara.updateProjectionMatrix();

 //camara.position.set(0,0,75); //Posicion 1
 //camara.position.set(-15,25,15); //Posicion 2
 //camara.position.set(25,25,15);// Posicion 3
 //camara.lookAt( escena.position );
 //camara.rotation.z +=Math.PI/2; //Para posicion 1 y 3
 //camara.rotation.z +=Math.PI*1/8;//Para posicion 1 y 3
 //camara.rotation.z +=2*Math.PI/7;//Para posicion 2
 //camara.rotation.z +=Math.PI;//Para posicion 2


//--Ortografica
//--camara//

//---personajes//
escena.add(FigFinal1);
FigFinal1.position.x=5;
FigFinal1.position.y=5;

escena.add(Trama);
Trama.position.x=-5;
Trama.position.y=5;
//Trama.position.z=0.5;
Trama.rotateX(Math.PI/2);
Trama.rotateY(Math.PI/2);
//---personajes//   


//---tablero
var Piezatablero;
var color = new Array();
color[1]=new THREE.MeshBasicMaterial({color: 0x000000,side: THREE.DoubleSide});
color[2]=new THREE.MeshBasicMaterial({color: 0xFFFFFF,side: THREE.DoubleSide});
var colorTemp=color[1];

for (var i=-37.5;i<65;i=i+5){
   //console.log("cambio de columna");
    for(var j=-37.5;j<65;j=j+5){
       // console.log("cambio de fila")
    
       if (colorTemp===color[2]){
            colorTemp=color[1];
            //console.log("se cambio a color 1");
       }
        
        else if (colorTemp===color[1]){
            colorTemp=color[2];
            //console.log("se cambio a color 2");
       }
        Piezatablero=new THREE.Mesh(new THREE.PlaneGeometry(5,5,1,1),colorTemp);
        Piezatablero.position.x =i;
        Piezatablero.position.y =j;
        escena.add(Piezatablero);
        //console.log("pieza añadida");
       }
}


//---tablero
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
                      
  

                      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


