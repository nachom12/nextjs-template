import { useState } from "react";
import Head from "next/head";
import Header from "./header";
import TemporaryDrawer from "../material/drawer";
import styles from "../../styles/layout/layout.module.scss";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Next! template</title>
      </Head>
      <Header />
      <TemporaryDrawer />
      <main className={styles.page}>{children}</main>
    </>
  );
}