import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const renderCourse = (course) => <div key={course.title}>{course.title}</div>;

const CoursesPage = (props) => {
  const [course, setCourse] = useState({
    title: "",
  });

  const handleChange = ({ target: { value } }) => {
    setCourse({ ...course, title: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCourse(course);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" className="btn btn-primary" value="Save"></input>
      {props.courses.map(renderCourse)}
    </form>
  );
};

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
