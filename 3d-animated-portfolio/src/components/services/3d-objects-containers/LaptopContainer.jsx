import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ComputerModel } from "../3d-react-objects/Laptop"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading..."></Suspense>
      <Stage environment="night" >
      <ComputerModel />
      </Stage>

      <OrbitControls enableZoom= {false} autoRotate/>
      <PerspectiveCamera position={[-1,0,1.8]} zoom={0.7} makeDefault />
    </Canvas>
  
  )
}
export default ComputerModelContainer