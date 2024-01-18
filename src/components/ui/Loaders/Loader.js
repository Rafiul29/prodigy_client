import React from "react";

const Loader = () => {
  return (
    <div className="animate-pulse">
      <h1 className="text-xs text-slate-200 bg-slate-200">Loading...</h1>
      <div className="mt-4 text-sm bg-slate-200 h-2"></div>
      <div className="mt-1 text-sm bg-slate-200 h-2"></div>
      <div className="mt-1 text-sm bg-slate-200 h-2"></div>
      <div className="mt-1 text-sm bg-slate-200 h-2"></div>
      <div className="mt-1 text-sm bg-slate-200 h-2 w-[70%]"></div>
    </div>
  );
};

export default Loader;
