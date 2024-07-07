import PropTypes from 'prop-types';
import './ResourceBar.css';

const ResourceBar = ({ resources }) => {
  return (
    <div className='resource-bar'>
      <h2>Resources</h2>
      {[...resources.entries()].map(([key, value], sectionIndex) => (
        <div className='resource-section' key={sectionIndex}>
          <h4>{key}</h4>
          <ul>
            {value.map((item, index) => (
              <li key={index}>
                <a href={item[1]} target="_blank" rel="noopener noreferrer">
                  {item[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

ResourceBar.propTypes = {
  resources: PropTypes.instanceOf(Map).isRequired,
};

export default ResourceBar;
