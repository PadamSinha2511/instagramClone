import Head from "next/head";
import Feed from "../components/feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone Padam</title>
        <link rel="icon" href="/insta.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />
    </div>
  );
}
