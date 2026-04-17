import { Grid1x2, Calendar3, JournalBookmark, ChatRightDots } from "react-bootstrap-icons";
import { StatTile } from "../../components/shared/StatTile";

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <StatTile 
        label="Mood Average" 
        value="7.8/10" 
        delta={{ value: "12%", isPositive: true }} 
        icon={Grid1x2}
      />
      <StatTile 
        label="Sessions Done" 
        value="08" 
        delta={{ value: "2", isPositive: true }} 
        icon={Calendar3}
      />
      <StatTile 
        label="Resources Read" 
        value="14" 
        icon={JournalBookmark}
      />
      <StatTile 
        label="Secure Messages" 
        value="03" 
        icon={ChatRightDots}
      />
    </div>
  );
}
