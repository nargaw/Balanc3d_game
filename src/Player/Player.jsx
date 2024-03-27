import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import useGame from "../stores/useGame";
import platform from "platform";
import ChaseCamera from "./chaseCamera";
import KeyboardControls from "./keyboardControls";

export default function Player()
{

    const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const level = useGame((state) => state.level)
    const restart = useGame((state) => state.restart)
    const phase = useGame((state) => state.phase)
    const levelUp = useGame((state) => state.levelUp)
    const died = useGame((state) => state.died)
    const gameOver = useGame((state) => state.gameOver)
    const lossCount = useGame((state) => state.lossCount)
    
    const matcapDark = new THREE.TextureLoader().load('./Matcaps/matcapBlackShiny.png')
    // console.log(phase, level)

    const factor = 25
    const maxLevel = 10

    // console.log(factor * (level - 3))

    const startPositions = {
        1: {x: -0.5 + factor * (level - 3), y: 1, z: 6 },
        2: {x: -0.5 + factor * (level - 3), y: 1, z: 6 },
        3: {x: -5.5 + factor * (level - 3), y: 1, z: 6 },
        4: {x: -0.5 + factor * (level - 3), y: 1, z: 6 },
        5: {x: -0.5 + factor * (level - 3), y: 1, z: 6 },
        6: {x: -1 + factor * (level - 3), y: 1, z: 6 },
        7: {x: -1 + factor * (level - 3), y: 1, z: 6 },
        8: {x: -1 + factor * (level - 3), y: 1, z: 6 },
        9: {x: -1 + factor * (level - 3), y: 1, z: 6 },
        10: {x: -1 + factor * (level - 3), y: 1, z: 6 },
    } 

    const [ subscribeKeys, getKeys ] = useKeyboardControls()


    const body = useRef()
    const mesh = useRef()

    const reset = (currentLevel) => 
    {
        body.current.setTranslation(startPositions[currentLevel])
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    /**
     * device orientation
     */
    let upDown
    let leftRight

    const handleOrientation = (e) => {
        upDown = -(e.beta / 180) * 4
        leftRight = (e.gamma /90 / 2) * 4
    }

    window.addEventListener('deviceorientation', handleOrientation, true)

    useEffect(() =>
    {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) =>
            {
                if(value === 'ready')
                    reset(level)
                    // console.log(level)
            }
        )

        return () => 
        {
            unsubscribeReset()
        }
    }, [level])

    useFrame((state, delta) => 
    {
        const {forward, backward, leftward, rightward}  = getKeys()

        const impulse = {x: 0., y: 0, z: 0}
        const torque = {x: 0, y: 0, z: 0}

        const impulseStrength = 0.6 * delta
        const torqueStrength = 0.2 * delta 
        
        //device orientation
        if(upDown > 0.05){
            impulse.z -= impulseStrength * upDown
            torque.x -= torqueStrength * upDown
        }

        if(upDown < -0.05){
            impulse.z += impulseStrength * -upDown
            torque.x += torqueStrength * -upDown
        }

        if(leftRight > 0.05){
            impulse.x += impulseStrength * leftRight
            torque.z -= torqueStrength * leftRight
        }

        if(leftRight < -0.05){
            impulse.x -= impulseStrength * -leftRight
            torque.z += torqueStrength * -leftRight
        }



        //Keyboard
        if(forward)
        {
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
            body?.current?.applyImpulse(impulse)
            body?.current?.applyTorqueImpulse(torque)

            const bodyPosition = body.current.translation()
           
            if(bodyPosition.z < 4.5){
                start()
            }

            if(bodyPosition.z < -15.5 && bodyPosition.y > 0){
                if(level < maxLevel) {
                    end()
                    levelUp()
                } else {
                    body.current.setTranslation(startPositions[level])
                }
                body.current.setLinvel({ x: 0, y: 0, z: 0 })
                body.current.setAngvel({ x: 0, y: 0, z: 0 })
            }
            if(bodyPosition.y < -4 ){
                died()
                gameOver()
                restart()
                
            }
            if(bodyPosition.y > 2){
                body.current.setTranslation(startPositions[level])
                body.current.setLinvel({ x: 0, y: 0, z: 0 })
                body.current.setAngvel({ x: 0, y: 0, z: 0 })
            }
        }
    })

    return <>
        
        
        <RigidBody
            ref={body} 
            colliders="ball" 
            position={
                [
                    startPositions[level].x,
                    startPositions[level].y,
                    startPositions[level].z,
                ]
            }
            canSleep={false}
            restitution={ 0.2 }
            friction={ 1 } 
            linearDamping={ 0.5 }
            angularDamping={ 0.5 }
        >
            <mesh castShadow ref={mesh} position={[0, 0, 0]}>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshStandardMaterial color='#0094C6' metalness={0.9} roughness={0.1} wireframe />
                {/* <meshMatcapMaterial matcap={matcapDark} /> */}
            </mesh>
        </RigidBody>
        <ChaseCamera body={body}/>
        {/* <KeyboardControls body={body} /> */}
    </>
}