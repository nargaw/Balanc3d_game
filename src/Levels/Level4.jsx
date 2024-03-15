import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"

export default function Level4()
{
    const factor = 1
    const spacingValue = 25

    return <>
        <StartText position={[-0.5 + (factor * spacingValue), 1, 8.0]} />

        //finish text
        <FinishText position={[ -0.5 + (factor * spacingValue), 1, -19.0]} />

        <RigidBody type="fixed" friction={1}>
            <mesh position={[-0.5 + (factor * spacingValue), 0.5, 8]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh position={[-3. + (factor * spacingValue), 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh position={[2. + (factor * spacingValue), 0.5, 6.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>

            <mesh position={[-3. + (factor * spacingValue), 0.5, -17.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>

            <mesh position={[2. + (factor * spacingValue), 0.5, -17.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>


            <mesh position={[-0.5 + (factor * spacingValue), 0.5, -19]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
        </RigidBody>

        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh position={[-0.5 + (factor * spacingValue) , 0, -5.5]}>
                <boxGeometry args={[4, 0.1, 20]} />
                <meshStandardMaterial color='#000022' />
            </mesh>
            <mesh position={[-0.5 + (factor * spacingValue), 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshBasicMaterial color={'green'}/>
            </mesh>
            <mesh position={[-0.5 + (factor * spacingValue), 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshBasicMaterial color={'red'}/>
            </mesh>
        </RigidBody>
    </>
}