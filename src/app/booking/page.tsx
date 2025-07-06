
import type { Metadata } from 'next';
import BookingForm from "@/components/booking-form";
import MotionWrapper from "@/components/motion-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Schedule a home visit from one of our certified healthcare professionals. Our simple booking form makes it easy to get the care you need.',
};

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <MotionWrapper>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Book an Appointment</CardTitle>
              <CardDescription>
                Fill out the form below to schedule a home visit from one of our healthcare professionals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm />
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
}
