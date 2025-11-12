import * as THREE from "/js/lib/threejs/three.module.js";


const TARGET_CONTAINER = document.querySelector("#landing-canvas");



const getContainerDimensions = () => [TARGET_CONTAINER.clientWidth, TARGET_CONTAINER.clientHeight];
const getAspectRatio = () => getContainerDimensions().reduce((prevVal, curVal) => prevVal / curVal);





const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, getAspectRatio(), 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: TARGET_CONTAINER, alpha: true, antialias: true });
renderer.setSize(...getContainerDimensions());
// document.body.appendChild(renderer.domElement);
// TARGET_CONTAINER.appendChild(renderer.domElement)

const geom = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({color: 0xe43797})
mat.wireframe = true;
mat.wireframeLineWidth = 4;
mat.wireFrameLinecap = "round";
mat.wireframeLinejoin = "round";
const cube = new THREE.Mesh(geom, mat);
scene.add(cube)

camera.position.z = 2.5


function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}
animate();