import { ScrollArea } from "@/components/ui/scroll-area";

export default function ScrollbarContainer({
  children,
  scrollable = true
} : {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {
        scrollable == true ? (
          <ScrollArea className="h-[calc(100dvh-52px)]">
            <div className='h-full p-2 md:px-8'>
              {children}
            </div>
          </ScrollArea>
        ) : (
          <div className='h-full p-2 md:px-8'>
            {children}
          </div>
        )
      }
    </>
  );
}
