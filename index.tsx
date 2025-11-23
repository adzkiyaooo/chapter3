type ButtonProps = {
  type:
    | "success"
    | "warning"
    | "danger"
    | "success-outline"
    | "danger-outline"
    | "info-outline";
  children: string;
};

export default function Button({ type, children }: ButtonProps) {
  const styles: any = {
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
    "success-outline": "border border-green-600 text-green-600 hover:bg-green-100",
    "danger-outline": "border border-red-600 text-red-600 hover:bg-red-100",
    "info-outline": "border border-blue-600 text-blue-600 hover:bg-blue-100",
  };

  return (
    <button className={`px-4 py-2 rounded-md font-semibold text-sm ${styles[type]}`}>
      {children}
    </button>
  );
}
