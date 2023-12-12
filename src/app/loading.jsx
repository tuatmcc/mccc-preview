export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      <p className="text-2xl font-bold text-gray-900">Loading...</p>
    </div>
  );
}
