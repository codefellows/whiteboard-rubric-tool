import React, {Component} from 'react';
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

    scores: [],
    sectionNotes: [],
    overallNotes: "",
  }

  handleChange = (ev) => {
    const property = ev.target.name;
    let value = ev.target.value;
    this.setState({[property]: value});
  }

  score = (obj) => {
    return 40;
  }
  total = (obj) => {
    return 40;
  }

  save = (ev) => {
    ev.preventDefault();
    console.log(this.state);
  }

  render() {
    return <form onSubmit={this.save}>
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
        return <Category key={i} category={category} />
      })}

      <div className="total-points">
        Total Points: {this.score()}/{this.total()} (giving up is an automatic fail)
      </div>

      <div className="overall-notes">
        <div>Notes:</div>
        <textarea tabIndex="3"></textarea>
      </div>

      <div>
        <button type="submit">save</button>
      </div>
    </form>
  }
}

ReactDOM.render(<Rubric />, root);
