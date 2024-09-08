import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json({ Message: "Topic created!" }, { status: 200 });
}

export async function GET() {
  await connectDB();
  const topics = await Topic.find();
  if (!topics) {
    return NextResponse.json({ message: "No topics Found!" }, { status: 404 });
  }
  return NextResponse.json({ topics }, { status: 200 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted successfully!" },
    { status: 200 }
  );
}
