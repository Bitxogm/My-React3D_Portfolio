

import { useGLTF } from '@react-three/drei'

export function GamingPc(props) {
  const { nodes, materials } = useGLTF('/gamingpc.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.154}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <group scale={[1.8, 3.7, 4.3]}>
              <mesh geometry={nodes.case_Rough_white_metal_0.geometry} material={materials.Rough_white_metal} />
              <mesh geometry={nodes.case_front_0.geometry} material={materials.front} />
              <mesh geometry={nodes.case_holes_0.geometry} material={materials.holes} />
            </group>
            <group position={[0, -0.001, 0]}>
              <mesh geometry={nodes.front_front_0.geometry} material={materials.front} />
              <mesh geometry={nodes.front_Rough_white_metal_0.geometry} material={materials.Rough_white_metal} />
            </group>
            <group position={[-1.3, 0.3, -4.4]} scale={[0.3, 0.3, 0.1]}>
              <mesh geometry={nodes['legs_metalic-legs_0'].geometry} material={materials['metalic-legs']} />
              <mesh geometry={nodes['legs_legs-foam_0'].geometry} material={materials['legs-foam']} />
            </group>
            <group position={[0, -3.358, 2.356]} rotation={[Math.PI / 2, 0, 0]} scale={17.194}>
              <mesh geometry={nodes.FAN_Thermaltake_Blades_pLASIK_Weis_0.geometry} material={materials.pLASIK_Weis} />
              <mesh geometry={nodes['FAN_Thermaltake_Blades_serveimage_(45)_0'].geometry} material={materials.serveimage_45} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades_Grau_besser_0.geometry} material={materials.Grau_besser} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades_RGB_0.geometry} material={materials.material_14} />
            </group>
            <group position={[0, -3.358, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={17.194}>
              <mesh geometry={nodes.FAN_Thermaltake_Blades001_pLASIK_Weis_0.geometry} material={materials.pLASIK_Weis} />
              <mesh geometry={nodes['FAN_Thermaltake_Blades001_serveimage_(45)_0'].geometry} material={materials.serveimage_45} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades001_Grau_besser_0.geometry} material={materials.Grau_besser} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades001_RGB_0.geometry} material={materials.material_14} />
            </group>
            <group position={[0, -3.358, -2.556]} rotation={[Math.PI / 2, 0, 0]} scale={17.194}>
              <mesh geometry={nodes.FAN_Thermaltake_Blades002_pLASIK_Weis_0.geometry} material={materials.pLASIK_Weis} />
              <mesh geometry={nodes['FAN_Thermaltake_Blades002_serveimage_(45)_0'].geometry} material={materials.serveimage_45} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades002_Grau_besser_0.geometry} material={materials.Grau_besser} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades002_RGB_0.geometry} material={materials.material_14} />
            </group>
            <group position={[-0.484, 3.437, 2.592]} rotation={[Math.PI / 2, 0, 0]} scale={17.194}>
              <mesh geometry={nodes.FAN_Thermaltake_Blades003_pLASIK_Weis_0.geometry} material={materials.pLASIK_Weis} />
              <mesh geometry={nodes['FAN_Thermaltake_Blades003_serveimage_(45)_0'].geometry} material={materials.serveimage_45} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades003_Grau_besser_0.geometry} material={materials.Grau_besser} />
              <mesh geometry={nodes.FAN_Thermaltake_Blades003_RGB_0.geometry} material={materials.material_14} />
            </group>
            <group position={[0, 1.4, 4.284]} scale={[1.8, 3.7, 2.275]}>
              <mesh geometry={nodes.filter_front_0.geometry} material={materials.front} />
              <mesh geometry={nodes.filter_Rough_white_metal001_0.geometry} material={materials['Rough_white_metal.001']} />
            </group>
            <mesh geometry={nodes.panel_Glass001_0.geometry} material={materials['Glass.001']} position={[-1.87, 0, 0]} scale={[0.02, 3.7, 4.3]} />
            <mesh geometry={nodes.psu_cover_Rough_white_metal_0.geometry} material={materials.Rough_white_metal} position={[0, 0, -3.3]} scale={[1.8, 3.7, 1]} />
            <mesh geometry={nodes.gpu_gpu_0.geometry} material={materials.material} position={[0.392, 1.582, 0.762]} rotation={[0, 0, -Math.PI / 2]} scale={[2.115, 0.919, 0.277]} />
            <mesh geometry={nodes.motherboard_motherboard_0.geometry} material={materials.motherboard} position={[1.5, 1.424, 1.329]} scale={[0.05, 2.16, 2.52]} />
            <mesh geometry={nodes.heatsink_heatsink_0.geometry} material={materials.heatsink} position={[0.856, 1.587, 2.334]} rotation={[0, -Math.PI / 2, 0]} scale={[0.392, 0.392, 0.274]} />
            <mesh geometry={nodes['fan_fan-top_0'].geometry} material={materials['fan-top']} position={[0.577, 1.587, 2.334]} rotation={[0, -Math.PI / 2, 0]} scale={0.783} />
            <mesh geometry={nodes.ram_ram_0.geometry} material={materials.material_10} position={[1.224, 0.544, 2.368]} rotation={[0, -Math.PI / 2, 0]} scale={0.995} />
            <mesh geometry={nodes.ram001_ram_0.geometry} material={materials.material_10} position={[1.224, 0.207, 2.368]} rotation={[0, -Math.PI / 2, 0]} scale={0.995} />
            <mesh geometry={nodes['case-back-plate_Rough_white_metal_0'].geometry} material={materials.Rough_white_metal} position={[1.813, 0.3, 0]} rotation={[0, Math.PI / 2, 0]} scale={[4.203, 3.396, 1]} />
            <mesh geometry={nodes.front_fan_blocker_Rough_white_metal_0.geometry} material={materials.Rough_white_metal} position={[0.004, -3.349, 0.01]} scale={[1.76, 0.287, 0.986]} />
            <mesh geometry={nodes.psu_psu_0.geometry} material={materials.material_15} position={[0, 2.106, -3.259]} />
            <mesh geometry={nodes.io_io_0.geometry} material={materials.material_16} position={[1.244, 3.672, 2.451]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.44, 1.59, 1]} />
            <mesh geometry={nodes.Cube001_Rough_white_metal_0.geometry} material={materials.Rough_white_metal} position={[-0.524, 3.9, 0.149]} scale={[0.02, 0.2, 0.9]} />
            <mesh geometry={nodes['case-motherboard-plate_Rough_white_metal_0'].geometry} material={materials.Rough_white_metal} position={[1.574, 0.6, 3.302]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 3.1, 1]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gamingpc.glb');
export default GamingPc;
