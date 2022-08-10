import { useTweetStore } from "#/store";
import { trpc } from "#/utils/trpc";
import { Session } from "next-auth";

export const useLikeMutation = (session: Session, tweetId: string) => {
  const utils = trpc.useContext();
  const { saveTweets } = useTweetStore();

  const likeMutation = trpc.useMutation(["tweet.likeTweet"], {
    onMutate: async (payload) => {
      await utils.cancelQuery(["tweet.getAllTweet"]);

      const previousTweets = utils.getQueryData(["tweet.getAllTweet"]);

      if (previousTweets) {
        const { id } = session!.user!;
        const updatedTweets = previousTweets.map((item) => {
          if (item.id === tweetId) {
            return {
              ...item,
              likes: [
                {
                  tweetId,
                  userId: id,
                },
              ],
            };
          }
          return item;
        });

        saveTweets(updatedTweets);

        utils.setQueryData(["tweet.getAllTweet"], updatedTweets);
      }

      return { previousTweets };
    },
    onError: (error, payload, context) => {
      if (context?.previousTweets) {
        utils.setQueryData(["tweet.getAllTweet"], context.previousTweets);
      }
    },
    onSettled: () => {
      utils.invalidateQueries(["tweet.getAllTweet"]);
      utils.invalidateQueries(["tweet.getTweetById"]);
      utils.invalidateQueries(["tweet.getTweetByUserAuth"]);
      utils.invalidateQueries(["user.getUserProfile"]);
    },
  });

  return likeMutation;
};
