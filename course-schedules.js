import React, {Component, Fragment} from 'react';

export default class CourseSchedules extends Component {
  render() {
    return (
      <Fragment>
        <h3>Course Scheduling Links</h3>
        <ul>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1eAmXospkEUHA-10IcCkRrMOgL-OmF9vVFhXjA30Aggg/edit#gid=0">
              401n6 JavaScript
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1mYzLCo0SZrhu9QbBIX6FeAhRPntxKRWEVgVGQdzuOxk/edit#gid=0">
              401d23 Finals JavaScript
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

