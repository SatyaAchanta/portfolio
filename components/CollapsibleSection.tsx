type CollapsibleSectionProps = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function CollapsibleSection({ children }: CollapsibleSectionProps) {
  return <section>{children}</section>;
}
