
import { useEffect, useState, useRef } from "react";

import { 
    CardMedia 
} from "@mui/material";

export default function CardSelection(){
    const [ count, setCount ] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if(prevCount > 2){
                    return 1
                }
                else{
                    return  prevCount + 1
                }
                
            });

        }, 1000);
        
        return () => clearInterval(interval);

    }, []);
    
    return (

        <>
            {
                (count === 1)?
                <CardMedia
                    component="img"
                    height={50}
                    image={"/assets/Mastercard-logo.png"}
                    alt="mastercard logo"
                    sx={{
                        objectFit:'contain',
                    }}
                />
                :<></>
            }

            {
                (count === 2)?
                <CardMedia
                    component="img"
                    height={50}
                    image={"/assets/american_express.png"}
                    alt="ZAMTEL money logo"
                    sx={{
                        objectFit:'contain',
                    }}
                />
                :<></>
            }

            {
                (count=== 3)?
                <CardMedia
                    component="img"
                    height={50}
                    image={"/assets/visa-card-logo.png"}
                    alt="ZAMTEL money logo"
                    sx={{
                        objectFit:'contain',
                    }}
                />
                :<></>
            }
            
            

            
        </>
    )
}