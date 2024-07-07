// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Create the player (a cube)
const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
scene.add(player);

// Create the ground (a plane)
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = Math.PI / 2;
scene.add(ground);
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            moveForward = true;
            break;
        case 's':
            moveBackward = true;
            break;
        case 'a':
            moveLeft = true;
            break;
        case 'd':
            moveRight = true;
            break;
    }
});
function animate() {
    requestAnimationFrame(animate);

    if (moveForward) player.position.z -= 0.05;
    if (moveBackward) player.position.z += 0.05;
    if (moveLeft) player.position.x -= 0.05;
    if (moveRight) player.position.x += 0.05;

    renderer.render(scene, camera);
}

animate();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});