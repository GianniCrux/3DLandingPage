import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, Detailed } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"



 function Lemon({ index, z, speed }) {

  const ref = useRef()
  /* const [clicked, setClicked] = useState(false) */
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
  const { nodes, materials } = useGLTF('/lemon-transformed.glb')

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), //randFloatSpread cuts the value in 2 and give us a random value between the negative and the positive half of it. so for 6 for example it will gives a random number between 3 and -3
    y: THREE.MathUtils.randFloatSpread(height * 2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI, //Math.PI represents 360 degree in radian
    rZ: Math.random() * Math.PI
  })


  //useFrame executes 60 times per seconds 
  useFrame((state, dt) => {
/*     ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 2 //sin function is a function that expects a value expressed in radiant from -1 to 1
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 2 
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2 
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2  */
    /* ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1) */
    if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)
      // This will rotate the object
      ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
      // When they reach certain height, set them on bottom
      if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))

    

  })

  return (

    <mesh 
      ref={ref}
      geometry={nodes.lemon.geometry} 
      material={materials.skin} 
      material-emissive="orange"
  />

  )
}


export default function Lemons({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }} > {/* A container that contains a shape and a material */}
    <color attach="background" args={["#fed034"]} />
    <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />

    {Array.from({ length: count }, (_, i) => (<Lemon key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} />
  ))}
    <Environment preset='sunset' />
    <EffectComposer disableNormalPass multisampling={0}>
      <DepthOfField target={[0, 0, 60]} focalLength={0.5} bokehScale={14} height={700} />
    </EffectComposer>
    </Canvas>
  )
}

