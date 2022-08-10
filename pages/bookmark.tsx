import { Loading } from "#/components/Loader/Loading";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const BookmarkPage: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "authenticated") {
    return (
      <main className="layout">
        <Head>
          <title>Bookmark | Twister App</title>
        </Head>

        <h1 className="text-center font-bold text-2xl">Not implemented yet</h1>
      </main>
    );
  }

  return (
    <>
      <Loading />
    </>
  );
};

export default BookmarkPage;
