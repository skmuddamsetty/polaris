"use client";

import Image from "next/image";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => createProject({ name: "New Project" })}>
        Add New Project
      </Button>
      {projects?.map(({ _id, name, ownerId }) => (
        <div key={_id}>
          {name}
          Owner Id: {ownerId}
        </div>
      ))}
    </main>
  );
}
