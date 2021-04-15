import Head from "next/head";
import Menu from "components/menu";
import Title from "components/title";
import Spacer from "components/spacer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Alberto - Front-end development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div>
        <Spacer size={120} axis="vertical" />
        <Title>João Alberto, front-end developer.</Title>
      </div>
    </div>
  );
}
