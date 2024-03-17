import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

export default function Level5({wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor})
{
    const movingPlatform = useRef()
    const movingPlatformTwo = useRef()
    const factor = 2
    const spacingValue = 25
    const [ timeOffset ] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const z = Math.sin(time + timeOffset) * 2.
        const x = Math.sin(time + timeOffset)
        movingPlatform?.current?.setNextKinematicTranslation({
            x: -3 + (factor * spacingValue),
            y: 0,
            z: z -3
        })
        movingPlatformTwo?.current?.setNextKinematicTranslation({
            x: x + 4.5 + (factor * spacingValue),
            y: 0,
            z: -7.5
        })
    })

    return <>
        <StartText position={[-0.5 + (factor * spacingValue), 1, 8.0]} startTextColor={startTextColor}/>

        //finish text
        <FinishText position={[ -1. + (factor * spacingValue), 1, -19.0]} finishTextColor={finishTextColor}/>

        <RigidBody type="fixed" friction={1}>
            <mesh castShadow position={[-0.5 + (factor * spacingValue), 0.5, 8]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[2. + (factor * spacingValue), 0.5, 3]}>
                <boxGeometry args={[1, 1, 3]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-1.5 + (factor * spacingValue), 0.5, 2]}>
                <boxGeometry args={[6, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[5. + (factor * spacingValue), 0.5, -2.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[4.5 + (factor * spacingValue), 0.5, -1.]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[5. + (factor * spacingValue), 0.5, -10.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[4. + (factor * spacingValue), 0.5, -11]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            
            <mesh castShadow position={[-3. + (factor * spacingValue), 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[2. + (factor * spacingValue), 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            

            <mesh castShadow position={[1. + (factor * spacingValue), 0.5, -14]}>
                <boxGeometry args={[1, 1, 3]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-3. + (factor * spacingValue), 0.5, -10.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

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

        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh receiveShadow position={[-3.5 + (factor * spacingValue) , 0, 3.5]}>
                <boxGeometry args={[10, 0.1, 2]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[-7. + (factor * spacingValue) , 0, 0.5]}>
                <boxGeometry args={[3, 0.1, 4]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[-6.5 + (factor * spacingValue) , 0, -3.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[0.5 + (factor * spacingValue) , 0, -3.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[3.5 + (factor * spacingValue) , 0, -4.]}>
                <boxGeometry args={[2, 0.1, 5]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[2.5 + (factor * spacingValue) , 0, -9.5]}>
                <boxGeometry args={[4, 0.1, 2]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue) , 0, -12.]}>
                <boxGeometry args={[3, 0.1, 7]} />
                <meshToonMaterial color={floorColor} />
            </mesh>

            <mesh receiveShadow position={[-0.5 + (factor * spacingValue), 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={startFloorColor}/>
            </mesh>
            <mesh receiveShadow position={[-0.5 + (factor * spacingValue), 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={finishFloorColor}/>
            </mesh>
        </RigidBody>

        //moving
        <RigidBody ref={movingPlatform} type="kinematicPosition">
            <mesh receiveShadow>
                <boxGeometry args={[3, 0.1, 3]}/>
                <meshToonMaterial color={movingPlatformColor} />
            </mesh>
        </RigidBody>
        <RigidBody ref={movingPlatformTwo} type="kinematicPosition">
            <mesh receiveShadow>
                <boxGeometry args={[2, 0.1, 2]}/>
                <meshToonMaterial color={movingPlatformColor} />
            </mesh>
        </RigidBody>
    </>
}