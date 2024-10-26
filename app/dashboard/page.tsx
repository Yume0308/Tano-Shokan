import Intro from "@/components/dashboard/intro";
import ScrollbarContainer from "@/components/dashboard/scrollbar-container";

export default function Page() {
  return (
    <main>
      <ScrollbarContainer scrollable>
        <div className="space-y-2">
          <Intro />
        </div>
      </ScrollbarContainer>
    </main>
  )
}
