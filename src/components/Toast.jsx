export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-amber-500/50 text-slate-100 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-up backdrop-blur-md">
      <span className="text-xl"></span>
      <p className="text-sm font-semibold tracking-wide">{message}</p>
    </div>
  );
}