import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, HeartPulse, Bone, Brain, ShieldCheck, Baby, Syringe, PlusCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    category: "General & Preventive Care",
    items: [
      {
        title: "General Check-up",
        description: "Comprehensive health assessments, routine check-ups, and personalized wellness plans.",
        icon: Stethoscope,
      },
      {
        title: "Chronic Disease Management",
        description: "Ongoing support and care for conditions like diabetes, hypertension, and heart disease.",
        icon: HeartPulse,
      },
      {
        title: "Vaccinations",
        description: "Administering routine and seasonal vaccinations for all ages in the comfort of your home.",
        icon: Syringe,
      },
    ],
  },
  {
    category: "Specialized Care",
    items: [
       {
        title: "Elder Care (Geriatrics)",
        description: "Specialized care for seniors, focusing on mobility, chronic conditions, and overall well-being.",
        icon: ShieldCheck,
      },
      {
        title: "Orthopedic Care",
        description: "Post-surgery recovery, fracture care, and management of musculoskeletal conditions.",
        icon: Bone,
      },
      {
        title: "Neurological Support",
        description: "Home care for patients with neurological disorders like stroke, Parkinson's, and dementia.",
        icon: Brain,
      },
      {
        title: "Pediatric Care",
        description: "In-home medical care for infants, children, and adolescents, from wellness checks to sick visits.",
        icon: Baby,
      },
      {
        title: "Post-Operative Care",
        description: "Wound care, pain management, and rehabilitation support after surgery.",
        icon: PlusCircle,
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">Our Healthcare Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Delivering a wide range of professional medical services directly to your home.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {services.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-3xl font-bold font-headline mb-8">{category.category}</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service) => (
                  <Card key={service.title} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader className="flex-row items-center gap-4">
                      <service.icon className="h-10 w-10 text-accent" />
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                       <Button asChild variant="outline" className="w-full">
                         <Link href="/booking">Book Now</Link>
                       </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
