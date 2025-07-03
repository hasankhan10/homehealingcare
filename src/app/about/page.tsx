import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">About Home Healing Care</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Your trusted partner in providing professional, compassionate, and personalized healthcare at home.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline">Our Mission & Vision</h2>
            <p className="mt-4 text-muted-foreground">
              Our mission is to make quality healthcare accessible and convenient by bringing professional medical services to your doorstep. We envision a world where everyone can receive the care they need in the comfort and familiarity of their own home, surrounded by their loved ones.
            </p>
            <p className="mt-4 text-muted-foreground">
              We are committed to upholding the highest standards of medical excellence and treating every patient with dignity, respect, and compassion.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team of healthcare professionals"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="team healthcare professionals"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-headline">Our Core Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                We treat every patient with empathy, kindness, and understanding.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                We are dedicated to providing the highest quality of medical care and service.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                We adhere to the highest ethical standards in all our interactions.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-headline">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Our team consists of certified, experienced, and dedicated healthcare professionals.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src="https://placehold.co/128x128.png" data-ai-hint="doctor portrait female" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-xl font-semibold">Dr. Emily Carter</h3>
              <p className="text-muted-foreground">Founder & Chief Medical Officer</p>
            </div>
             <div className="text-center">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src="https://placehold.co/128x128.png" data-ai-hint="doctor portrait male" />
                <AvatarFallback>JW</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-xl font-semibold">Dr. John Williams</h3>
              <p className="text-muted-foreground">Head of Geriatrics</p>
            </div>
             <div className="text-center">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src="https://placehold.co/128x128.png" data-ai-hint="nurse portrait female" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-xl font-semibold">Sarah Rodriguez, RN</h3>
              <p className="text-muted-foreground">Lead Nurse</p>
            </div>
             <div className="text-center">
              <Avatar className="h-32 w-32 mx-auto">
                <AvatarImage src="https://placehold.co/128x128.png" data-ai-hint="manager portrait male" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-xl font-semibold">Michael Brown</h3>
              <p className="text-muted-foreground">Operations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
