"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const PreviewModal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(() => onDismiss(), [onDismiss]);
  return (
    <Dialog defaultOpen>
      <DialogContent onEscapeKeyDown={onClick} onInteractOutside={onClick}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModal;
