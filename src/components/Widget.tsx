import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-6 right-6">
      <Popover.Panel>Hello World!</Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 py-4 text-white flex items-center gap-1 group">
        <ChatTeardropDots className="w-7 h-7 ml-1" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
