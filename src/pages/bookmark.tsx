import { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const BookmarkPage: NextPage = () => {
  return (
    <main className="layout">
      <Head>
        <title>Bookmark | Twister App</title>
      </Head>

      <h1 className="text-center font-bold text-2xl">Not implemented yet</h1>
    </main>
  );
};

export default BookmarkPage;
