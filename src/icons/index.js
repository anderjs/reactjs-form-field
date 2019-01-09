import React from 'react';
import Icon from 'react-icons-kit';
import { remove } from 'react-icons-kit/fa/remove';

export const IconRemove  = ({size, className, onClick}) => {
  return <Icon size={size} className={className} icon={remove} onClick={onClick}/>
};