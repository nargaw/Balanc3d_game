import { RigidBody } from "@react-three/rapier"

export default function Level3()
{
    return <>
        <RigidBody type="fixed" friction={1}>
            <mesh position={[-8, 0.5, 0]}>
                <boxGeometry args={[1, 1, 7]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-3, 0.5, 2]}>
                <boxGeometry args={[1, 1, 3]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-0.5, 0.5, 1]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[1, 0.5, -0.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-5.5, 0.5, -3]}>
                <boxGeometry args={[4, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-4., 0.5, -4.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[1, 0.5, -7]}>
                <boxGeometry args={[1, 1, 5]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-2, 0.5, -9]}>
                <boxGeometry args={[5, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-4, 0.5, -11.5]}>
                <boxGeometry args={[1, 1, 4]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-2.5, 0.5, -13]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-3.5, 0.5, -16]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-8.5, 0.5, -16]}>
                <boxGeometry args={[2, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-9, 0.5, -14.5]}>
                <boxGeometry args={[1, 1, 2]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[2, 0.5, -18.5]}>
                <boxGeometry args={[1, 1, 6]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-3, 0.5, -19.]}>
                <boxGeometry args={[1, 1, 5]}/>
                <meshNormalMaterial />
            </mesh>
            <mesh position={[-0.5, 0.5, -22.]}>
                <boxGeometry args={[6, 1, 1]}/>
                <meshNormalMaterial />
            </mesh>
        </RigidBody>

        <RigidBody type="fixed" friction={1}>
            <mesh position={[-5.5, 0, 0.5]}>
                <boxGeometry args={[4, 0.1, 6]}/>
                <meshBasicMaterial color={'red'} />
            </mesh>
            <mesh position={[-1.5, 0, -4.]}>
                <boxGeometry args={[4, 0.1, 9]}/>
                <meshBasicMaterial color={'red'} />
            </mesh>
            <mesh position={[-6., 0, -7.]}>
                <boxGeometry args={[5, 0.1, 3]}/>
                <meshBasicMaterial color={'red'} />
            </mesh>
            <mesh position={[-6.5, 0, -12.]}>
                <boxGeometry args={[4, 0.1, 7]}/>
                <meshBasicMaterial color={'red'} />
            </mesh>
            <mesh position={[-1.5, 0, -14.5]}>
                <boxGeometry args={[6, 0.1, 2]}/>
                <meshBasicMaterial color={'red'} />
            </mesh>
            <mesh position={[-0.5, 0, -18.5]}>
                <boxGeometry args={[4, 0.1, 6]}/>
                <meshBasicMaterial color={'red'} />
            </mesh>
        </RigidBody>
    </>
}