import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Portfolio() {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Global Traffic Management Platform</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Developed and maintained a scalable UI for a traffic enforcement system, deployed worldwide. Technologies: React, Redux, Node.js.</p>
            <p>Challenges: Ensuring performance across diverse regions; Solution: Optimized code and implemented multilingual interfaces.</p>
            <p>Results: Enhanced user efficiency by an estimated 30% and supported global client adoption.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Full-Stack Development Training Project</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Selected from 1,200 applicants for an intensive training program, delivering a robust web application. Technologies: JavaScript, React, MongoDB.</p>
            <p>Challenges: Rapid learning curve; Solution: Applied Agile methodologies and TDD for quality assurance.</p>
            <p>Results: Successfully completed projects, improving team collaboration and client deliverables.</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Digitization Workflow Optimization</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Consulted on digitizing business operations, implementing cloud-based tools and automation scripts. Technologies: Python, Google Workspace.</p>
            <p>Challenges: Legacy system integration; Solution: Designed custom APIs for seamless data flow.</p>
            <p>Results: Reduced operational costs by approximately 25% for clients.</p>
          </CardContent>
        </Card>
        
      </div>
    </section>
  );
}