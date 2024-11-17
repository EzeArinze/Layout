import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

function SideBarCard() {
  return (
    <Card className="flex">
      <CardHeader>
        <CardTitle>Haven&apos;t account</CardTitle>
        <Button>Login</Button>
      </CardHeader>
      <CardContent className="flex items-center">
        <Image src={"/image.png"} alt="" width={60} height={100} />
      </CardContent>
    </Card>
  );
}

export default SideBarCard;
