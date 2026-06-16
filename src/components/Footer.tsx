import { Dock, type DockItem } from "../components/unlumen-ui/dock";

import { IconMessage } from "@tabler/icons-react";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/constants";

export default function Footer() {
  const items: DockItem[] = [
    { icon: "🌐", label: "Browser" },
    { icon: "📁", label: "Files", href: "/projects", separator: true },
    { icon: "GH", label: "GitHub", hrefExternal: true, href: GITHUB },
    {
      icon: "LI",
      label: "LinkedIn",
      hrefExternal: true,
      href: LINKEDIN,
      separator: true,
    },
    {
      icon: "X",
      label: "X/Twitter",
      hrefExternal: true,
      href: TWITTER,
    },
    { icon: "E", label: "Email me!", href: `mailto:${EMAIL}` },
  ];
  return (
    <footer>
      <Dock
        items={items}
        magnification={3}
        distance={120}
        springOptions={{ stiffness: 400, damping: 25 }}
      />
    </footer>
  );
}
