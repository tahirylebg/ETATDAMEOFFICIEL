import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

const tags = {
  div: motion.div,
  article: motion.article,
  figure: motion.figure,
  section: motion.section,
  li: motion.li,
} as const;

export function Reveal({
  children,
  delay = 0,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: keyof typeof tags;
}) {
  const MotionTag = tags[as];

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 110, damping: 20, mass: 0.6, delay }}
    >
      {children}
    </MotionTag>
  );
}
