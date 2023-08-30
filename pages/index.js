import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>
        This is a <a href="https://nextjs.org">Next.js!</a> template. 
      </h1>
      <p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>
      <p className={styles.description}>
        Or just customize your routes, 
        go to <Link href="greet"><i><u>the greet page</u></i></Link>
      </p>
    </div>
  )
}
