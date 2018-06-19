import React, {Component} from 'react';

export default class CategoryItem extends Component {
  state = {
    score: this.props.item.max
  }

  render() {
    return <div>
      <label className="category-item">
        <input type="integer" min="0" max={this.props.item.max}
               size="2" value={this.state.score} />
        {"/"} {this.props.item.max}
        {" "}{this.props.item.name}
      </label>
    </div>
  }
}
