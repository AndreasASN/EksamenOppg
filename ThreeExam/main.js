import './style.css'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth+50, window.innerHeight+50)
document.body.appendChild(renderer.domElement)
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.setY(30) 
controls.update();

renderer.render(scene, camera)
//__________________________________________#^^^SETUP^^^#___________________________________________________
//__________________________________________ThreeJS kode her________________________________________________

const protonGeo = new THREE.SphereGeometry(1, 60, 60)
const protonMat = new THREE.MeshBasicMaterial({color: "red"})
const proton = new THREE.Mesh(protonGeo, protonMat)
scene.add(proton)

const neutronGeo = new THREE.SphereGeometry(1, 60, 60)
const neutronMat = new THREE.MeshBasicMaterial({color: "blue"})
const neutron = new THREE.Mesh(neutronGeo, neutronMat)
scene.add(neutron)
neutron.position.setX(30)

const electronGeo = new THREE.SphereGeometry(0.3, 60, 60)
const electronMat = new THREE.MeshBasicMaterial({color: "lightgray"})
const electron = new THREE.Mesh(electronGeo, electronMat)
scene.add(electron)
electron.position.setX(-30)

export function p(){
  const proton = new THREE.Mesh(protonGeo, protonMat)  
  scene.add(proton)
  proton.position.setX(camera.position.x)
  proton.position.setY(camera.position.y)
  proton.position.setZ(camera.position.z)
  console.log("proton added.", proton.position.x, proton.position.y, proton.position.z)
}


export function n(){
  const neutron = new THREE.Mesh(neutronGeo, neutronMat)  
  scene.add(neutron)
  neutron.position.setX(camera.position.x)
  neutron.position.setY(camera.position.y)
  neutron.position.setZ(camera.position.z)
  console.log("neutron added.", neutron.position.x, neutron.position.y, neutron.position.z)
}

export function e(){
  const electron = new THREE.Mesh(electronGeo, electronMat)  
  scene.add(electron)
  electron.position.setX(camera.position.x)
  electron.position.setY(camera.position.y)
  electron.position.setZ(camera.position.z)
  console.log("electron added.", electron.position.x, electron.position.y, electron.position.z)
}

//__________________________________________Normal Javascript her___________________________________________

/*
function pmn(){
  var protPos = [proton.position.x,proton.position.y,proton.position.z]
  var neutPos = [neutron.position.x,neutron.position.y,neutron.position.z]
  var distPos = []
  for (let x = 0; x<protPos.length; x++){
    distPos.push(protPos[x]-neutPos[x])
  }
  console.log(distPos)
  return distPos
}
var distPos = pmn()
console.log(distPos)
*/

export function a(){
  var atomNum = parseInt(document.getElementById("atom").value)
  if (atomNum > 118){
    alert("Please enter a valid atomic number.")
  }
  else {
    var maxRange = Math.floor(((atomNum)+10)/6)
    console.log(maxRange)
    var xRange = [0,maxRange]
    var yRange = [0,maxRange]
    var zRange = [0,maxRange]
    for (let x = 0; x<atomNum; x++){
      const proton = new THREE.Mesh(protonGeo, protonMat)
      const neutron = new THREE.Mesh(neutronGeo, neutronMat)
      const electron = new THREE.Mesh(electronGeo, electronMat) 
      scene.add(proton)
      scene.add(neutron)
      scene.add(electron)
      proton.position.setX(camera.position.x+Math.floor(Math.random()*[xRange[1]]))
      proton.position.setY(camera.position.y+Math.floor(Math.random()*[yRange[1]]))
      proton.position.setZ(camera.position.z+Math.floor(Math.random()*[zRange[1]]))
      neutron.position.setX(camera.position.x+Math.floor(Math.random()*[xRange[1]]))
      neutron.position.setY(camera.position.y+Math.floor(Math.random()*[yRange[1]]))
      neutron.position.setZ(camera.position.z+Math.floor(Math.random()*[zRange[1]]))
      electron.position.setX(camera.position.x+Math.floor((Math.random()*-10)))
      electron.position.setY(camera.position.y+Math.floor((Math.random()*-10)))
      electron.position.setZ(camera.position.z+Math.floor((Math.random()*-10)))
    }
  }
}



//__________________________________________Renderer under her______________________________________________

function animate() {
  var distance = 1
  var speed = 1
  if (proton.position.x+distance != neutron.position.x){
    if (proton.position.x > neutron.position.x){
      proton.translateX(-speed)
    }
    else if (proton.position.x < neutron.position.x){
      proton.translateX(speed)
    }
  }
  if (proton.position.y+distance != neutron.position.y){
    if (proton.position.y > neutron.position.y){
      proton.translateY(-speed)
    }
    else if (proton.position.y < neutron.position.y){
      proton.translateY(speed)
    }
  }
  if (proton.position.z+distance != neutron.position.z){
    if (proton.position.z > neutron.position.z){
      proton.translateZ(-speed)
    }
    else if (proton.position.z < neutron.position.z){
      proton.translateZ(speed)
    }}
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()