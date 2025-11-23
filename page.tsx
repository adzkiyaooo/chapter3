import Button from "@/componenets/button";

export default function ButtonPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Tugas Praktikum - Button</h1>

      <div className="bg-black p-6 rounded-md flex flex-wrap gap-3">
        <Button type="success">Success Button</Button>
        <Button type="warning">Warning Button</Button>
        <Button type="danger">Danger Button</Button>
        <Button type="success-outline">Success Outline Button</Button>
        <Button type="danger-outline">Danger Outline Button</Button>
        <Button type="info-outline">Outline Info Button</Button>
      </div>
    </div>
  );
}