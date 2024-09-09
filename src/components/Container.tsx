import { cn } from "@/lib/utils"

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn(["relative mr-auto ml-auto container max-w-custom xs:mx-4 sm:mx-12 md:mx-auto w-full p-0", className])}>
        {children}
    </div>
)

export default Container