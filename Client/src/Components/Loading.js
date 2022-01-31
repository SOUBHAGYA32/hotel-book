import React,{useState} from 'react';

import HashLoader from "react-spinners/HashLoader";
function Loading() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#000");
  return (
    <div style={{marginTop : '150px'}}>
        <div className="sweet-loading text-center">
            <HashLoader color={color} loading={loading}  size={100} />
        </div>
    </div>
  );
}

export default Loading;
