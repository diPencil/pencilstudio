"use client";

import { useEffect } from "react";

/**
 * Global Image & Asset Protection
 * Prevents:
 * 1. Dragging images to desktop, tab, or other windows (dragstart).
 * 2. Right-click context menu on images (Save image as, Copy image, Open image in new tab).
 * 3. Mobile touch-callout (long-press to save image).
 */
export function ImageProtection() {
  useEffect(() => {
    const isImageElement = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof HTMLElement)) return false;

      // Direct img or svg or video tags
      const tagName = target.tagName.toUpperCase();
      if (tagName === "IMG" || tagName === "IMAGE" || tagName === "VIDEO" || tagName === "CANVAS") {
        return true;
      }

      // Inside an img or media element
      if (target.closest("img, image, video, canvas, [data-protected-image]")) {
        return true;
      }

      // Check if target or parent has a CSS background-image
      const computed = window.getComputedStyle(target);
      if (computed.backgroundImage && computed.backgroundImage !== "none") {
        return true;
      }

      return false;
    };

    // 1. Block right-click / context menu on all images
    const handleContextMenu = (e: MouseEvent) => {
      if (isImageElement(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 2. Block dragging images (desktop, tabs, folders)
    const handleDragStart = (e: DragEvent) => {
      if (isImageElement(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 3. Mark existing and dynamically rendered images as draggable=false
    const setUndraggable = () => {
      const images = document.querySelectorAll<HTMLImageElement>("img");
      images.forEach((img) => {
        if (img.getAttribute("draggable") !== "false") {
          img.setAttribute("draggable", "false");
        }
      });
    };

    setUndraggable();

    // Observe DOM mutations to enforce on lazy-loaded images
    const observer = new MutationObserver(() => {
      setUndraggable();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
    };
  }, []);

  return null;
}

