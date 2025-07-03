import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Stethoscope, Calendar, ShieldCheck, HeartPulse, Brain, Bone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Healthcare professional assisting an elderly person at home"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-40"
          data-ai-hint="healthcare professional home"
        />
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Compassionate Care, Right at Your Doorstep
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Experience professional and heartfelt healthcare services in the comfort of your home.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/booking">Book a Service</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/symptom-checker">Check Symptoms</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Getting quality home care is as easy as 1-2-3.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of services to meet your unique health needs.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <HeartPulse className="h-10 w-10 mx-auto text-accent" />
                <h3 className="mt-4 font-semibold">General Check-up</h3>
                <p className="mt-2 text-sm text-muted-foreground">Routine health assessments and preventive care.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Brain className="h-10 w-10 mx-auto text-accent" />
                <h3 className="mt-4 font-semibold">Neurology</h3>
                <p className="mt-2 text-sm text-muted-foreground">Specialized care for neurological conditions.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Bone className="h-10 w-10 mx-auto text-accent" />
                <h3 className="mt-4 font-semibold">Orthopedics</h3>
                <p className="mt-2 text-sm text-muted-foreground">Post-surgery and injury recovery support.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <ShieldCheck className="h-10 w-10 mx-auto text-accent" />
                <h3 className="mt-4 font-semibold">Elder Care</h3>
                <p className="mt-2 text-sm text-muted-foreground">Comprehensive care for senior citizens.</p>
              </CardContent>
            </Card>
          </div>
          <Button asChild className="mt-12" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">What Our Patients Say</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Patient photo" data-ai-hint="person happy" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="italic">"The care was exceptional. The nurse was professional and kind, making a difficult time much easier. Highly recommend Home Healing Care."</p>
                    <p className="mt-4 font-semibold">- Jane Doe</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Patient photo" data-ai-hint="person smiling" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="italic">"Booking was so easy, and the symptom checker gave me peace of mind before the doctor's visit. A truly modern healthcare experience."</p>
                    <p className="mt-4 font-semibold">- John Smith</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Patient photo" data-ai-hint="woman happy" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="italic">"I'm so grateful for their elder care services. They've been a lifeline for my mother and our entire family."</p>
                    <p className="mt-4 font-semibold">- Mary Poppins</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
