import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const CardInfo = () => {
  return (
    <>
      <Card className="p-1 flex-1 min-w-[130px] rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">Card Title</CardTitle>
          <Ellipsis />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-medium">
            1234
          </div>
          <h2 className="capitalize text-sm font-medium text-muted-foreground">+20.1% from last month</h2>
        </CardContent>
      </Card>
    </>
  )
}

export default CardInfo;
