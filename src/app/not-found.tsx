import VStack from "@/components/VStack";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Container fullScreen center>
      <VStack className="gap-6">
        <VStack className="text-center">
          <h1>Page Not Found</h1>
          <span>The page you are looking for does not exist.</span>
        </VStack>
        <Link href={"/"} legacyBehavior>
          <Button>Bring me back</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PageNotFound;
