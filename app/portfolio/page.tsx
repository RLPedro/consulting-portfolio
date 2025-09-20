import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Portfolio() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Enforcement UI Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Built and maintained a global UI system for traffic enforcement, used by customers worldwide. Technologies: React, Redux, Node.</p>
            <p>Challenges: Scalability for international users; Solution: Implemented multilingual support and optimized performance.</p>
            <p>Results: Improved user efficiency by 30% (hypothetical metric).</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Digitization Strategy for SMEs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Consulted on migrating operations to cloud tools, using Python for automation scripts.</p>
            <p>Challenges: Data integration; Solution: Custom APIs with gRPC.</p>
            <p>Results: Reduced costs by 25% for clients.</p>
          </CardContent>
        </Card>
        {/* Add more, e.g., from <salt> training or certifications */}
      </div>
    </section>
  );
}