var renderer;
var scene;
var camera;
var spotLight;
var smsh;

var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var projector = new THREE.Projector();



function onMouseMove(event){

    var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
    projector.unprojectVector(vector, camera);
    raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function init()
{
    <!-- 4. Edit the scene creation -->
    scene = new THREE.Scene();

    setupCamera();
    setupRenderer();
    addSpotLight();


    createBoard();
    createTiles(0,3,0, "./assets/images/squares/accept.jpg", "accept");
    createTiles(0,3,30, "./assets/images/squares/YES.jpg", "yes");
    createTiles(30,3,30, "./assets/images/squares/jump_again.jpg", "jump again");
    createTiles(-30,3,30, "./assets/images/squares/could-be.jpg", "could be");
    createTiles(-30,3,0, "./assets/images/squares/EXCLAM.jpg", "???");
    createTiles(0,3,-30, "./assets/images/squares/go_wild.jpg", "go wild");
    createTiles(0,3,-60, "./assets/images/squares/no.jpg", "no");
    createTiles(30,3,-60, "./assets/images/squares/one_step.jpg", "one step");
    createTiles(-30,3,-60, "./assets/images/squares/strike_out.jpg", "strike out");
    createTiles(-30,3,-30, "./assets/images/squares/think_again.jpg", "think again");
    createTiles(30,3,-30, "./assets/images/squares/moot.jpg", "moot");
    createTiles(30,3,0, "./assets/images/squares/loose_turn.jpg", "loose turn");

    createheaderBoard();



    //loadBackgroundMusic();

    // Output to the stream
    document.body.appendChild( renderer.domElement );

    // Call render
    render();
}

function render()
{
    //raycaster.setFromCamera(mouse, camera);


    var intersects = raycaster.intersectObjects( scene.children );

    for ( var i = 0; i < intersects.length; i++ ) {
        if(intersects[i].object.name !== 'groundPlane') {



            switch(intersects[i].object.name){
                case 'strike out': console.log('strike'); break;
                case 'accept': console.log('accept'); break;
                case 'yes': console.log('yes'); break;
                case 'jump again': console.log('jump again'); break;
                case 'could be': console.log('could be'); break;
                case '???': console.log('???'); break;
                case 'go wild': console.log('go wild'); break;
                case 'no': console.log('no'); break;
                case 'one step': console.log('one step'); break;
                case 'think again': console.log('think again'); break;
                case 'moot': console.log('moot'); break;
                case 'loose turn': console.log('loose turn'); break;
            }
            //intersects[i].object.material.color.set(0xff0000);
        }

    }

    // Request animation frame
    requestAnimationFrame( render );

    addEventListener('mousedown', onMouseMove, true);
    // Call render()
    //renderer.render(backgroundScene , backgroundCamera );
    renderer.render( scene, camera );
}

function setupCamera()
{
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.x = 0;
    camera.position.y = 180;
    camera.position.z = 75;
    camera.lookAt( scene.position );
}

function setupRenderer()
{
    renderer = new THREE.WebGLRenderer();
    //						color     alpha
    renderer.setClearColor( 0x000000, 1.0 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
}

function addSpotLight()
{
    spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 0, 0, 100 );
    spotLight.shadowCameraNear = 10;
    spotLight.shadowCameraFar = 100;
    spotLight.castShadow = true;
    spotLight.intensity = 2;
    scene.add(spotLight);
}



window.onload = init;

