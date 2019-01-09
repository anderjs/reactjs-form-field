import React from 'react';

/**
 * @typedef {React.SFC} Filter
 * @prop {array} items The items that are being filtered.
 * @prop {function} onSelect Will make a static value in the input.
 */
const Filter = ({ items = [], onSelectItem}) => {
  if(items.length === 0) {
    return null;
  }
  return (
    <div className="list-group-item text-capitalize">
      {items.map((item, index) => (
        <div 
          className="query"
          style={{cursor: 'pointer'}} 
          key={index}
          onClick={() => onSelectItem(item)}
          >
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default Filter;