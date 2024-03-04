import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import useGame from "../stores/useGame";

export default function Player()
{

    const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const level = useGame((state) => state.level)
    const restart = useGame((state) => state.restart)
    const phase = useGame((state) => state.phase)
    console.log(phase)

    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const [ smoothedCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
    const [ smoothedCameraTarget ] = useState(() => new THREE.Vector3())

    const body = useRef()
    const mesh = useRef()

    const reset = () => 
    {
        body.current.setTranslation({ x: -5.5, y: 1, z: 2 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    useEffect(() =>
    {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) =>
            {
                if(value === 'ready')
                    reset()
            }
        )

        const unsubscribeAny = subscribeKeys(
            () =>
            {
                start()
            }
        )

        return () => 
        {
            unsubscribeReset()
            unsubscribeAny()
        }
    }, [])

    /**
     * device orientation
     */
    let upDown
    let leftRight

    const handleOrientation = (e) => {
        upDown = -(e.beta / 180) * 2
        leftRight = (e.gamma /90 / 2) * 2
        console.log('updown: ' + upDown)
        console.log('leftRight: ' + leftRight)
    }

    window.addEventListener('deviceorientation', handleOrientation, true)

    useFrame((state, delta) => 
    {
        const {forward, backward, leftward, rightward}  = getKeys()

        const impulse = {x: 0., y: 0, z: 0}
        const torque = {x: 0, y: 0, z: 0}

        const impulseStrength = 0.6 * delta 
        const torqueStrength = 0.2 * delta
        
        if(upDown <= 0.5 && upDown >= -0.5){
            impulse.z = upDown * delta * 0.5
            if(upDown > 0){
                torque.x -= torqueStrength
            } else {
                torque.x += torqueStrength
            }
        }

        if(leftRight <= 0.5 && leftRight >= -0.5){
            impulse.x = upDown * delta * 0.5
            if(leftRight > 0)
            {
                torque.z -= torqueStrength
            } else {
                torque.z += torqueStrength
            }
        }

        // if(forward)
        // {
        //     impulse.z -= impulseStrength
        //     torque.x -= torqueStrength
        // }

        // if(backward)
        // {
        //     impulse.z += impulseStrength
        //     torque.x += torqueStrength
        // }

        // if(rightward)
        // {
        //     impulse.x += impulseStrength
        //     torque.z -= torqueStrength
        // }

        // if(leftward)
        // {
        //     impulse.x -= impulseStrength
        //     torque.z += torqueStrength
        // }

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
        
        if(bodyPosition.z < -15.5){
            end()
        }
        if(bodyPosition.y < -4){
            restart()
        }
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
    </>
}