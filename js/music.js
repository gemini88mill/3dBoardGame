function playSound(soundEffectPath){
    //Create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    var sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();

//Load a sound and set it as the Audio object's buffer
    audioLoader.load( soundEffectPath, function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(false);
        sound.setVolume(0.2);
        sound.play();
    });

}

function loadBackgroundMusic(){
    //Create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    var sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();

//Load a sound and set it as the Audio object's buffer
    audioLoader.load( 'assets/music/background_music/StarFighter.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(false);
        sound.setVolume(0.2);
        sound.play();
    });
}