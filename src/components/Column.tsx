import { cn } from "@/lib/utils"

type ColumnProps = {
    children: React.ReactNode
    className?: string
}

const Column: React.FC<ColumnProps> = ({ children, className }) => (
    <div className={cn(["flex flex-col items-center justify-center gap-4", className])}>
        {children}
    </div >
)

export default Column