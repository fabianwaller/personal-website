import Column from "@/components/Column";
import Container from "@/components/Container";
import TypographyH1 from "@/components/ui/TypographyH1";
import { TypographySmall } from "@/components/ui/TypographySmall";

const PageNotFound = () => {

    return (
        <Container fullScreen center>
            <Column>
                <TypographyH1>404</TypographyH1>
                <div className="block">
                    <TypographySmall>This page could not be found. It does not exist or was removed.</TypographySmall>
                </div>
            </Column>
        </Container>
    );
}

export default PageNotFound