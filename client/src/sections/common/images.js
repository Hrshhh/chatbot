import {getAssetPath} from "../../utils";

const imagePath = (filename) => {
    getAssetPath(`${import.meta.env.VITE_APP_URL}/assets/images/${filename}`);
}

export const images = {
    
}