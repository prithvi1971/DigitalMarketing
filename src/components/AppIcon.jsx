import React from "react";
import * as LucideIcons from "lucide-react";
import { HelpCircle } from "lucide-react";

function Icon({
  name,
  // NOTE: no default size -> if you omit `size`, CSS classes control width/height
  size,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  decorative = true,   // hide from screen readers by default
  title,               // set when decorative=false
  ...props
}) {
  const IconComponent = LucideIcons[name] || HelpCircle;

  const a11yProps = decorative
    ? { "aria-hidden": "true", focusable: "false" }
    : { role: "img", "aria-label": title || name, focusable: "false" };

  // If a `size` is provided, use it; otherwise let CSS (w-/h-) control sizing
  const baseProps = {
    color,
    strokeWidth,
    className: `inline-block align-middle ${className}`,
    ...a11yProps,
    ...props,
  };

  return size != null ? (
    <IconComponent size={size} {...baseProps} />
  ) : (
    <IconComponent {...baseProps} />
  );
}

export default Icon;
