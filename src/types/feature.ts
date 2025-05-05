
export interface Feature {
  id: string;
  name: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}
