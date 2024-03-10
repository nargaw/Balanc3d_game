import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"

export default function Level1()
{
    return <>
        //walls
        <RigidBody type="fixed" friction={1}>

        </RigidBody>


        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh position={[-50.5, 0, -5.5]}>
                <boxGeometry args={[4, 0.1, 20]} />
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-50.5, 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshBasicMaterial color={'green'}/>
            </mesh>
            <mesh position={[-50.5, 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshBasicMaterial color={'red'}/>
            </mesh>
        </RigidBody>
    </>
}