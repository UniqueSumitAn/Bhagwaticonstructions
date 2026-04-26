import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.name !== "string" || !body.name.trim()) {
    return NextResponse.json(
      { error: "`name` is required" },
      { status: 400 },
    );
  }

  await connectToDatabase();
  const project = await Project.create({
    name: body.name.trim(),
    description: body.description ?? "",
    location: body.location ?? "",
    status: body.status ?? "planned",
    startedAt: body.startedAt ? new Date(body.startedAt) : undefined,
    completedAt: body.completedAt ? new Date(body.completedAt) : undefined,
  });

  return NextResponse.json({ project }, { status: 201 });
}
