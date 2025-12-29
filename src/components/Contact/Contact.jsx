import { FaUser, FaPhoneAlt, FaTrash } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.row}>
          <FaUser className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.row}>
          <FaPhoneAlt className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button 
        className={styles.deleteBtn} 
        onClick={() => onDelete(id)}
        aria-label="Delete contact"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Contact;