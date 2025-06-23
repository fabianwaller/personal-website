import { Glow, GlowArea } from "@/components/glow";
import HStack from "@/components/HStack";
import ScrollAnimated from "@/components/ScrollAnimated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import VStack from "@/components/VStack";
import { socialItems } from "@/socialItems";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function Linkpage() {
  const items = [
    ...socialItems,
    {
      href: "/",
      title: "Website",
      icon: <Globe className="h-full w-full" />,
    },
  ];

  return (
    <VStack className="p-8 py-16">
      <Avatar className="mb-8 h-32 w-32 shadow-xl lg:h-56 lg:w-56">
        <AvatarImage src="/images/avatar.png" alt="@fabianwaller" />
        <AvatarFallback>FW</AvatarFallback>
      </Avatar>
      <GlowArea
        className={
          "flex w-full flex-col items-center justify-center gap-4 lg:gap-8"
        }
      >
        {items.map((item) => (
          <Glow
            key={item.href}
            color="hsl(var(--foreground))"
            className="h-full w-full max-w-lg rounded-lg"
          >
            <ScrollAnimated className="h-full">
              <Link href={item.href}>
                <Card className="hover:shadow-custom-outline h-full py-6 shadow-custom-soft lg:py-4">
                  <CardContent>
                    <HStack className="items-center">
                      <span className="h-8 w-8">{item.icon}</span>
                      <CardTitle className="m-0">{item.title}</CardTitle>
                    </HStack>
                  </CardContent>
                </Card>
              </Link>
            </ScrollAnimated>
          </Glow>
        ))}
      </GlowArea>
    </VStack>
  );
}
