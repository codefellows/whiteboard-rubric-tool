import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
const HalfDiv = styled.div`
  width: 40%;
  display: inline;
  border: solid black;
`;

import CategoryItem from './category-item';

export default class Category extends Component {
  total = () => {
    return this.props.category.items.reduce((total, item) => {
      return item.max;
    }, 0);
  }

  render() {
    return <div className="category">
      <div className="half">
        <div>
          {this.props.category.name}
          {this.props.category.score} {'/'} {this.total()}
        </div>
        <div>
          {this.props.category.items.map((item, i) => {
            return <Fragment>
              <CategoryItem key={i} item={item} />
            </Fragment>
          })}
        </div>
      </div>
      <div className="half">
          <div>Notes:</div>
          <textarea></textarea>
      </div>
      <p></p>
    </div>
  }
}
