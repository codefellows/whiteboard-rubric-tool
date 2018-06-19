import React, {Component} from 'react';

export default class CategoryItem extends Component {
  render() {
    return <div>
      <label className="category-item">
        <input type="integer" min="0" max={this.props.item.max}
               size="2" value={this.props.item.score} />
        {"/"} {this.props.item.max}
        {" "}{this.props.item.name}
      </label>
    </div>
  }
}
