import { env } from "./env";
import { PrismaClient } from "@prisma/client";

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

const prisma: PrismaClient =
  prismaGlobal.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

export default prisma;
