import React from "react";
import { Button } from "@/components/ui/button"; // ← optional shadcn 

export interface CarouselItem {
  icon: React.ReactNode;
  label: string
}

/**
 * Props:
 *  - items: Array of { icon: ReactNode, label: string }
 *  - duration: total time in seconds for one full scroll cycle (default: 30)
 */
export function ContinuousCarousel({
  items,
  duration = 10,
}: {
  items: CarouselItem[];
  duration?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-stone-950">
      <div
        className="flex items-center animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-4 py-2 mx-2 bg-white rounded-full shadow-sm flex items-center space-x-2"
          >
            <div>
              {item.icon}
            </div>
            <span className="text-lg font-medium text-black">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}