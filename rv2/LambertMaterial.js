function setup(){
var forma11 = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xffffff});
malla = new THREE.Mesh(forma11, material);
//luz
 LuzPuntual= new THREE.PointLight(0xCC00CC);
    LuzPuntual.position.x = 10;
    LuzPuntual.position.y = 10;
    LuzPuntual.position.z = 10;
//luz
escena = new THREE.Scene();
escena.add(malla);
escena.add(LuzPuntual);

camara = new THREE.PerspectiveCamera();
camara.position.z=5;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*.95,window.innerHeight*.95);

document.body.appendChild(renderer.domElement);
}
function loop(){
    requestAnimationFrame(loop);
    malla.rotation.x    += 0.01;
    malla.rotation.y    += 0.01;
    renderer.render(escena,camara);
    
}
var camara, escena, renderer,malla, LuzPuntual;
setup();
loop();