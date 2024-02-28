import { RigidBody, CuboidCollider } from "@react-three/rapier"

export default function TestObj()
{
    return(
        <>
            <RigidBody colliders={'cuboid'} restitution={0.5} position={[0, 4, 0]}>
                <mesh castShadow>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </RigidBody>   
        </>
    )
}