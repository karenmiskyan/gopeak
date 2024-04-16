import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/assets/loading-animation.json";

const Loading: React.FC<{}> = () => {
  return (
    <div className='overlay-loading'>
    <div className='loading-container' style={{maxWidth: '200px', 'margin': '0 auto'}}>
      <Lottie animationData={loadingAnimation} height={200} width={200} loop={true}/>
    </div>
    </div>
  )
};

export default Loading;