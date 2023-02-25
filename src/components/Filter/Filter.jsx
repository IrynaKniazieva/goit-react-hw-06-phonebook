
// import styles from './Filter.module.css'
import { useSelector, useDispatch } from "react-redux"
import { getFilter } from "redux/filter/filter-selectors"
import { setFilter } from "redux/filter/filter-slice"

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

   const changeFilter = evt => {
        dispatch(setFilter(evt.currentTarget.value));
      };

      return (
<div>
<label >
Find contact by name
</label>
<input 
    type="text"
    value={filter}
    onChange={changeFilter}
></input>

</div>
      )

}

export default Filter

