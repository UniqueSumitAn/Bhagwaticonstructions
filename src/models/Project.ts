import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    status: {
      type: String,
      enum: ["planned", "in_progress", "completed"],
      default: "planned",
    },
    startedAt: { type: Date },
    completedAt: { type: Date },
  },
  { timestamps: true },
);

export type ProjectDoc = InferSchemaType<typeof ProjectSchema> & { _id: string };

export const Project: Model<ProjectDoc> =
  (models.Project as Model<ProjectDoc>) ||
  model<ProjectDoc>("Project", ProjectSchema);
