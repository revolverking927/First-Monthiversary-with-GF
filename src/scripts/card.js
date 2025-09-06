import { startHeartAnimation } from "../modules/backgroundModule.js";


document.addEventListener('DOMContentLoaded', () => {
    
    const stopAnimation = startHeartAnimation();
    console.log('Loaded')
})