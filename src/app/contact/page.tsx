import ContactForm from "@/components/contact-form";
import MotionWrapper from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary/10 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <MotionWrapper>
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary-foreground">Contact Us</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
              We're here to help. Reach out to us with any questions or to schedule a consultation.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <MotionWrapper>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Please fill out the form, and our team will get back to you within 24 hours.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+919832711495" className="text-muted-foreground hover:text-primary">+91 98327 11495</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:homehealingcare@gmail.com" className="text-muted-foreground hover:text-primary">homehealingcare@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Locations</h3>
                    <div className="mt-2 space-y-2">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Kolkata:</span> Sector V
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Bangalore:</span> Majestic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
