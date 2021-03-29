import React from "react";
import PropTypes from "prop-types";

const MyProfile = (props) => {
  const styleImg = { height: 300 };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Bio</th>
            <th>Profession</th>
            <th>Photo</th>
            <th>Test</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-warning">
            <th scope="row">1</th>
            <td>{props.fullName}</td>
            <td>{props.bio}</td>
            <td>{props.profession}</td>
            <td>
              <img src={props.children} style={styleImg} alt = "profileImg"/>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={(e) => props.handleName(e, props.fullName)}
              >
                Success
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

//Set default props
MyProfile.defaultProps = {
  fullName: "Name of candidate",
  bio: "Biographie",
  profession: "Student",
};

//prop type definitions here
MyProfile.propTypes = {
  stringProp: PropTypes.string,
};

export default MyProfile;
