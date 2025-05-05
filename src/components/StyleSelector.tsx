
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
    name: '약식 스케치',
    description: '간결하고 빠른 스케치 스타일',
    color: 'bg-art-sketch',
    samples: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158']
  },
  {
    id: 'detailed',
    name: '상세 스케치',
    description: '정교하고 세밀한 연필 스케치 스타일',
    color: 'bg-art-detailed',
    samples: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d']
  },
  {
    id: 'color',
    name: '밝은 컬러링',
    description: '생동감 있는 컬러 스타일',
    color: 'bg-art-color',
    samples: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7']
  },
  {
    id: 'artistic',
    name: '예술적 스타일',
    description: '독창적인 예술 기법의 표현적 스타일',
    color: 'bg-art-artistic',
    samples: ['https://images.unsplash.com/photo-1518770660439-4636190af475']
  }
];

const StyleSelector: React.FC<StyleSelectorProps> = ({ onStyleSelect, disabled = false }) => {
  const { toast } = useToast();
  
  const handleStyleClick = (style: ArtStyle) => {
    if (disabled) {
      toast({
        title: "처리 중입니다",
        description: "현재 이미지를 처리 중입니다. 잠시 기다려주세요.",
      });
      return;
    }
    
    toast({
      title: `${styles.find(s => s.id === style)?.name} 스타일 선택됨`,
      description: "이미지를 분석하고 초상화를 생성합니다.",
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
            이 스타일 선택
          </Button>
        </div>
      ))}
    </div>
  );
};

export default StyleSelector;
