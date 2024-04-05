import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function Level7({wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor})
{
    const movingPlatform1 = useRef()
    const movingPlatform2 = useRef()
    const movingPlatform3 = useRef()
    const factor = 4
    const spacingValue = 25
    const [ timeOffset ] = useState(() => Math.random() * Math.PI * 2)
    const [ timeOffset2 ] = useState(() => Math.random() * Math.PI * 2)
    const [ timeOffset3 ] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const z = Math.sin(time + timeOffset)
        const z2 = Math.sin(time + timeOffset2)
        const z3 = Math.cos(time + timeOffset2 + 1)

        movingPlatform1?.current?.setNextKinematicTranslation({
            x: -1 + (factor * spacingValue),
            y: 0,
            z: z-1
        })

        movingPlatform2?.current?.setNextKinematicTranslation({
            x: -1 + (factor * spacingValue),
            y: 0,
            z: z2-6.5
        })

        movingPlatform3?.current?.setNextKinematicTranslation({
            x: -1 + (factor * spacingValue),
            y: 0,
            z: z3-10.5
        })

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

            //walls
            <mesh castShadow position={[-9 + (factor * spacingValue), 0.5, 2]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-8.5 + (factor * spacingValue), 0.5, 3]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[-9 + (factor * spacingValue), 0.5, -4]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-8.5 + (factor * spacingValue), 0.5, -5]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[8 + (factor * spacingValue), 0.5, -4]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[7.5 + (factor * spacingValue), 0.5, -3]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[8 + (factor * spacingValue), 0.5, -13]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[7.5 + (factor * spacingValue), 0.5, -14]}>
                <boxGeometry args={[2, 1, 1]}/>
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
            <mesh receiveShadow position={[-1. + (factor * spacingValue), 0, 3]}>
                <boxGeometry args={[3, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1. + (factor * spacingValue), 0, -14]}>
                <boxGeometry args={[3, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-5.5 + (factor * spacingValue), 0, 2]}>
                <boxGeometry args={[6, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-8. + (factor * spacingValue), 0, -1.5]}>
                <boxGeometry args={[1, 0.1, 6]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[0 + (factor * spacingValue), 0, -4]}>
                <boxGeometry args={[15, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[7 + (factor * spacingValue), 0, -9]}>
                <boxGeometry args={[1, 0.1, 9]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[3.5 + (factor * spacingValue), 0, -13]}>
                <boxGeometry args={[6, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
        </RigidBody>

        //moving
        <RigidBody ref={movingPlatform1} type="kinematicPosition">
            <mesh receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 3]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={movingPlatform2} type="kinematicPosition">
            <mesh receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[2.5, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>

        <RigidBody ref={movingPlatform3} type="kinematicPosition">
            <mesh receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[2, 0.1, 2]} />
                <meshToonMaterial color={movingPlatformColor}/>
            </mesh>
        </RigidBody>
    </>
}