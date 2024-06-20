import { Metadata } from 'next';
import ReactCheatSheet from './ReactCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'React Cheat Sheet',
  description: 'Level up your React skills with our free React Cheat Sheet. Ideal for beginners and developers. Get quick references for components, state management, and hooks to build dynamic and responsive web applications effortlessly.',
};

// Export default component for this page
export default function ReactCheatSheetPage() {
  return <ReactCheatSheet />;
}
