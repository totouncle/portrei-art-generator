
import React from 'react';

const examples = [
  {
    before: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    after: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    style: '약식 스케치'
  },
  {
    before: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    after: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    style: '상세 스케치'
  },
  {
    before: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    after: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    style: '밝은 컬러링'
  }
];

const ExampleGallery = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-2 text-center">
        다양한 스타일의 AI 초상화를 생성해보세요
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
        Portrei는 AI 기술을 활용하여 당신의 사진을 다양한 예술적 스타일로 변환합니다.
        아래 예시를 통해 생생한 결과물을 확인하세요.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <div className="bg-muted py-2 px-4 border-b">
              <h3 className="font-medium">{example.style} 스타일</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-muted-foreground mb-1">원본</p>
                <img 
                  src={example.before} 
                  alt="Before" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">변환 후</p>
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
