
import { Button } from "@/components/ui/button";
import { FeaturesTable } from "@/components/FeaturesTable";
import { Plus } from "lucide-react";
import { Feature } from "@/types/feature";

const sampleFeatures: Feature[] = [
  {
    id: "1",
    name: "User Authentication",
    description: "Implement secure login and registration system",
    status: "completed",
    priority: "high"
  },
  {
    id: "2",
    name: "Dark Mode",
    description: "Add dark mode support throughout the app",
    status: "in-progress",
    priority: "medium"
  },
  {
    id: "3",
    name: "Export Data",
    description: "Allow users to export their data in CSV format",
    status: "planned",
    priority: "low"
  }
];

export default function Features() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Features Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Feature
        </Button>
      </div>
      <FeaturesTable features={sampleFeatures} />
    </div>
  );
}
