import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import useGame from "./stores/useGame";


export default function Lights(){

    const directionalLightRef = useRef()
    const level = useGame(state => state.level)
    console.log(level)

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)

    useEffect(() => {
        directionalLightRef.current.position.x = 10 + (25 * level) - 50
        directionalLightRef.current.target.position.x = 10 + (25 * level) -50
    }, [level])

    return (
        <>
            <directionalLight 
                castShadow
                position={[10, 10, 10]}
                intensity={10.5}
                shadow-mapSize={[2048, 2048]}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-top={50}
                shadow-camera-right={50}
                shadow-camera-bottom={-50}
                shadow-camera-left={-50}
                ref={directionalLightRef}
            />
            <ambientLight intensity={1.5}/>
        </>
    )
}