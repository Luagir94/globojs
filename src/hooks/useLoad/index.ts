import { useState } from "react";

function useLoad(defaultValue: boolean) {
  const [load, setLoad] = useState(defaultValue);

  const toggleLoad = () =>{
    setLoad(!load)
  }

  return [load, toggleLoad] as const;
}

export default useLoad;