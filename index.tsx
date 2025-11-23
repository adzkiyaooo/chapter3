type AlertProps = {
  type: "info" | "success" | "warning" | "danger";
  title: string;
  children: string;
};

export default function Alert({ type, title, children }: AlertProps) {
  const styles: any = {
    info: "border-blue-400 bg-blue-100 text-blue-700",
    success: "border-green-400 bg-green-100 text-green-700",
    warning: "border-yellow-400 bg-yellow-100 text-yellow-700",
    danger: "border-red-400 bg-red-100 text-red-700",
  };

  return (
    <div className={`border p-4 rounded-md mb-3 ${styles[type]}`}>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm">{children}</p>
    </div>
  );
}