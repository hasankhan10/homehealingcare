export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  image: string;
  imageHint: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'staying-healthy-at-home',
    title: 'Top 5 Tips for Staying Healthy and Active at Home',
    author: 'Dr. Emily Carter',
    authorImage: 'https://placehold.co/40x40.png',
    date: '2024-05-15',
    image: 'https://placehold.co/800x400.png',
    imageHint: 'woman yoga home',
    excerpt: 'Discover simple yet effective ways to maintain your physical and mental well-being without leaving your house.',
    content: `
Staying healthy at home is more important than ever. Here are our top five tips:

**1. Stay Active:** Incorporate at least 30 minutes of moderate exercise into your daily routine. This could be anything from a brisk walk, online yoga classes, or simple bodyweight exercises. Regular movement boosts your immune system and improves your mood.

**2. Eat a Balanced Diet:** Focus on whole foods like fruits, vegetables, lean proteins, and whole grains. A nutritious diet provides the essential vitamins and minerals your body needs to function optimally. Try to limit processed foods and sugary drinks.

**3. Prioritize Mental Health:** Set aside time for activities you enjoy, such as reading, hobbies, or talking with loved ones. Practice mindfulness or meditation to reduce stress and anxiety.

**4. Get Enough Sleep:** Aim for 7-9 hours of quality sleep per night. A consistent sleep schedule helps regulate your mood, improve cognitive function, and support your immune system.

**5. Stay Connected:** Maintain social connections, even if it's virtually. Regular check-ins with friends and family can combat feelings of loneliness and isolation.
    `,
    tags: ['Wellness', 'Fitness', 'Mental Health'],
  },
  {
    slug: 'understanding-home-healthcare',
    title: 'What is Home Healthcare and Is It Right for You?',
    author: 'Sarah Rodriguez, RN',
    authorImage: 'https://placehold.co/40x40.png',
    date: '2024-05-10',
    image: 'https://placehold.co/800x400.png',
    imageHint: 'nurse patient home',
    excerpt: 'An introduction to the benefits of home healthcare and how to know if it’s the best choice for your family.',
    content: `
Home healthcare provides a wide range of medical services in a patient's home. It can be just as effective as care received in a hospital or skilled nursing facility.

**Benefits of Home Healthcare:**
- **Comfort and Convenience:** Receiving care in a familiar environment.
- **Personalized Care:** One-on-one attention from healthcare professionals.
- **Reduced Risk of Infection:** Lower exposure to germs compared to a hospital setting.
- **Family Involvement:** Allows family members to be more involved in the care process.

**Who is a good candidate for home healthcare?**
- Patients recovering from surgery or illness.
- Individuals with chronic conditions requiring ongoing management.
- Seniors who need assistance with daily living and medical monitoring.
- Children with complex medical needs.

Consult with your doctor to determine if home healthcare is the right option for your specific situation.
    `,
    tags: ['Healthcare', 'Elder Care', 'Guide'],
  },
  {
    slug: 'managing-chronic-conditions',
    title: 'Effective Management of Chronic Conditions at Home',
    author: 'Dr. John Williams',
    authorImage: 'https://placehold.co/40x40.png',
    date: '2024-05-01',
    image: 'https://placehold.co/800x400.png',
    imageHint: 'senior woman medication',
    excerpt: 'Learn how our team helps patients effectively manage chronic illnesses like diabetes and hypertension from home.',
    content: `
Living with a chronic condition requires consistent monitoring and management. Home healthcare plays a vital role in helping patients maintain their health and independence.

**Our approach includes:**
- **Regular Monitoring:** We track vital signs, blood sugar levels, and other key health indicators.
- **Medication Management:** Our nurses ensure medications are taken correctly and on time, preventing complications.
- **Patient Education:** We empower patients and their families with the knowledge to manage their condition effectively.
- **Coordinated Care:** We work closely with your primary physician to ensure a seamless care experience.

With the right support system, managing a chronic condition at home is not only possible but can lead to a better quality of life.
    `,
    tags: ['Chronic Disease', 'Diabetes', 'Hypertension'],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
