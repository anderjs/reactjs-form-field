import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { github } from 'react-icons-kit/fa/github';
import Icon from 'react-icons-kit';

/**
 * @typedef {React.FC} Navigation
 * @description Navigation allows to show a navbar as a functional component.
 */

const Navigation = (
  {items = [
    { name: 'Github', 
      href: 'https://github.com/anderjs',
      icon: <Icon size={30} icon={github} className="text-light" />
    }]}) => {
  return (
    <Nav className="bg-dark">
      {items.map((item, index) => (
        <NavItem key={index}>
          <NavLink href={item.href}>
            {item.icon}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

export default Navigation;