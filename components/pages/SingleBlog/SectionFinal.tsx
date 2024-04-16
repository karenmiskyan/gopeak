import React from 'react';

export interface SectionFinalProps {
  final: any;
}

const SectionFinal = ({final}: SectionFinalProps) => {
  const {final_title,final_content} = final;
  
  return (
    <>
      <section className="section-final">
        {final_title && (<h4>{final_title}</h4>)}
        <div className="final-content" dangerouslySetInnerHTML={{__html: final_content || ''}}></div>
      </section>
    </>
  );
};

export default SectionFinal;