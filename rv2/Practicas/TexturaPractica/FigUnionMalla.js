var BaseF = new THREE.CylinderGeometry(2, 2, 1,16);
var CuerpoF = new THREE.CylinderGeometry(1, 1, 2);
var TapaF = new THREE.CylinderGeometry(1.75, 1.75, 1,6);
CuerpoF.translate(0,1.5,0);
TapaF.translate(0,3,0);

var BaseM = new THREE.Mesh(BaseF);
var CuerpoM = new THREE.Mesh(CuerpoF);
var TapaM = new THREE.Mesh(TapaF);
var TorreF = new THREE.Geometry();
TorreF.merge(BaseM.geometry, BaseM.matrix);
TorreF.merge(CuerpoM.geometry, CuerpoM.matrix);
TorreF.merge(TapaM.geometry, TapaM.matrix);
var textura1=THREE.ImageUtils.loadTexture('source/modern_cyc.jpg');
var textura2=THREE.ImageUtils.loadTexture('source/basket.jpg');
var TorreMat1 = new THREE.MeshLambertMaterial({map:textura1});
var TorreMat2 = new THREE.MeshLambertMaterial({map:textura2});

var TorreV1 = new THREE.Mesh( TorreF, TorreMat1 );
var TorreV2 = new THREE.Mesh( TorreF, TorreMat2 );