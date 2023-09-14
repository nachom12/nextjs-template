import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from 'carbon-components-react';
import styles from '../../styles/pages/profile.module.scss';


export default function Profile() {
  const { data: session } = useSession()

  if(session) {
    return  (
      <div className={styles.profile}>
        Signed in as {session.user.email} <br/>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }
  return (
    <div className={styles.profile}>
    Not signed in <br/>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}