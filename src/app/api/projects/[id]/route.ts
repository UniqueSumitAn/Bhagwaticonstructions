import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/models/Project";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  await connectToDatabase();
  const project = await Project.findById(id).lean();
  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ project });
}

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }
  await connectToDatabase();
  const project = await Project.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  }).lean();
  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ project });
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  await connectToDatabase();
  const result = await Project.findByIdAndDelete(id).lean();
  if (!result) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
