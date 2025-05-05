
import React from 'react';
import { Image, Brush, Star, Download } from 'lucide-react';

const features = [
  {
    icon: <Image className="w-6 h-6" />,
    title: '간편한 업로드',
    description: '원하는 사진을 간단히 업로드하기만 하면 됩니다.'
  },
  {
    icon: <Brush className="w-6 h-6" />,
    title: '다양한 스타일',
    description: '4가지 특색 있는 예술 스타일로 초상화를 생성합니다.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: '고품질 결과물',
    description: '최신 AI 기술로 고품질의 예술적인 초상화를 제공합니다.'
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: '즉시 다운로드',
    description: '생성된 초상화를 바로 다운로드하여 사용할 수 있습니다.'
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-accent/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Portrei로 가능한 것들
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          인공지능 기술을 활용한 Portrei의 강력한 기능들을 살펴보세요.
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
