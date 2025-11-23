import Alert from "@/componenets/alert";

export default function AlertPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Tugas Praktikum - Alert</h1>

      <Alert type="info" title="Alert Info">
        Ini adalah alert bertipe info
      </Alert>

      <Alert type="success" title="Alert Success">
        Ini adalah alert bertipe success
      </Alert>

      <Alert type="warning" title="Alert Warning">
        Ini adalah alert bertipe warning
      </Alert>

      <Alert type="danger" title="Alert Danger">
        Ini adalah alert bertipe danger
      </Alert>
    </div>
  );
}
