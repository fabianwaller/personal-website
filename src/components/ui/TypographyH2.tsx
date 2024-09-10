import { cn } from "@/lib/utils"

export function TypographyH2({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={cn(["scroll-m-20 text-3xl font-semibold lg:text-4xl mb-1", className])}>
            {children}
        </h2>
    )
}


export default TypographyH2