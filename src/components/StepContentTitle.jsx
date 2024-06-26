import PropTypes from 'prop-types';

export default function Title(props){
  return(
    <div className="Step-Title">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};