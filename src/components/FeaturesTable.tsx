
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Feature } from "@/types/feature";

const statusColors = {
  'planned': 'bg-yellow-500',
  'in-progress': 'bg-blue-500',
  'completed': 'bg-green-500'
} as const;

const priorityColors = {
  'low': 'bg-gray-500',
  'medium': 'bg-orange-500',
  'high': 'bg-red-500'
} as const;

interface FeaturesTableProps {
  features: Feature[];
}

export function FeaturesTable({ features }: FeaturesTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.id}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell>{feature.description}</TableCell>
              <TableCell>
                <Badge className={statusColors[feature.status]}>
                  {feature.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={priorityColors[feature.priority]}>
                  {feature.priority}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
