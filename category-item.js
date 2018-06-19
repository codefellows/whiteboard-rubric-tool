import React, {Component} from 'react';

function clamp(min, value, max) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }
  return value;
}

export default class CategoryItem extends Component {
  state = {
    score: this.props.item.max
  }

  onChange = (ev) => {
    let score = parseInt(ev.target.value, 10);
    score = clamp(0, score, this.props.item.max);

    this.setState({score});
    if (!isNaN(score)) {
      this.props.updateScore(score);
    }
  }

  render() {
    return <div>
      <label className="category-item">
        <input type="number" min="0" max={this.props.item.max}
              tabIndex="4"
              onChange={this.onChange}
              size="2" value={this.state.score}></input>
        {"/"} {this.props.item.max}
        {" "}{this.props.item.name}
      </label>
    </div>
  }
}
