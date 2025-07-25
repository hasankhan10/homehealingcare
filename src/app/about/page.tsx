
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, UserCheck, Clock } from 'lucide-react';
import MotionWrapper from '@/components/motion-wrapper';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to provide professional, compassionate, and personalized healthcare at home. Meet our team of certified professionals.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <MotionWrapper>
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary-foreground">About Home Healing Care</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
              Your trusted partner in providing professional, compassionate, and personalized healthcare at home.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <MotionWrapper>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline">Our Mission & Vision</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to make quality healthcare accessible and convenient by bringing professional medical services to your doorstep. We envision a world where everyone can receive the care they need in the comfort and familiarity of their own home, surrounded by their loved ones.
              </p>
              <p className="mt-4 text-muted-foreground">
                We are committed to upholding the highest standards of medical excellence and treating every patient with dignity, respect, and compassion.
              </p>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div>
              <Image
                src="https://i.pinimg.com/736x/64/ef/df/64efdf233c19e6c5214916e30c78e751.jpg"
                alt="Team of healthcare professionals"
                data-ai-hint="healthcare team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover h-[400px]"
              />
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <MotionWrapper>
            <h2 className="text-3xl sm:text-4xl font-bold text-center font-headline">Why Choose Us?</h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
              We are dedicated to providing you with the best in-home healthcare experience.
            </p>
          </MotionWrapper>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper delay={0.1}>
              <Card>
                <CardHeader className="text-center">
                  <HeartHandshake className="h-10 w-10 mx-auto text-accent mb-4" />
                  <CardTitle>Personalized Care</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  We create custom care plans tailored to your specific needs and preferences.
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <Card>
                <CardHeader className="text-center">
                  <UserCheck className="h-10 w-10 mx-auto text-accent mb-4" />
                  <CardTitle>Certified Professionals</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Our team consists of vetted, experienced, and compassionate healthcare experts.
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper delay={0.3}>
              <Card>
                <CardHeader className="text-center">
                  <Clock className="h-10 w-10 mx-auto text-accent mb-4" />
                  <CardTitle>Reliable & Available</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  We offer flexible scheduling and support to be there when you need us most.
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
