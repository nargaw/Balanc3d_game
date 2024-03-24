import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function Level6({wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor})
{
    const spinner1 = useRef()
    const spinner2 = useRef()
    const factor = 3
    const spacingValue = 25
    const random = Math.random()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const value = time * 1.25 + random
        const value2 = -time * 1.25 

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, value, 0))

        const rotation2 = new THREE.Quaternion()
        rotation2.setFromEuler(new THREE.Euler(0, value2, 0))

        spinner1?.current?.setNextKinematicRotation(rotation)
        spinner2?.current?.setNextKinematicRotation(rotation2)
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

            //barriers
            {/* <mesh castShadow position={[-2. + (factor * spacingValue), 0.5, -5.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[0. + (factor * spacingValue), 0.5, -5.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshToonMaterial color={wallColor} />
            </mesh> */}
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
            <mesh receiveShadow position={[-1 + (factor * spacingValue) , 0,1]}>
                <boxGeometry args={[3, 0.1, 7]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue) , 0, -12]}>
                <boxGeometry args={[3, 0.1, 7]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue) , 0, -5.5]}>
                <boxGeometry args={[1, 0.1, 6]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
        </RigidBody>

        //spinners
        <RigidBody ref={spinner1} type="kinematicPosition" position={[2.5 + (factor * spacingValue), 0.5, -1.0]}>
            <mesh position-z={-2.5}>
                <boxGeometry args={[0.5, 0.5, 5]} />
                <meshToonMaterial color={movingPlatformColor} />
            </mesh>
        </RigidBody>
        <RigidBody ref={spinner2} type="kinematicPosition" position={[-3.5 + (factor * spacingValue), 0.5, -10.0]}>
            <mesh position-z={-2.5}>
                <boxGeometry args={[0.5, 0.5, 5]} />
                <meshToonMaterial color={movingPlatformColor} />
            </mesh>
        </RigidBody>
    </>
}