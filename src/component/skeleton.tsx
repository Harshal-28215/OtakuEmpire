import { cn } from "@/utils/cn_twmerge"


type skeletonprops={
    className?: string
}

export default function Skeleton({className}:skeletonprops) {
  return (
    <div className={cn(`animate-pulse h-4 w-[550px] rounded-md bg-white/10`, className)}/>
  )
}
