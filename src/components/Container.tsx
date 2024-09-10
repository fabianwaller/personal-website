import { cn } from "@/lib/utils"

type ContainerProps = {
    children: React.ReactNode
    className?: string
    fullScreen?: boolean
    center?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, className, fullScreen, center }) => {
    return (
        <div className={cn(["relative mr-auto ml-auto container max-w-custom xs:mx-4 sm:mx-12 md:mx-auto w-full p-0", center ? "flex flex-col items-center justify-center" : "", fullScreen ? "h-page-minus-header" : "", className])}
        >
            {children}
        </div >
    )
}

export default Container