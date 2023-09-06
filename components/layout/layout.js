import { useRouter } from 'next/router';
import Head from "next/head";
import { SideNavRailWHeader } from "../../components/carbon/SideNavRailWHeader";
import styles from "../../styles/layout/layout.module.scss";

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Next! template</title>
      </Head>
      <SideNavRailWHeader router={router}/>
      <main className={styles.page}>{children}</main>
    </>
  );
}