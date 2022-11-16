import Head from "next/head";
import Header from "./Header";
import { ReactNode } from "react";

import styles from "../../styles/Layout.module.css";
import Footer from "./Footer";

type LayoutProps = {
  title: string;
  keywords: string;
  description: string;
  children: ReactNode;
};

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Events",
  description: "Find the latest events",
  keywords: "music, events, festivals, meetups",
};
