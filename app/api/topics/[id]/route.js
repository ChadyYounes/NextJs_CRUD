import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, description } = await req.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated!" }, { status: 200 });
}
export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const found = await Topic.findOne({ _id: id });
  if (found) {
    return NextResponse.json(found, { status: 200 });
  }
  return NextResponse.json({ message: "Topic not found" }, { status: 404 });
}
