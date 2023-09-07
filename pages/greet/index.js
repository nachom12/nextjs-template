import Link from 'next/link';
import { Button } from 'carbon-components-react';
import styles from '../../styles/pages/greet.module.scss';

export default function Greet(){
  return(
    <div className={styles.greet}>
      <h1><b>HI 👋😄</b> Thx for using my template</h1>
      <Link href="/">
        <Button kind="primary">back home 🏠</Button>
      </Link>
    </div>
  )
}
