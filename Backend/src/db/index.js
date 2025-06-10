import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(`MySQL connected successfully via Prisma!`);
    return prisma;
  } catch (error) {
    console.log(`MySQL Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
