
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Calendar, MessageCircle, Users, HeartHandshake, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import MotionWrapper from '@/components/motion-wrapper';

export const metadata: Metadata = {
  title: 'Compassionate In-Home Healthcare',
  description: 'Experience professional and heartfelt healthcare services in the comfort of your home. Use our AI symptom checker or book an appointment today.',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {/* Mobile Image */}
        <Image
          src="https://i.pinimg.com/736x/4f/65/b6/4f65b6b0d08a8c950a9d0a8ed5525ec6.jpg"
          alt="Healthcare professional assisting an elderly person at home"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover md:hidden"
          data-ai-hint="healthcare mobile"
        />
        {/* Desktop Image */}
        <Image
          src="https://i.pinimg.com/736x/cf/a1/ee/cfa1ee06bf82375d4f6f567356055f07.jpg"
          alt="Healthcare professional assisting an elderly person at home"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover hidden md:block"
          data-ai-hint="healthcare professional"
        />
        <div className="relative z-10 mx-4 bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <MotionWrapper>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Compassionate Care, Right at Your Doorstep
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Experience professional and heartfelt healthcare services in the comfort of your home.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/booking">Book a Service</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/symptom-checker">Check Symptoms</Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section id="how-it-works" className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <MotionWrapper>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">How It Works</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Getting quality home care is as easy as 1-2-3.
            </p>
          </MotionWrapper>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper delay={0.1}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">1. Check Your Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  Use our AI-powered tool for initial guidance or browse our comprehensive list of services.
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">2. Book a Visit</CardTitle>
                </CardHeader>
                <CardContent>
                  Schedule an appointment at your convenience through our simple and secure booking system.
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.3}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">3. Receive Care</CardTitle>
                </CardHeader>
                <CardContent>
                  Our certified professionals will visit you at home to provide the highest quality care.
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <MotionWrapper>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">Our Promise To You</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              When you choose Home Healing Care, you're not just getting a service; you're gaining a partner in your health journey.
            </p>
          </MotionWrapper>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper delay={0.1}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HeartHandshake className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">100% Trusted Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Every member of our team is vetted, certified, and deeply committed to providing compassionate and expert care.</p>
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <Card className="text-center">
                <CardHeader>
                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                     <CheckCircle className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Tailored For You</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We work with you and your family to create a flexible care plan that fits your specific needs, schedule, and preferences.</p>
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.3}>
              <Card className="text-center">
                <CardHeader>
                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                     <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Peace of Mind</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">With our reliable and professional support, you can rest assured that you or your loved one is in safe, capable hands.</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
          <MotionWrapper delay={0.4}>
            <Button asChild className="mt-12" variant="outline">
              <Link href="/services">Learn More</Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <h2 className="text-3xl sm:text-4xl font-bold text-center font-headline">What Our Patients Say</h2>
          </MotionWrapper>
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
