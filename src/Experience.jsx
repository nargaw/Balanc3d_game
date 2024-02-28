import { Light } from "three"
import Environment from "./Environment"
import Lights from "./Lights"
import TestObj from "./TestObj"
import { Physics } from "@react-three/rapier"

export default function Experience()
{
    return <>
        <Physics debug>
            <TestObj />
            <Environment />        
        </Physics>
        <Lights />
        
    </>
}