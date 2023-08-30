import { useState } from "react";
import Head from "next/head";
import Header from "./header";
import TemporaryDrawer from "../material/drawer";
import styles from "../../styles/layout/layout.module.scss";

export default function Layout({ children }) {
  
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <>
      <Head>
        <title>Next! template</title>
      </Head>
      <Header setSidebarStatus={setSidebarStatus} sidebarStatus={sidebarStatus}/>
      <TemporaryDrawer sidebarStatus={sidebarStatus}/>
      <main className={styles.page}>{children}</main>
    </>
  );
}