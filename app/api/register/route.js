import { NextResponse } from "next/server";
import { createUser } from "@/queries/users.js";
import { dbConnect } from "@/lib/mongo.js";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { email, password} = await request.json();

  console.log( email, password);

  // Create a DB Conenction
  await dbConnect();
  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);
  // Form a DB payload
  const newUser = {
    password: hashedPassword,
    email
  }
  // Update the DB
  try {
    await createUser(newUser);
    
  } catch (error) {
    return new NextResponse(error.mesage, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });

 }