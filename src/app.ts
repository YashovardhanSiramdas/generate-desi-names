import desiNames from "./desiNames";
export const generateDesiName = () => desiNames[Math.floor(Math.random() * desiNames.length)];