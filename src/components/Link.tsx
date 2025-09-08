export default function Link({
  href,
  openInNewTab = true,
  inline = false,
  children,
}: {
  href: string;
  openInNewTab?: boolean;
  inline?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline w-fit"
    >
      {children}{inline ? "" : " ›"}
    </a>
  );
}
