import React from 'react';

const TableTypes = ({types}: any) => {
  return (
    <section className="table-types">
      <h4>{types?.sub_title || ''}</h4>
      {types?.items?.length ? (<ul className="types-ul">
        {types.items.map((item: any, index: number) => (
          <li key={index} className={`types-item ${item.type}`}>
            <span>{item.title}</span>
          </li>))}
      </ul>) : null}
    </section>
  );
};

export default TableTypes;