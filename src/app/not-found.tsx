import VStack from "@/components/VStack";
import Container from "@/components/Container";

const PageNotFound = () => {
  return (
    <Container fullScreen center>
      <VStack>
        <h1> 404 - Page Not Found</h1>
        <small>The page you are looking for does not exist.</small>
      </VStack>
    </Container>
  );
};

export default PageNotFound;
