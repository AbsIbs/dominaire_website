"use client";
// React
import { useState } from "react";

// Icons
import { FaChevronLeft } from "react-icons/fa6";

// Types
type AccordionItemType = {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

const AccordionItem = ({
  item,
  open,
  onClick,
}: {
  item: AccordionItemType;
  open: boolean;
  onClick: () => void;
}) => {
  const { title, content } = item;

  return (
    <div className="w-full">
      <button
        onClick={() => onClick()}
        className="w-full pb-4 text-left flex justify-between"
      >
        <h3>{title}</h3>
        <FaChevronLeft
          className={`text-text text-lg ${open ? "-rotate-90" : "rotate-0"} transition-all duration-300`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-600 ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pb-4">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({
  data,
  gap = 24,
}: {
  data: AccordionItemType[];
  gap?: number;
}) => {
  // States
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Handlers
  const handleAccordionChange = (index: number) => {
    // If the selected index is the same as the active one, set the active value to null
    if (index === activeAccordion) {
      setActiveAccordion(null);
      return;
    }

    setActiveAccordion(index);
  };

  return (
    <div className="flex flex-col" style={{ gap: gap }}>
      {data.map((item, index) => (
        <div key={index} className="w-full border-b-border border-b">
          <AccordionItem
            open={index === activeAccordion}
            item={item}
            onClick={() => handleAccordionChange(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
