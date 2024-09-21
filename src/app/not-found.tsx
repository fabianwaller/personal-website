import XStack from "@/components/XStack";
import Container from "@/components/Container";
import TypographyH1 from "@/components/ui/TypographyH1";
import { TypographySmall } from "@/components/ui/TypographySmall";

const PageNotFound = () => {
  return (
    <Container fullScreen center>
      <XStack>
        <TypographyH1> 404 - Page Not Found</TypographyH1>
        <div className="block">
          <TypographySmall>
            The page you are looking for does not exist.
          </TypographySmall>
        </div>
      </XStack>
    </Container>
  );
};

export default PageNotFound;
