import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("MySQL connected successfully via Prisma!");
    return prisma;
  } catch (error) {
    console.error("MySQL Connection Error:", error.stack);
    process.exit(1);
  }
};

export default connectDB;
