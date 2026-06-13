"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import type { Listing } from "@/data/listings";
import { ChatPanel } from "./ChatPanel";

interface ContactOwnerProps {
  listing: Listing;
  label?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  className?: string;
  /** Stop the click from bubbling to a parent (e.g. a clickable listing card). */
  stopPropagation?: boolean;
}

export function ContactOwner({
  listing,
  label = "Chat with owner",
  size = "default",
  variant = "default",
  className,
  stopPropagation = false,
}: ContactOwnerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        size={size}
        variant={variant}
        className={className}
        onClick={(e) => {
          if (stopPropagation) e.stopPropagation();
          setOpen(true);
        }}
      >
        <MessageCircle className="h-4 w-4 mr-1.5" />
        {label}
      </Button>
      {open && <ChatPanel listing={listing} onClose={() => setOpen(false)} />}
    </>
  );
}
