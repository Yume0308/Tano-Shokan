import CardInfo from "@/components/card/card-info";
import Intro from "@/components/dashboard/intro";
import ScrollbarContainer from "@/components/dashboard/scrollbar-container";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main>
      <ScrollbarContainer scrollable>
        <div className="space-y-4">
          {/* intro  */}
          <Intro />

          {/* cards */}
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardInfo />
              <CardInfo />
              <CardInfo />
              <CardInfo />
            </div>
          </div>
        </div>
      </ScrollbarContainer>
    </main>
  )
}
