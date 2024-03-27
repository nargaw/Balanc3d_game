import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function Level9({wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor})
{
    
    const factor = 6
    const spacingValue = 25
    const platform1 = useRef()
    const platform2 = useRef()
    const platform3 = useRef()
    const platform4 = useRef()
    const platform5 = useRef()
    const platform6 = useRef()
    const platform7 = useRef()
    const platform8 = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const value1 = Math.sin((time))/4
        const rotation1 = new THREE.Quaternion()
        rotation1.setFromEuler(new THREE.Euler(0, 0, value1))
        platform1?.current?.setNextKinematicRotation(rotation1)

        const value2 = Math.sin((time * 0.95))/4
        const rotation2 = new THREE.Quaternion()
        rotation2.setFromEuler(new THREE.Euler(0, 0, value2))
        platform2?.current?.setNextKinematicRotation(rotation2)

        const value3 = Math.sin((time * 0.90))/4
        const rotation3 = new THREE.Quaternion()
        rotation3.setFromEuler(new THREE.Euler(0, 0, value3))
        platform3?.current?.setNextKinematicRotation(rotation3)

        const value4 = Math.sin((time * 0.85))/4
        const rotation4 = new THREE.Quaternion()
        rotation4.setFromEuler(new THREE.Euler(0, 0, value4))
        platform4?.current?.setNextKinematicRotation(rotation4)

        const value5 = Math.sin((time * 0.8))/4
        const rotation5 = new THREE.Quaternion()
        rotation5.setFromEuler(new THREE.Euler(0, 0, value5))
        platform5?.current?.setNextKinematicRotation(rotation5)

        const value6 = Math.sin((time * 0.75))/4
        const rotation6 = new THREE.Quaternion()
        rotation6.setFromEuler(new THREE.Euler(0, 0, value6))
        platform6?.current?.setNextKinematicRotation(rotation6)

        const value7 = Math.sin((time * 0.7))/4
        const rotation7 = new THREE.Quaternion()
        rotation7.setFromEuler(new THREE.Euler(0, 0, value7))
        platform7?.current?.setNextKinematicRotation(rotation7)

        const value8 = Math.sin((time * 0.65))/4
        const rotation8 = new THREE.Quaternion()
        rotation8.setFromEuler(new THREE.Euler(0, 0, value8))
        platform8?.current?.setNextKinematicRotation(rotation8)

    })

    return <>
        <StartText position={[-1 + (factor * spacingValue), 1, 8.0]} startTextColor={startTextColor}/>

        //finish text
        <FinishText position={[ -1. + (factor * spacingValue), 1, -19.0]} finishTextColor={finishTextColor}/>

        <RigidBody type="fixed" friction={1}>

            //start box
            <mesh castShadow position={[-1 + (factor * spacingValue), 0.5, 8]}>
                <boxGeometry args={[3, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-3. + (factor * spacingValue), 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[1. + (factor * spacingValue), 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            //finish box
            <mesh castShadow position={[-3. + (factor * spacingValue), 0.5, -17.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[1. + (factor * spacingValue), 0.5, -17.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-1. + (factor * spacingValue), 0.5, -19]}>
                <boxGeometry args={[3, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            
        </RigidBody>

        <RigidBody type="fixed" friction={1}>
            //start floor
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, 6.]}>
                <boxGeometry args={[3, 0.1, 3]} />
                <meshToonMaterial color={startFloorColor}/>
            </mesh>


            //end floor
            <mesh receiveShadow position={[-1. + (factor * spacingValue), 0, -17.]}>
                <boxGeometry args={[3, 0.1, 3]} />
                <meshToonMaterial color={finishFloorColor}/>
            </mesh>

            //playing floor
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, 3.5]}>
                <boxGeometry args={[1, 0.1, 2]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -14.5]}>
                <boxGeometry args={[1, 0.1, 2]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
        </RigidBody>

        //moving
        <RigidBody ref={platform1} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, 1.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={platform2} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -0.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={platform3} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -2.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
            
        </RigidBody>
        <RigidBody ref={platform4} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -4.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={platform5} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -6.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={platform6} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -8.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
            
        </RigidBody>
        <RigidBody ref={platform7} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -10.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={platform8} type="kinematicPosition" position={[(factor * spacingValue) -1, 0, -12.5]}>
            <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

    

    </>
}