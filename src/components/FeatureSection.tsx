
import React from 'react';
import { Image, Brush, Star, Download } from 'lucide-react';

const features = [
  {
    icon: <Image className="w-6 h-6" />,
    title: 'Easy Upload',
    description: 'Simply upload your desired photo to get started.'
  },
  {
    icon: <Brush className="w-6 h-6" />,
    title: 'Various Styles',
    description: 'Generate portraits in 4 distinctive artistic styles.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'High-Quality Results',
    description: 'Receive artistic portraits using the latest AI technology.'
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Instant Download',
    description: 'Download your generated portraits immediately for use.'
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-accent/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          What You Can Do With Portrei
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Explore the powerful features of Portrei using artificial intelligence technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-portrei-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="text-portrei-primary">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
