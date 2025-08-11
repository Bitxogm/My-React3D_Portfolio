import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Keyboard } from "../3d-react-objects/Keyboard"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const KeyboardContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading..."></Suspense>
      <Stage environment="night" intensity={3} >
      <Keyboard />
      </Stage>

      <OrbitControls enableZoom= {false} autoRotate/>
      <PerspectiveCamera position={[1,0,1.8]} zoom={1} makeDefault />
    </Canvas>
  
  )
}
export default KeyboardContainer;