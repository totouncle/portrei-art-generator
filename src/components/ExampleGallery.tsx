
import React from 'react';

const examples = [
  {
    before: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    after: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    style: 'Rough Sketch'
  },
  {
    before: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    after: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    style: 'Detailed Sketch'
  },
  {
    before: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    after: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    style: 'Light Coloring'
  }
];

const ExampleGallery = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Create AI Portraits in Various Styles
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
        Portrei uses AI technology to transform your photos into various artistic styles.
        Check out the vivid results through the examples below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <div className="bg-muted py-2 px-4 border-b">
              <h3 className="font-medium">{example.style} Style</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Original</p>
                <img 
                  src={example.before} 
                  alt="Before" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">After</p>
                <img 
                  src={example.after} 
                  alt="After" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExampleGallery;
