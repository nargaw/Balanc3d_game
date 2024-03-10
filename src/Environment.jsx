import { Grid } from "@react-three/drei";

import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2";
import Level3 from "./Levels/Level3";

export default function Environment(){


    return <>
        <Grid 
            args={[300, 300]}
            sectionColor={"gray"}
            cellColor={"gray"}
            position={[0.5, 0.005, 0.5]}
        />
        
        <Level1 />
        <Level2 />
        <Level3 />
    </>
}