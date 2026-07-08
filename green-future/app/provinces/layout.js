export default function layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">Green Future</h1>
      </header> 
        {children}
    </div>
  );
}