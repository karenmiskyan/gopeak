import React from 'react';

const TableContent = ({tableContent}:any) => {
  const scrollToElement = (el: string) => {
    const targetElement = document.getElementById(el) as HTMLElement;
    
    if(targetElement) {
      const offset = -87; // Adjust the offset as needed
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  
      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth',
      });
    }
  };
  
  
  return (
    <section className="table-content">
      <h3>Table of content</h3>
      <div className="table">
        {tableContent.map((item: any, index: number) => (
          <div key={index} className={`table-item ${item.type}`}>
            {/*<span className="num">{item.num}.</span>*/}
            <a href={`#${item.id}`} onClick={(e) => {e.preventDefault();scrollToElement(item.id)}}>{item.title}</a>
          </div>))}
      </div>
    </section>
  );
};

export default TableContent;