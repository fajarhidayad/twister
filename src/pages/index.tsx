import type { NextPage } from "next";
import { trpc } from "#/utils/trpc";

const Home: NextPage = () => {
  const coba = trpc.useQuery(["home"]);

  if (coba.isLoading) {
    return <h1 className="text-center text-xl font-semibold">Loading...</h1>;
  }

  return (
    <div className="flex justify-center">
      <h1>{coba.data}</h1>
    </div>
  );
};

export default Home;
