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
    studentName: "Muncan Darsh",
    interviewerName: "Allie",
    scheduledDate: formatDate(new Date()),
    startTime: "5:30",
    endTime: "6:30",

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
        </div>
        <div>
          Student Full Name:
          <input type="text" name="studentName" onChange={this.handleChange}
            value={this.state.studentName}
          />

          Interviewer Name:
          <input type="text" name="interviewName" onChange={this.handleChange}
            value={this.state.interviewerName}
          />
        </div>
        <div>
          Scheduled Date {this.state.scheduledDate}:
          <input type="date" name="scheduledDate" onChange={this.handleChange}
            value={this.state.scheduledDate}
          />

          Start Time:
          <input type="text" name="startTime" onChange={this.handleChange}
            value={this.state.startTime}
          />

          End Time:
          <input type="text" name="endTime" onChange={this.handleChange}
            value={this.state.endTime}
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
        <textarea tabIndex="2"></textarea>
      </div>

      <div>
        <button type="submit">save</button>
      </div>
    </form>
  }
}

ReactDOM.render(<Rubric />, root);
