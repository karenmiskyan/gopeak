import React from 'react';
import Image from "next/image";
export interface LastBlockProps {
  types: any;
}
const LastBLock = ({types}: LastBlockProps) => {
  return (
    <div className="last-block">
      <div className="last-block-title-block">
        {types?.last_block?.icon?
        <div className="icon">
          <Image quality={100} alt="Last block" height={300} width={300} src={types.last_block.icon}/>
        </div>:null}
        {types?.last_block?.title?
          <h4>{types.last_block.title}</h4>
          :null}
      </div>
      <div className="last-block-description-block">
        <div className="content-item-description"
             dangerouslySetInnerHTML={{__html: types?.last_block?.description || ''}}>
        </div>
      </div>
    </div>
  );
};

export default LastBLock;