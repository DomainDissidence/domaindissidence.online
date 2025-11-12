import * as THREE from "./lib/threejs/three.module.js";
// import THREE;

// const THREE = this

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


const easeInEaseOut = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1

let startY = -0.5;
let endY = 0.5;


const map = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

let rising = false;
let upDownCounter = 0;

function animate() {

    cube.rotation.y += 0.01;

    const value = map(upDownCounter, 0, 200, 0, 1);
    camera.position.y = -startY + (startY - endY) * easeInEaseOut(value);

    upDownCounter += (rising ? -1 : 1);
    if ((!rising && value > 1) || (rising && value < 0))
        rising = !rising;

    renderer.render(scene, camera);

    requestAnimationFrame(t => animate(t));
}
requestAnimationFrame(animate);


function updateSize() {
    renderer.setSize(...getContainerDimensions());
    camera.aspect = getAspectRatio();
    camera.updateProjectionMatrix();
}
// updateSize();


TARGET_CONTAINER.addEventListener("resize", updateSize);