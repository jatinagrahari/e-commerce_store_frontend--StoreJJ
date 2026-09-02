const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#E5E7EB] border-t-[#2563EB] rounded-full animate-spin" />

        <p className="mt-4 text-sm font-medium text-[#6B7280]">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
