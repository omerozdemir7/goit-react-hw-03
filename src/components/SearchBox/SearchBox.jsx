import { FaSearch } from 'react-icons/fa'; 
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <div className={styles.inputContainer}>
        <FaSearch className={styles.icon} />
        <input
          type="text"
          id="search"
          className={styles.input}
          value={value}
          onChange={(e) => onFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBox;