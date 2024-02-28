import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas shadows camera={{fov: 50, position: [0, 1.5, 5]}} >
            <OrbitControls 
                maxDistance={30}
                minDistance={5}
                maxPolarAngle={Math.PI * 0.45}
            />
            <Experience />
        </Canvas>
    </>
)