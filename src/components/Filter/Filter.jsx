import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({filter, handleChange}) => (
    <label className={css.label}>
    Filter
  <input type="text" name="filter" value={filter} onChange={handleChange} className={css.input}/>
    </label>

);

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func,
  };