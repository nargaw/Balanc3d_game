import { RigidBody } from "@react-three/rapier"
import { useRef, useEffect } from "react"
import * as THREE from 'three'
import { Sparkles } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function LoadExperience()
{

    const loadingBall = useRef()
    const loadLightRef = useRef()
    const floorRef = useRef()

    useFrame((state) => 
    {
        const time = state.clock.getElapsedTime()
        const value = Math.sin((time + 0.5) * 2)/4

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, 0, value))
        floorRef.current.setNextKinematicRotation(rotation)

        const bodyPosition = loadingBall.current.translation()

        if(bodyPosition.y < -20){
            loadingBall.current.setTranslation({x: 0, y: 1, z: 0 })
            loadingBall.current.setLinvel({ x: 0, y: 0, z: 0 })
            loadingBall.current.setAngvel({ x: 0, y: 0, z: 0 })
        }
    })

    return <>
        <RigidBody type="dynamic" colliders="ball" position={[1.5, 1., 0]} friction={0.5} restitution={0.25} ref={loadingBall} >
            <mesh castShadow>
                <icosahedronGeometry args={[0.5, 2]} />
                <meshStandardMaterial color='#0094C6' metalness={0.9} roughness={0.1} wireframe />   
            </mesh>
        </RigidBody>
        
        <RigidBody type="kinematicPosition" colliders="cuboid" friction={0.5} restitution={0.5} ref={floorRef}>
            <mesh position={[0, 0, 0]} rotation-x={-Math.PI * 0.5} receiveShadow>
                <boxGeometry args={[5, 3,  0.1]} />
                <meshToonMaterial color={'#287271'}/>
            </mesh>
        </RigidBody>
        
        <directionalLight
            ref={loadLightRef} 
            castShadow
            position={[15, 15, 0]}
            intensity={5.5}
            shadow-mapSize={[4096, 4096]}
            shadow-camera-near={10}
            shadow-camera-far={50}
            shadow-camera-top={50}
            shadow-camera-right={20}
            shadow-camera-bottom={-50}
            shadow-camera-left={-20}
        />
        <Sparkles scale={[20, 20, 10]} size={4}/>
    </>
}