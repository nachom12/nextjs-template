import styles from '../../styles/layout/header.module.scss';

export default function Header() {

  return (
    <div className={styles.header}>
      <div className={styles.header_title}>
        <span>Next! Template</span>
      </div>
    </div>
  );
}