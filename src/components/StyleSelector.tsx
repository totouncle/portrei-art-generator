
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export type ArtStyle = 'rough' | 'detailed' | 'color' | 'artistic';

interface StyleOption {
  id: ArtStyle;
  name: string;
  description: string;
  color: string;
  samples: string[];
}

interface StyleSelectorProps {
  onStyleSelect: (style: ArtStyle) => void;
  disabled?: boolean;
}

const styles: StyleOption[] = [
  {
    id: 'rough',
    name: 'Rough Sketch',
    description: 'Quick and simple sketch style',
    color: 'bg-art-sketch',
    samples: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158']
  },
  {
    id: 'detailed',
    name: 'Detailed Sketch',
    description: 'Elaborate and detailed pencil sketch style',
    color: 'bg-art-detailed',
    samples: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d']
  },
  {
    id: 'color',
    name: 'Light Coloring',
    description: 'Vibrant color style',
    color: 'bg-art-color',
    samples: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7']
  },
  {
    id: 'artistic',
    name: 'Artistic Style',
    description: 'Expressive style with unique artistic techniques',
    color: 'bg-art-artistic',
    samples: ['https://images.unsplash.com/photo-1518770660439-4636190af475']
  }
];

const StyleSelector: React.FC<StyleSelectorProps> = ({ onStyleSelect, disabled = false }) => {
  const { toast } = useToast();
  
  const handleStyleClick = (style: ArtStyle) => {
    if (disabled) {
      toast({
        title: "Processing in Progress",
        description: "Currently processing your image. Please wait.",
      });
      return;
    }
    
    toast({
      title: `${styles.find(s => s.id === style)?.name} Style Selected`,
      description: "Analyzing image and creating portrait.",
    });
    
    onStyleSelect(style);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {styles.map((style) => (
        <div 
          key={style.id}
          className={`rounded-xl border p-4 cursor-pointer transition-all hover:shadow-md ${disabled ? 'opacity-60' : ''}`}
          onClick={() => handleStyleClick(style.id)}
        >
          <div className={`${style.color} h-40 rounded-lg mb-4 overflow-hidden`}>
            <img 
              src={style.samples[0]} 
              alt={style.name}
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
          </div>
          
          <h3 className="text-lg font-medium mb-2">
            {style.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            {style.description}
          </p>
          
          <Button 
            variant="outline" 
            className="w-full hover:bg-portrei-primary hover:text-white transition-colors"
            disabled={disabled}
          >
            Select This Style
          </Button>
        </div>
      ))}
    </div>
  );
};

export default StyleSelector;
