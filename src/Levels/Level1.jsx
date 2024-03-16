import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"

export default function Level1()
{

    const factor = -2
    const spacingValue = 25

    return <>
        //start text
        <StartText position={[-0.5 + (factor * spacingValue), 1, 8.0]} />

        //finish text
        <FinishText position={[ -0.5 + (factor * spacingValue), 1, -19.0]} />

        //walls
        <RigidBody type="fixed" friction={1}>
            <mesh position={[-50.5, 0.5, 8]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh position={[-53., 0.5, 2.]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh position={[-48., 0.5, 2.]}>
                <boxGeometry args={[1, 1, 13]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>

            <mesh position={[-53., 0.5, -12.5]}>
                <boxGeometry args={[1, 1, 14]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>

            <mesh position={[-48., 0.5, -12.5]}>
                <boxGeometry args={[1, 1, 14]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>


            <mesh position={[-50.5, 0.5, -19]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
        </RigidBody>


        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh position={[-50.5, 0, -5.5]}>
                <boxGeometry args={[4, 0.1, 20]} />
                <meshStandardMaterial color='#000022' />
            </mesh>

            //start
            <mesh position={[-50.5, 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={'green'}/>
            </mesh>

            //finish
            <mesh position={[-50.5, 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshToonMaterial color={'red'}/>
            </mesh>
        </RigidBody>
    </>
}