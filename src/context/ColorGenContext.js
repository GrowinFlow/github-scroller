import { createContext, useState, useEffect } from "react";

export const ColorGenContext = createContext();


function ColorGen(){
      
    const [copied, setCopied] = useState(false);
    const [color, setColor] = useState('#1d73b4')
    const [steps, setSteps] = useState(21)
    const [shades, setShades] = useState([])
    
    function hexToRgb(hex){
        let r = 0, g = 0, b = 0;
    
        if(hex.length === 4){
            r = parseInt(hex[1] + hex[1],16);
            g = parseInt(hex[2] + hex[2], 16)
            b = parseInt(hex[3] + hex[3], 16)
        }else if (hex.length === 7){
    
            r = parseInt(hex[1] + hex[3],16);
            g = parseInt(hex[3] + hex[4], 16)
            b = parseInt(hex[5] + hex[6], 16)
        }
        return {r, g, b};
    
    }
    function rgbToHex(r, g, b){
        const toHex = (c) => ('0' + c.toString(16)).slice(-2);
         return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }
    
    function generateShades(hexColor) {
        const shades = [];
        const startColor = hexToRgb(hexColor);
    
        // Calculate the number of steps for light and dark shades
        const lightSteps = Math.ceil(steps / 2);
        const darkSteps = Math.floor(steps / 2);
    
        // Generate light shades in reverse order
        for (let i = lightSteps; i > 0; i--) {
            const r = Math.round(startColor.r + (255 - startColor.r) * (i / lightSteps));
            const g = Math.round(startColor.g + (255 - startColor.g) * (i / lightSteps));
            const b = Math.round(startColor.b + (255 - startColor.b) * (i / lightSteps));
            shades.push(rgbToHex(r, g, b));
        }
    
        // Add the original color
        shades.push(hexColor);
    
        // Generate dark shades
        for (let i = 1; i <= darkSteps; i++) {
            const r = Math.round(startColor.r * (1 - i / darkSteps));
            const g = Math.round(startColor.g * (1 - i / darkSteps));
            const b = Math.round(startColor.b * (1 - i / darkSteps));
            shades.push(rgbToHex(r, g, b));
        }
    
        return shades;
    }
    
  
    
    useEffect(()=>{

        const newShades = generateShades(color);
        setShades(newShades)
    
        console.log(newShades)
        setCopied(null);

    
    }, [color, setSteps, steps])
    
    return{
        color,
        setColor,
        copied,
        setCopied,
        shades,
        setShades,
        steps,
        setSteps
        
    };
    
}








export const ColorGenProvider = ({ children }) => {
    const ColorGenValues = ColorGen()
    return (
        <ColorGenContext.Provider value={{ ...ColorGenValues}}>
            {children}
        </ColorGenContext.Provider>
    )
};