import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"
import { useControls } from "leva"

export default function Level1({wallColor, floorColor, startFloorColor, finishFloorColor, startTextColor, finishTextColor})
{

    const factor = -2
    const spacingValue = 25

    return <>
        //start text
        <StartText position={[-0.5 + (factor * spacingValue), 1, 8.0]} startTextColor={startTextColor}/>

        //finish text
        <FinishText position={[ -0.5 + (factor * spacingValue), 1, -19.0]} finishTextColor={finishTextColor}/>

        //walls
        <RigidBody type="fixed" friction={1}>
            <mesh castShadow  position={[-50.5, 0.5, 8]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow  position={[-53., 0.5, 2.]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow  position={[-48., 0.5, 2.]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow  position={[-53., 0.5, -13]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow  position={[-48., 0.5, -13]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>


            <mesh castShadow position={[-50.5, 0.5, -19]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
        </RigidBody>


        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh  receiveShadow position={[-50.5, 0, -5.5]}>
                <boxGeometry args={[4, 0.1, 20]} />
                <meshToonMaterial color={floorColor} />
            </mesh>

            //start
            <mesh  receiveShadow position={[-50.5, 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={startFloorColor}/>
            </mesh>

            //finish
            <mesh  receiveShadow position={[-50.5, 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={finishFloorColor}/>
            </mesh>
        </RigidBody>
    </>
}