import { 
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus 
} from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
export const cheatSheetsLinks = [
  {
    path: '/html',
    label: 'HTML',
    icon : <ImHtmlFive />,
  },
  {
    path: '/css',
    label: 'CSS 3',
    icon : <SiCss3 />,
  },
  {
    path: '/javascript',
    label: 'JavaScript',
    icon : <SiJavascript />,
  },
  {
    path: '/react',
    label: 'React',
    icon : <FaReact />,
  },
  {
    path: '/typescript',
    label: 'TypeScript',
    icon : <SiTypescript />,
  },
  {
    path: '/python',
    label: 'Python',
    icon : <SiPython />,
  },
  {
    path: '/java',
    label: 'Java',
    icon : <FaJava />,
  },
  {
    path: '/cpp',
    label: 'C++',
    icon : <SiCplusplus />,
  },
];