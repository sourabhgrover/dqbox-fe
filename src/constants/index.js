import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const initialNavigation = [
  { name: "DQScore", href: "#", icon: HomeIcon, current: true },
  { name: "DQDrill", href: "#", icon: UsersIcon, current: false },
  { name: "Compare", href: "#", icon: FolderIcon, current: false },
  {
    name: "Set Targets",
    href: "/set-targets",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Control Flow",
    href: "/control-flow",
    icon: ChartPieIcon,
    current: false,
  },
];
