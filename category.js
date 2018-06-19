import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
const HalfDiv = styled.div`
  width: 40%;
  display: inline;
  border: solid black;
`;

import CategoryItem from './category-item';

export default class Category extends Component {
  state = {
    scores: this.props.category.items.map((item) => item.max)
  }

  updateScore = (index, value) => {
    const scores = [...this.state.scores];
    scores[index] = value;
    this.setState({scores});
  }

  score = () => {
    return this.state.scores.reduce((total, score, index) => {
      return total + this.state.scores[index];
    }, 0);
  }

  total = () => {
    return this.props.category.items.reduce((total, item, index) => {
      return total + item.max;
    }, 0);
  }

  render() {
    return <div className="category">
      <div className="half">
        <div>
          {this.score()} {'/'} {this.total()}
          {" "}{this.props.category.name}
        </div>
        <div>
          {this.props.category.items.map((item, i) => {
            return <Fragment key={i}>
              <CategoryItem item={item} 
                updateScore={(value) => this.updateScore(i, value) } />
            </Fragment>
          })}
        </div>
      </div>
      <div className="half">
          <div>Notes:</div>
          <textarea tabIndex="1"></textarea>
      </div>
      <p></p>
    </div>
  }
}
