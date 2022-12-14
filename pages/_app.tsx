import "#/styles/globals.css";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import { AppRouter } from "#/server/routers/app";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "#/components/Header";
import ModalLogin from "#/components/Header/ModalLogin";
import LoadingPage from "#/layouts/LoadingPage";
import BottomNav from "#/layouts/BottomNav";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LoadingPage>
        <ModalLogin />
        <section>
          <Header />
          <Component {...pageProps} />
        </section>
        <BottomNav />
      </LoadingPage>
      <ReactQueryDevtools />
    </SessionProvider>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      links: [
        // loggerLink({
        //   enabled: (opts) =>
        //     process.env.NODE_ENV === "development" ||
        //     (opts.direction === "down" && opts.result instanceof Error),
        // }),
        httpBatchLink({
          url,
          maxBatchSize: 10,
        }),
      ],
      transformer: superjson,
    };
  },
})(MyApp);
