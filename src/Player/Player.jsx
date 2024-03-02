import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

export default function Player()
{

    const [ subscribeKeys, getKeys ] = useKeyboardControls()

    useFrame(() => 
    {
        const {forward, backward, leftward, rightward}  = getKeys()
        
    })

    return <>
        <RigidBody 
            colliders="ball" 
            position={[0, 1, 0]}
            canSleep={false}
            restitution={0.2}
            friction={1}
        >
            <mesh position={[-5.5, 0, 2]}>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshBasicMaterial color='green' />
            </mesh>
        </RigidBody>   
    </>
}