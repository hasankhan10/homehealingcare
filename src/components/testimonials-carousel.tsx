"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "The care was exceptional. The nurse was professional and kind, making a difficult time much easier. Highly recommend Home Healing Care.",
    name: "Priya Sharma",
  },
  {
    quote: "Booking was so easy, and the symptom checker gave me peace of mind before the doctor's visit. A truly modern healthcare experience.",
    name: "Rajesh Kumar",
  },
  {
    quote: "I'm so grateful for their elder care services. They've been a lifeline for my mother and our entire family.",
    name: "Anjali Mehta",
  },
  {
    quote: "A truly professional and compassionate service. The team went above and beyond to ensure my father was comfortable.",
    name: "Vikram Singh",
  },
  {
    quote: "The convenience of in-home care combined with this level of expertise is unmatched. Highly recommended!",
    name: "Sunita Desai",
  }
];


export default function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full flex flex-col">
                <CardContent className="flex flex-col flex-grow items-center justify-center text-center p-6">
                  <blockquote className="italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <p className="mt-4 font-bold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
