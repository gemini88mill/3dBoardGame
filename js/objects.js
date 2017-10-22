function createTiles(posX, posY, posZ, texturePath, name) {

    var texture = THREE.ImageUtils.loadTexture(texturePath);

    var geometry = new THREE.BoxGeometry( 20, 1, 20 );
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    var plane = new THREE.Mesh( geometry, material );

    plane.position.x = posX;
    plane.position.y = posY;
    plane.position.z = posZ;

    plane.name = name;
    scene.add(plane);
}

function createBoard(){
    //var texture = THREE.ImageUtils.loadTexture('./assets/images/office_space_kit_mat.jpg');

    var geometry = new THREE.BoxGeometry( 100, 2, 200 );
    var material = new THREE.MeshBasicMaterial( {color: 0xf5f5dc} );
    var plane = new THREE.Mesh( geometry, material );

    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;

    plane.name = 'groundPlane';

    scene.add( plane );
}

function createheaderBoard(){

    var texture = THREE.ImageUtils.loadTexture("./assets/images/squares/jump_to_conclu.jpg")

    var geometry = new THREE.BoxGeometry( 100, 1, 20 );
    var material = new THREE.MeshBasicMaterial( {map: texture} );
    var plane = new THREE.Mesh( geometry, material );

    plane.position.y = 2;
    plane.position.z = -90;

    scene.add(plane);
}