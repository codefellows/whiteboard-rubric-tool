import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import RUBRIC from './rubric-data.js';
import Category from './category';

function formatDate(date) {
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  return date.getFullYear() + '-' + month + '-' + date.getDate();
}

class Rubric extends Component {
  state = {
    courseTitle: "401n6 javascript",
    studentName: "",
    interviewerName: "",
    scheduledDate: formatDate(new Date()),

    scores: new Array(RUBRIC.length),
    sectionNotes: [],
    overallNotes: "",
  }

  componentDidMount() {
    const scores = [...scores];
    RUBRIC.forEach((category, index) => {
      scores[index] = category.items.reduce((a, b) => a + b.max, 0);
    });
    this.setState({scores});
  }

  handleChange = (ev) => {
    const property = ev.target.name;
    let value = ev.target.value;
    this.setState({[property]: value});
  }

  updateTotal = (categoryIndex, score) => {
    let scores = [...this.state.scores];
    scores[categoryIndex] = score;
    this.setState({scores});
  }

  score = () => {
    return this.state.scores.reduce((total, score) => {
      return total + score;
    }, 0);
  }

  pointsPossible = (obj) => {
    let pointsPossible = 0;
    RUBRIC.forEach(category => {
      category.items.forEach(item => {
        pointsPossible += item.max;
      });
    });
    return pointsPossible;
  }

  save = (ev) => {
    ev.preventDefault();
  }

  render() {
    return <Fragment>
      <form onSubmit={this.save}>
        <div>
          <div>
            Course:
            <input type="text" name="courseTitle" onChange={this.handleChange}
              value={this.state.courseTitle}
            />

            Scheduled Date
            <input type="date" name="scheduledDate" onChange={this.handleChange}
              value={this.state.scheduledDate}
            />
          </div>
          <div>
            Student Full Name:
            <input type="text" name="studentName" onChange={this.handleChange}
              tabIndex="1"
              value={this.state.studentName}
            />

            Interviewer Name:
            <input type="text" name="interviewName" onChange={this.handleChange}
              tabIndex="1"
              value={this.state.interviewerName}
            />
          </div>
        </div>

        {RUBRIC.map((category, i) => {
          return <Category key={i} category={category} 
            updateTotal={categoryScore => this.updateTotal(i, categoryScore)}
          />
        })}

        <div className="total-points">
          Total Points: {this.score()}/{this.pointsPossible()} (giving up is an automatic fail)
        </div>

        <div className="overall-notes">
          <div>Notes:</div>
          <textarea tabIndex="3"></textarea>
        </div>
      </form>
      <p className="source-link">
        <a href="https://github.com/codefellows/whiteboard-rubric-tool">https://github.com/codefellows/whiteboard-rubric-tool</a>
      </p>
    </Fragment>
  }
}

ReactDOM.render(<Rubric />, root);
