import React from 'react';
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';

/**
 * @typedef {React.SFC} Profile
 * @prop {string} name
 * @prop {string} field
 * @prop {array} skills
 * @example 'John Doe', 'Web Developer', '['Angular', 'Vue']
 */
const Profile = ({name, field, skills}) => (
  <Card body>
    <CardTitle className={classes.highlight}>{name}: {" "}
      <span className={classes.primary}>{field}</span>
    </CardTitle>
    {skills.length === 0 ? (
      <CardText>{name} doesn't have skills</CardText>
    ): (
      <div className={classes.flexHighlight}>
      {skills.map((item, index) => (
        <div className={classes.marginLeft} key={index}>
          {item === 'React' ? 
            <span className={classes.primary}>
              {item}
            </span> : null}
          {item === 'Vue' ? 
            <span className={classes.success}>
              {item}
            </span> : null}
            {item === 'Angular' ? 
          <span className={classes.danger}>
            {item}
          </span> : null}
        </div>
      ))}
      </div>
    )}
  </Card>
);

const classes = {
  flexHighlight: 'd-flex highlight',
  marginLeft: 'ml-1',
  highlight: 'highlight',
  primary: 'text-primary',
  success: 'text-success',
  danger: 'text-danger'
}

export default Profile;