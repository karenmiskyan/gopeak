import React from 'react';

interface AddScriptsProps {
  items: Object[]
}

const AddScripts: React.FC<AddScriptsProps> = ({items}) => {
  return (
    <>
      {items.map((item,index) => <script
        key={`structured-data-${index}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(item)}}
      />)}
    </>
  );
  
};

export default AddScripts;
