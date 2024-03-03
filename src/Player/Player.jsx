import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from 'three'

export default function Player()
{

    const [ subscribeKeys, getKeys ] = useKeyboardControls()

    const body = useRef()

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
        console.log(bodyPosition)

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 2.25
        cameraPosition.y += 0.65
        
    })

    return <>
        <RigidBody
            ref={body} 
            colliders="ball" 
            position={[0, 1, 0]}
            canSleep={false}
            restitution={ 0.2 }
            friction={ 1 } 
            linearDamping={ 0.5 }
            angularDamping={ 0.5 }
        >
            <mesh position={[-5.5, 0, 2]}>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshBasicMaterial color='green' />
            </mesh>
        </RigidBody>   
    </>
}