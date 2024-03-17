import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"

export default function Level2({wallColor, floorColor, startFloorColor, finishFloorColor, startTextColor, finishTextColor})
{

    const factor = -1
    const spacingValue = 25

    return <>
        //start text
        <StartText position={[-0.5 + (factor * spacingValue), 1, 8.0]} startTextColor={startTextColor}/>

        //finish text
        <FinishText position={[ -0.5 + (factor * spacingValue), 1, -19.0]} finishTextColor={finishTextColor}/>

        <RigidBody type="fixed" friction={1}>
            <mesh castShadow  position={[-25.5, 0.5, 8]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow  position={[-28., 0.5, 2.]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
            <mesh castShadow  position={[-23., 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow  position={[-28., 0.5, -17.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>

            <mesh castShadow  position={[-23., 0.5, -12.5]}>
                <boxGeometry args={[1, 1, 14]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>


            <mesh castShadow  position={[-25.5, 0.5, -19]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshToonMaterial color={wallColor} />
            </mesh>
        </RigidBody>


        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh  receiveShadow position={[-25.5, 0, -5.5]}>
                <boxGeometry args={[4, 0.1, 20]} />
                <meshToonMaterial color={floorColor} />
            </mesh>
            <mesh  receiveShadow position={[-25.5, 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={startFloorColor}/>
            </mesh>
            <mesh  receiveShadow position={[-25.5, 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={finishFloorColor}/>
            </mesh>
        </RigidBody>
    </>
}