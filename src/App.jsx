import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"



function Banana({ z }) {

  const ref = useRef()
  const { nodes, materials } = useGLTF('/banana-transformed.glb')
  /* const [clicked, setClicked] = useState(false) */
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), //randFloatSpread cuts the value in 2 and give us a random value between the negative and the positive half of it. so for 6 for example it will gives a random number between 3 and -3
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })


  useFrame((state) => {
/*     ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 2 //sin function is a function that expects a value expressed in radiant from -1 to 1
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 2 
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2 
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2  */
    /* ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1) */
    ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.001), (data.rZ += 0.001))
    ref.current.position.set(data.x * width, (data.y += 0.025), z)
    if (data.y > height) data.y = -height 
    

  })

  return (
    <mesh 
      ref={ref}
      geometry={nodes.Banana.geometry} 
      material={materials.Skin} 
      material-emessive="orange"
  />
  )
}


export default function App({ count = 100, depth = 80 }) {
  return (
    <Canvas gl={{ aplha: false }} camera={{ near: 0.01, far: 110, fov: 30}} > {/* A container that contains a shape and a material */}
    <color attach="background" args={["#ffbf40"]} />
    <spotLight position={[10, 10, 10]} intensity={1} />
    <Suspense fallback={null} >
    <Environment preset='sunset' />
    {Array.from({ length: count }, (_, i) => (<Banana key={i} z={-(i / count) * depth - 20} />
  ))}
    <EffectComposer>
      <DepthOfField target={0, 0, depth / 2} focalLength={0.5} bokehScale={11} height={700} />
    </EffectComposer>
    </Suspense>
    </Canvas>
  )
}
