import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import ChaseCamera from "../Utils/ChaseCamera";

export default function Player()
{

    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const [ smoothedCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
    const [ smoothedCameraTarget ] = useState(() => new THREE.Vector3())

    const body = useRef()
    const mesh = useRef()

    useFrame((state, delta) => 
    {
        const {forward, backward, leftward, rightward}  = getKeys()

        const impulse = {x: 0., y: 0, z: 0}
        const torque = {x: 0, y: 0, z: 0}

        const impulseStrength = 0.6 * delta 
        const torqueStrength = 0.2 * delta 

        if(forward)
        {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
            // console.log(impulse.z)
        }

        if(rightward)
        {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }

        if(backward)
        {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }
        
        if(leftward)
        {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

        const bodyPosition = body.current.translation()
        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 5.25
        cameraPosition.y += 20.65
    
        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)

        
    })

    return <>
        <RigidBody
            ref={body} 
            colliders="ball" 
            position={[-5.5, 1, 2]}
            canSleep={false}
            restitution={ 0.2 }
            friction={ 1 } 
            linearDamping={ 0.5 }
            angularDamping={ 0.5 }
        >
            <mesh ref={mesh} position={[0, 0, 0]}>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshBasicMaterial color='green' />
            </mesh>
        </RigidBody>
        {/* <ChaseCamera object={mesh} offsetView={new THREE.Vector3(0, 4, 5)}/>    */}
    </>
}