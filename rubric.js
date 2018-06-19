import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import RUBRIC from './rubric-data.js';
import Category from './category';

class Rubric extends Component {
  state = {
    courseTitle: "401n6 javascript",
    studentName: "",
    interviewerName: "Allie",
    scheduledDate: new Date(),
    startTime: "5:30",
    endTime: "6:30",
  }

  total = (obj) => {
    return 40;
  }

  render() {
    return <form>
      <div>
        <div>
          Course: <input type="text" value={this.state.courseTitle}></input>
        </div>
        <div>
          Student Full Name: <input type="text" value={this.state.studentName}></input>
          Interviewer Name: <input type="text" value={this.state.interviewerName}></input>
        </div>
        <div>
          Scheduled Date: <input type="date" value={this.state.scheduledDate}></input>
          Start Time:<input type="text" value={this.state.startTime}></input>
          End Time: <input type="text" value={this.state.endTime}></input>
        </div>
      </div>

      {RUBRIC.map((category, i) => {
        return <Category key={i} category={category} />
      })}

      <div className="total-points">
        Total Points: {this.total()}/40 (giving up is an automatic fail)
      </div>

      <div className="overall-notes">
        <div>Notes:</div>
        <textarea></textarea>
      </div>

      <div>
        <button type="submit">save</button>
      </div>
    </form>
  }
}

ReactDOM.render(<Rubric />, root);
