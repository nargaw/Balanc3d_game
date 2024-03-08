import { useMatcapTexture, Center, Text3D } from "@react-three/drei"
import * as THREE from 'three'

export default function FinishText({position})
{

    const matcapDark = new THREE.TextureLoader().load('./Matcaps/matcapBlackShiny.png')

    return <>
        <Center position={position}
                rotation-x={-Math.PI * 0.5}>
            <Text3D
                font="./Fonts/Madimi.json"
                size={ 0.65 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
                castShadow
            >
                finish
                {/* <meshNormalMaterial /> */}
                <meshMatcapMaterial matcap={matcapDark}/>
            </Text3D>
        </Center>
    </>
}