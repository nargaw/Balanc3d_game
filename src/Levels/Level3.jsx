import { RigidBody } from "@react-three/rapier"
import StartText from "./StartText"
import FinishText from "./FinishText"

export default function Level3()
{
    const factor = 0
    const spacingValue = 25

    return <>

        //start text
        <StartText position={[-5.45 + (factor * spacingValue), 1, 8.0]} />

        //finish text
        <FinishText position={[ -0.5 + (factor * spacingValue), 1, -19.0]} />

        //walls
        <RigidBody type="fixed" friction={1}>
            <mesh castShadow position={[-5.5, 0.5, 8]}>
                <boxGeometry args={[6, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-8, 0.5, 2.0]}>
                <boxGeometry args={[1, 1, 11]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-3, 0.5, 4]}>
                <boxGeometry args={[1, 1, 7]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-0.5, 0.5, 1]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[1, 0.5, -0.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-5.5, 0.5, -3]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-4., 0.5, -4.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[1, 0.5, -7]}>
                <boxGeometry args={[1, 1, 5]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-2, 0.5, -9]}>
                <boxGeometry args={[5, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-4, 0.5, -11.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-2.5, 0.5, -13]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-3.5, 0.5, -16]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-7., 0.5, -16]}>
                <boxGeometry args={[5, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-9, 0.5, -14.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[2, 0.5, -17.]}>
                <boxGeometry args={[1, 1, 3]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-3, 0.5, -17.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
            <mesh castShadow position={[-0.5, 0.5, -19.]}>
                <boxGeometry args={[6, 1, 1]}/>
                <meshStandardMaterial color='#040F16' />
            </mesh>
        </RigidBody>

        //floor
        <RigidBody type="fixed" friction={1}>
            <mesh receiveShadow position={[-5.5, 0, 1]}>
                <boxGeometry args={[4, 0.1, 7]}/>
                <meshStandardMaterial color='#000022' />
            </mesh>
            <mesh receiveShadow position={[-1.5, 0, -4.]}>
                <boxGeometry args={[4, 0.1, 9]}/>
                <meshStandardMaterial color='#000022' />
            </mesh>
            <mesh receiveShadow position={[-6., 0, -7.]}>
                <boxGeometry args={[5, 0.1, 3]}/>
                <meshStandardMaterial color='#000022' />
            </mesh>
            <mesh receiveShadow position={[-6.5, 0, -12.]}>
                <boxGeometry args={[4, 0.1, 7]}/>
                <meshStandardMaterial color='#000022' />
            </mesh>
            <mesh receiveShadow position={[-1.5, 0, -14.5]}>
                <boxGeometry args={[6, 0.1, 2]}/>
                <meshStandardMaterial color='#000022' />
            </mesh>

            //end
            <mesh receiveShadow position={[-0.5, 0, -17.]}>
                <boxGeometry args={[4, 0.1, 3]}/>
                <meshBasicMaterial color='red' />
            </mesh>

            //start
            <mesh position={[-5.5, 0, 6.]}>
                <boxGeometry args={[4, 0.1, 3]} />
                <meshBasicMaterial color={'green'}/>
            </mesh>
        </RigidBody>
    </>
}