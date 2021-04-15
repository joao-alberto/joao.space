import Head from "next/head";
import Menu from "components/menu";
import Title from "components/title";
import Spacer from "components/spacer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Alberto - Front-end development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Spacer size={164} axis="vertical" />
      <motion.div
        initial={{ opacity: 0.6, y: 100, scale: 0.7 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
      >
        <Title>João Alberto, front-end developer.</Title>
      </motion.div>
    </div>
  );
}
