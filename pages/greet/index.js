import Link from 'next/link';
import styles from '../../styles/pages/greet.module.scss';

export default function Greet(){
  return(
    <div className={styles.greet}>
      <h1><b>HI 👋😄</b> Thx for using my template</h1>
      <Link href="/"><i><u>back home 🏠</u></i></Link>
    </div>
  )
}
