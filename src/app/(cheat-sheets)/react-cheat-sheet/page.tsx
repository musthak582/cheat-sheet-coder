import { Metadata } from 'next';
import ReactCheatSheet from './ReactCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'React Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free React Cheat Sheet to master components, hooks, and lifecycle methods. This comprehensive guide includes practical examples for efficient React development. Perfect for quick reference!',
};

// Export default component for this page
export default function ReactCheatSheetPage() {
  return <ReactCheatSheet />;
}
