// test-prisma.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  try {
    await prisma.$connect();
    console.log("Connected to database!");
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
}

test();
