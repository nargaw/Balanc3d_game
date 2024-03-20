import { useState } from "react"
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"

export default function ChaseCamera({body})
{

    const [ smoothedCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
    const [ smoothedCameraTarget ] = useState(() => new THREE.Vector3())


    useFrame((state, delta) => {
        if(body.current){
            const bodyPosition = body.current.translation()
            const cameraPosition = new THREE.Vector3()
            cameraPosition.copy(bodyPosition)
            cameraPosition.z += 5.25
            cameraPosition.y += 12.5

            const cameraTarget = new THREE.Vector3()
            cameraTarget.copy(bodyPosition)
            cameraTarget.y += 0.25

            smoothedCameraPosition.lerp(cameraPosition,3 * delta)
            smoothedCameraTarget.lerp(cameraTarget, 3 * delta)

            state.camera.position.copy(smoothedCameraPosition)
            state.camera.lookAt(smoothedCameraTarget)
        }   
        }
    )
    

    return <></>
}