import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import { GamingPc } from "../3d-react-objects/GamingPc"

const GamingPcContainer= () => {
  return (
    <Canvas>
      <Suspense fallback="loading..."></Suspense>
      <Stage environment="night" intensity={10}>
      <GamingPc />
      </Stage>

      <OrbitControls enableZoom= {false} autoRotate/>
      <PerspectiveCamera position={[-1,0,1.8]} zoom={0.7} makeDefault />
    </Canvas>
  
  )
}
export default GamingPcContainer;