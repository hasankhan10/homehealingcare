
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, HeartHandshake, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-primary/10 py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-primary-foreground">
            The Exact Home Service You Need
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
            We provide 100% trusted, professional, and personalized care tailored to your unique situation. Feel free to contact us to discover how we can help.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us For A Free Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">Your Care, Your Way</h2>
            <p className="mt-4 text-muted-foreground">
              Tired of one-size-fits-all solutions? We believe healthcare should be as unique as you are. We don't offer a fixed menu of services because your needs aren't on a menu. Instead, we listen to you, understand your challenges, and build a personalized care plan from the ground up.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you need daily assistance, specialized medical support, or just a helping hand, our team is ready to provide exactly what you need, with the compassion and respect you deserve.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Caregiver providing personalized support"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="caregiver senior"
            />
          </div>
        </div>
      </section>
      
      <section className="py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl sm:text-4xl font-bold font-headline">Our Promise To You</h2>
             <p className="mt-4 text-muted-foreground">
                When you choose Home Healing Care, you're not just getting a service; you're gaining a partner in your health journey.
             </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </card>
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
          </div>
        </div>
      </section>
      
      <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold font-headline">Ready to Get Started?</h2>
             <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">Let's talk about how we can make your life easier and healthier. Our team is ready to answer your questions and build the perfect care plan for you.</p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/booking">Book a Home Visit Now</Link>
              </Button>
          </div>
      </section>
    </>
  );
}
