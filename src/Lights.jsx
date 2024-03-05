import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three'

export default function Lights(){

    const directionalLightRef = useRef()

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)

    return (
        <>
            <directionalLight 
                castShadow
                position={[10, 10, 10]}
                intensity={12.5}
                shadow-mapSize={[2048, 2048]}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-top={50}
                shadow-camera-right={50}
                shadow-camera-bottom={-50}
                shadow-camera-left={-50}
                ref={directionalLightRef}
            />
            <ambientLight intensity={10.5}/>
        </>
    )
}