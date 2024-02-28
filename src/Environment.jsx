import { Grid } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Environment(){


    return <>
        <Grid 
            args={[300, 300]}
            sectionColor={"gray"}
            cellColor={"gray"}
            position={[0, 0.005, 0]}
        />
        <RigidBody type="fixed">
            <mesh position={[0., -0.1, 0.]}>
                <boxGeometry args={[300, 0.05, 300]} />
                <meshBasicMaterial />
            </mesh>
        </RigidBody>
    </>
}