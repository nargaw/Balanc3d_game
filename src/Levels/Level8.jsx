import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function Level8({wallColor, floorColor, startFloorColor, finishFloorColor, movingPlatformColor, startTextColor, finishTextColor})
{
    
    const factor = 5
    const spacingValue = 25
    

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
            <mesh castShadow position={[-10 + (factor * spacingValue), 0.5, 2]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-9.5 + (factor * spacingValue), 0.5, 3]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[-10 + (factor * spacingValue), 0.5, -14]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-9.5 + (factor * spacingValue), 0.5, -15]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[-4 + (factor * spacingValue), 0.5, -14]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-4.5 + (factor * spacingValue), 0.5, -15]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[-6 + (factor * spacingValue), 0.5, -1]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[-5.5 + (factor * spacingValue), 0.5, 0]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[9 + (factor * spacingValue), 0.5, -1]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[8.5 + (factor * spacingValue), 0.5, 0]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[9 + (factor * spacingValue), 0.5, -14]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[8.5 + (factor * spacingValue), 0.5, -15]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[2 + (factor * spacingValue), 0.5, -14]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[2.5 + (factor * spacingValue), 0.5, -15]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow position={[1 + (factor * spacingValue), 0.5, 2]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow position={[.5 + (factor * spacingValue), 0.5, 1]}>
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
            
            <mesh receiveShadow position={[-6 + (factor * spacingValue), 0, 2]}>
                <boxGeometry args={[7, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-9. + (factor * spacingValue), 0, -6.5]}>
                <boxGeometry args={[1, 0.1, 16]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-6.5 + (factor * spacingValue), 0, -14]}>
                <boxGeometry args={[4, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-5 + (factor * spacingValue), 0, -7]}>
                <boxGeometry args={[1, 0.1, 13]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[2. + (factor * spacingValue), 0, -1]}>
                <boxGeometry args={[13, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[8 + (factor * spacingValue), 0, -8]}>
                <boxGeometry args={[1, 0.1, 13]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[5. + (factor * spacingValue), 0, -14]}>
                <boxGeometry args={[5, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[3 + (factor * spacingValue), 0, -12]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[4.5 + (factor * spacingValue), 0, -11]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[5 + (factor * spacingValue), 0, -9]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[3.5 + (factor * spacingValue), 0, -8]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[3 + (factor * spacingValue), 0, -6.]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[4.5 + (factor * spacingValue), 0, -5]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[3.5 + (factor * spacingValue), 0, -8]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[5 + (factor * spacingValue), 0, -3.5]}>
                <boxGeometry args={[1, 0.1, 2]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[2.5 + (factor * spacingValue), 0, -3]}>
                <boxGeometry args={[4, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[1 + (factor * spacingValue), 0, -5.5]}>
                <boxGeometry args={[1, 0.1, 4]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-0.5 + (factor * spacingValue), 0, -7]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -4.5]}>
                <boxGeometry args={[1, 0.1, 4]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-2.5 + (factor * spacingValue), 0, -3]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-3 + (factor * spacingValue), 0, -6.5]}>
                <boxGeometry args={[1, 0.1, 6]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1.5 + (factor * spacingValue), 0, -9]}>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
            <mesh receiveShadow position={[-1 + (factor * spacingValue), 0, -12.5]}>
                <boxGeometry args={[1, 0.1, 6]} />
                <meshToonMaterial color={floorColor}/>
            </mesh>
        </RigidBody>

    </>
}