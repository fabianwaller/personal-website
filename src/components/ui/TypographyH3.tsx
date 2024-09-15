import { cn } from "@/lib/utils"

export function TypographyH2({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={cn(["scroll-m-20 text-xl font-semibold lg:text-2xl mb-1 text-title-normal", className])}>
            {children}
        </h3>
    )
}


export default TypographyH2