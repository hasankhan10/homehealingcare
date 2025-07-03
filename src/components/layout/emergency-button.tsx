"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function EmergencyButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 animate-pulse"
        >
          <Phone className="h-8 w-8" />
          <span className="sr-only">Emergency Assistance</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Emergency Assistance</AlertDialogTitle>
          <AlertDialogDescription>
            If this is a life-threatening emergency, please call your local emergency number immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <a href="tel:911" className="w-full">
            <Button variant="destructive" className="w-full">
              Call Emergency Services
            </Button>
          </a>
          <a href="tel:123-456-7890" className="w-full">
             <Button variant="outline" className="w-full">
              Contact Our Support Line
            </Button>
          </a>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
