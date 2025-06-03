
const Filter = ({filter, handleChange}) => (
    <form>
  <input type="text" name="filter" value={filter} onChange={handleChange}/>
    </form>

);

export default Filter;