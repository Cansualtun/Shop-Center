export default function Skeleton () {
    return (
        <div className="flex justify-center flex-col p-20 h-full mt-10 m-20 bg-white border border-gray-200 rounded-xlg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className="animate-pulse flex space-x-4 !flex items-center w-full">
         <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
           <div className="h-2 bg-slate-700 rounded"></div>
           <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3 animate-pulse">
             <div className="grid grid-cols-3 gap-4">
             <div className="h-2 bg-slate-700 rounded col-span-2"></div>
             <div className="h-2 bg-slate-700 rounded col-span-1"></div>
             <div className="h-2 bg-slate-700 rounded col-span-1"></div>
             <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
        </div>    
    )
}