import { Grid } from "@react-three/drei";

import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2";
import Level3 from "./Levels/Level3";
import Level4 from "./Levels/Level4";
import Level5 from "./Levels/Level5";

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
        <Level4 />
        <Level5 />
    </>
}