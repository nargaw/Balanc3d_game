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
                position={[20, 30, 10]}
                intensity={1.5}
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-top={50}
                shadow-camera-right={50}
                shadow-camera-bottom={-50}
                shadow-camera-left={-50}
                ref={directionalLightRef}
            />
            <ambientLight intensity={0.5}/>
        </>
    )
}