import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function KeyboardControls({body})
{

    const [ subscribeKeys, getKeys ] = useKeyboardControls()

    useFrame((delta) => {
        const {forward, backward, leftward, rightward}  = getKeys()

        const impulse = {x: 0., y: 0, z: 0}
        const torque = {x: 0, y: 0, z: 0}

        const impulseStrength = 0.6 * delta
        const torqueStrength = 0.2 * delta
        
        //Keyboard
        if(forward)
        {
            console.log(impulse.z)
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }

        if(backward)
        {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }

        if(rightward)
        {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }

        if(leftward)
        {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }

        if(body.current){
            body.current.applyImpulse(impulse)
            body.current.applyTorqueImpulse(torque)
        }
    })


    return <></>
}