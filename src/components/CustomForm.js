import React, { Component} from 'react'
import { Form } from 'reactstrap';
import  CustomInput  from './CustomInput';
import API from '../api/index';
import Filter from './FilterForm';
import { IconRemove } from '../icons/index';
import Profile from '../components/Profile';

class CustomForm extends Component {
  state = {
    list: API,
    search: '',
    results: [],
    selected: false,
    person: null,
  }

  /**
   * @param {target: {name: string, value: string}}
   * Controlls the state of the current input.
   */
  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    }, () => {
      this.handleResults(value);
    });
  }
  
  /**
   * @param {string} query to filter from users.
   * @function filteredResults will filter only if the query param matches true.
   */
  handleResults = (query) => {
    const { list } = this.state;
    const filteredResults = list.filter((item) => 
      item.name.includes(query)
    );
    this.setState({
      results: filteredResults
    });
  }

  /**
   * @function handleSelectItem Shows the current information of the item.
   * @param {object} item
   * @prop {string} name
   * @prop {string} field
   * @prop {array} skills
   * @example 'John Smith', 'Front End Developer', ['Angular', 'Vue']
   */
  handleSelectItem = (item) => {
    const { name } = item;
    const {...data} = item;
    this.setState({
      selected: true,
      search: name,
      person: data
    });
  }

  /**
   * @function handleUnselectItem will discard the select field and makes
   * Available to search again.
   */ 
  handleUnselectItem = () => {
    this.setState({
      selected: false,
      search: ''
    })
  }



  render() {
    const { results, search, selected, person} = this.state;
    return (
      <Form>
        <CustomInput
          name="search" 
          onChange={this.handleChange}
          value={search}
          disabled={selected}
          />
        {!selected ? (
          <Filter
            items={results}
            onSelectItem={this.handleSelectItem}
          />
        ):(
          <>
          <IconRemove 
            size={14} 
            className="remove"
            onClick={this.handleUnselectItem}
            />
            <Profile 
              name={person.name}
              field={person.field}
              skills={person.skills}
              /> 
          </>
        )}
      </Form>
    );
  }
}

export default CustomForm;