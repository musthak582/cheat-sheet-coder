import { Metadata } from 'next';
import CCheatSheet from './CCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'C Cheat Sheet',
  description: 'Master C essentials with our free C Cheat Sheet.Perfect for beginners and developers. Get quick references for syntax, pointers, and memory management to write efficient and powerful C programs effortlessly.',
};

// Export default component for this page
export default function CCheatSheetPage() {
  return <CCheatSheet />;
}
