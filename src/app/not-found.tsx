import TypographyH1 from "@/components/ui/TypographyH1";
import { TypographySmall } from "@/components/ui/TypographySmall";

const PageNotFound = () => {

    return (
        <div className='container' style={{ height: 'calc(100vh - var(--header-height))' }}>
            <div className="h-full full-screen flex flex-col items-center justify-center gap-4">
                <TypographyH1>404</TypographyH1>
                <div className="block">
                    <TypographySmall>This page could not be found. It does not exist or was removed.</TypographySmall>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound