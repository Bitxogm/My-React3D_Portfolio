
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Keyboard(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/keyboard.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={4.34}>
          <group name="NZXT_18_-_animation_with_bonesfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Outer_Volume_Control" position={[-16.439, 2.728, -8.696]} rotation={[-1.377, 0, 0]} scale={0.856}>
                  <mesh name="Outer_Volume_Control_Outer_Volume_Control_0" geometry={nodes.Outer_Volume_Control_Outer_Volume_Control_0.geometry} material={materials.Outer_Volume_Control} />
                </group>
                <group name="Side_Buttons" position={[-16.66, 1.651, -5.075]} rotation={[-1.377, 0, 0]} scale={0.356}>
                  <mesh name="Side_Buttons_Side_Buttons_0" geometry={nodes.Side_Buttons_Side_Buttons_0.geometry} material={materials.Side_Buttons} />
                </group>
                <group name="Inner_Volume_Control" position={[-16.439, 2.728, -8.696]} rotation={[-1.377, 0, 0]} scale={173.438}>
                  <mesh name="Inner_Volume_Control_Inner_Volume_Control_0" geometry={nodes.Inner_Volume_Control_Inner_Volume_Control_0.geometry} material={materials.Inner_Volume_Control} />
                </group>
                <group name="Stand" position={[-13.122, 0.942, -9.405]} rotation={[-1.44, 0, 0]} scale={173.438}>
                  <mesh name="Stand_Side_0" geometry={nodes.Stand_Side_0.geometry} material={materials.Side} />
                  <mesh name="Stand_Rubber_0" geometry={nodes.Stand_Rubber_0.geometry} material={materials.Rubber} />
                </group>
                <group name="Bottom_Shell" position={[-16.938, 1.062, 1.904]} rotation={[-1.44, 0, 0]} scale={173.438}>
                  <mesh name="Bottom_Shell_Bottom_Shell_0" geometry={nodes.Bottom_Shell_Bottom_Shell_0.geometry} material={materials.Bottom_Shell} />
                  <mesh name="Bottom_Shell_Side_0" geometry={nodes.Bottom_Shell_Side_0.geometry} material={materials.Side} />
                </group>
                <group name="Rubber_Feet" rotation={[1.702, 0, 0]} scale={0.615}>
                  <mesh name="Rubber_Feet_Rubber_0" geometry={nodes.Rubber_Feet_Rubber_0.geometry} material={materials.Rubber} />
                </group>
                <group name="PCB" position={[10.031, 2.128, -1.309]} rotation={[-1.377, 0, -Math.PI]} scale={100.007}>
                  <mesh name="PCB_LEDs_0" geometry={nodes.PCB_LEDs_0.geometry} material={materials.LEDs} />
                  <mesh name="PCB_PCB_0" geometry={nodes.PCB_PCB_0.geometry} material={materials.material} />
                </group>
                <group name="Top_Shell" position={[-16.938, 1.062, 1.904]} rotation={[-1.377, 0, 0]} scale={173.438}>
                  <mesh name="Top_Shell_Top_Plate_0" geometry={nodes.Top_Shell_Top_Plate_0.geometry} material={materials.Top_Plate} />
                </group>
                <group name="Stabilizer_Base" position={[-7.68, 1.121, 0.403]} rotation={[-1.377, 0, -Math.PI]}>
                  <mesh name="Stabilizer_Base_Stabilizer_2_0" geometry={nodes.Stabilizer_Base_Stabilizer_2_0.geometry} material={materials.Stabilizer_2} />
                </group>
                <group name="wire" position={[-2.886, 1.354, -0.454]} rotation={[0.194, 0, 0]} scale={0.08}>
                  <mesh name="wire_Metal_0" geometry={nodes.wire_Metal_0.geometry} material={materials.Metal} />
                </group>
                <group name="Stabilizer_Base001" position={[11.497, 1.778, -2.944]} rotation={[-1.377, 0, -Math.PI / 2]}>
                  <mesh name="Stabilizer_Base001_Stabilizer_2_0" geometry={nodes.Stabilizer_Base001_Stabilizer_2_0.geometry} material={materials.Stabilizer_2} />
                </group>
                <group name="wire001" position={[10.611, 2.092, -4.216]} rotation={[0.194, Math.PI / 2, 0]} scale={0.08}>
                  <mesh name="wire001_Metal_0" geometry={nodes.wire001_Metal_0.geometry} material={materials.Metal} />
                </group>
                <group name="Stabilizer_Base002" position={[12.019, 2.559, -6.924]} rotation={[-1.377, 0, 0]}>
                  <mesh name="Stabilizer_Base002_Stabilizer_2_0" geometry={nodes.Stabilizer_Base002_Stabilizer_2_0.geometry} material={materials.Stabilizer_2} />
                </group>
                <group name="wire002" position={[10.735, 2.455, -6.064]} rotation={[-2.948, 0, -Math.PI]} scale={0.08}>
                  <mesh name="wire002_Metal_0" geometry={nodes.wire002_Metal_0.geometry} material={materials.Metal} />
                </group>
                <group name="Stabilizer_Base003" position={[11.314, 1.479, -1.419]} rotation={[-1.377, 0, 0]}>
                  <mesh name="Stabilizer_Base003_Stabilizer_2_0" geometry={nodes.Stabilizer_Base003_Stabilizer_2_0.geometry} material={materials.Stabilizer_2} />
                </group>
                <group name="wire003" position={[10.031, 1.375, -0.559]} rotation={[-2.948, 0, -Math.PI]} scale={0.08}>
                  <mesh name="wire003_Metal_0" geometry={nodes.wire003_Metal_0.geometry} material={materials.Metal} />
                </group>
                <group name="Armature" position={[0, 0, 2.778]} rotation={[-1.377, 0, 0]}>
                  <group name="Object_40">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.Switch} skeleton={nodes.Object_51.skeleton} />
                    <skinnedMesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.Keys_Bottom} skeleton={nodes.Object_52.skeleton} />
                    <skinnedMesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.Keys_Top} skeleton={nodes.Object_53.skeleton} />
                    <skinnedMesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.Stabilizer_1} skeleton={nodes.Object_54.skeleton} />
                    <skinnedMesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.Switch_Bottom} skeleton={nodes.Object_55.skeleton} />
                    <skinnedMesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.Switch_Bottom} skeleton={nodes.Object_56.skeleton} />
                    <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.Switch_Mid} skeleton={nodes.Object_57.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/keyboard.glb');
export default Keyboard;
