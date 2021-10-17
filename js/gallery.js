import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js'
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js'
let scene, camera, renderer

const canvas = document.querySelector('canvas')

const sizes = {
   width: canvas.width,
   height: canvas.height,
}

function init() {
   scene = new THREE.Scene()

   camera = new THREE.PerspectiveCamera(
      30,
      canvas.width / canvas.height,
      1,
      5000
   )
   camera.rotation.y = (45 / 180) * Math.PI
   camera.position.x = 800
   camera.position.y = 100
   camera.position.z = 1000

   renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
   })
   renderer.setSize(sizes.width, sizes.height)

   const controls = new OrbitControls(camera, canvas)
   controls.addEventListener('change', animate)
   controls.enablePan = false
   controls.enableZoom = false
   const hlight = new THREE.AmbientLight(0x404040, 7)
   scene.add(hlight)
   let loader = new GLTFLoader()
   loader.load('../model/scene.gltf', function (gltf) {
      gltf.scene.scale.set(9, 9, 8)
      gltf.scene.position.y = -100
      scene.add(gltf.scene)
      animate()
   })
}
function animate() {
   renderer.render(scene, camera)
}

init()
