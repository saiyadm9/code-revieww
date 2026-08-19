export default function layout({ children }) {
  return (
    <div  className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div  className="bg-surface w-full max-w-md rounded-lg shadow-card p-6">
        {children}
      </div>
    </div>
  );
}