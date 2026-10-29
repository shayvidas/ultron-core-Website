import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-semibold gradient-text">404</span>
      <h1 className="text-h2 mt-6">This page took a wrong turn.</h1>
      <p className="text-lead mt-4 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Here are some good
        places to go instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/services" variant="secondary">
          Browse Services
        </Button>
        <Button href="/contact" variant="ghost">
          Contact Us
        </Button>
      </div>
    </Container>
  );
}
