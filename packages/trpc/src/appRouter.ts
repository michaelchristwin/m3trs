import { router } from ".";
import { arweaveRouter } from "./routers/arweave";

import { openSeaRouter } from "./routers/opensea";

export const appRouter = router({
  opensea: openSeaRouter,
  arweave: arweaveRouter,
});
export type AppRouter = typeof appRouter;
