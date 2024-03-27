import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function Level10({wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor})
{
    
    const factor = 7
    const spacingValue = 25
    const movingPlatform1 = useRef()
    const movingPlatform2 = useRef()
    const spinner1 = useRef()

    const [ timeOffset ] = useState(() => Math.random() * Math.PI * 2)
    const [ timeOffset2 ] = useState(() => Math.random() * Math.PI )
    const [ timeOffset3 ] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const value1 = Math.sin(time + timeOffset)
        const value2 = Math.sin(time + timeOffset2) * 4
        const value3 = time 

        movingPlatform1?.current?.setNextKinematicTranslation({
            x: -1 + (factor * spacingValue),
            y: 0,
            z: value1 - 6.5
        })

        movingPlatform2?.current?.setNextKinematicTranslation({
            x: -1 + value2 + (factor * spacingValue),
            y: 0,
            z: -9.
        })

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, value3, 0))
        spinner1?.current?.setNextKinematicRotation(rotation)

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
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, 3.]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -14]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, 1]}>
                <boxGeometry args={[7, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-4 + (factor * spacingValue), 0, -1.]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[2 + (factor * spacingValue), 0, -1.]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -3]}>
                <boxGeometry args={[7, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -4]}>
                <boxGeometry args={[1, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -12]}>
                <boxGeometry args={[13, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-7 + (factor * spacingValue), 0, -10.5]}>
                <boxGeometry args={[1, 0.1, 2]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[5 + (factor * spacingValue), 0, -10.5]}>
                <boxGeometry args={[1, 0.1, 2]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
        </RigidBody>

        //moving
        <RigidBody ref={movingPlatform1} type="kinematicPosition">
            <mesh receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[1, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>
        <RigidBody ref={movingPlatform2} type="kinematicPosition">
            <mesh receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[5, 0.1, 1]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        //spinner
        <RigidBody ref={spinner1} type="kinematicPosition" position={[-1. + (factor * spacingValue), 0.5, -1.0]}>
            <mesh position-z={-1.5}>
                <boxGeometry args={[0.5, 0.5, 3]} />
                <meshToonMaterial color={movingPlatformColor} />
            </mesh>
        </RigidBody>
    </>
}