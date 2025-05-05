
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ImageUploader from '@/components/ImageUploader';
import StyleSelector, { ArtStyle } from '@/components/StyleSelector';
import ProcessingStatus from '@/components/ProcessingStatus';
import PortraitResultDisplay from '@/components/PortraitResultDisplay';
import ExampleGallery from '@/components/ExampleGallery';
import FeatureSection from '@/components/FeatureSection';
import TokenPricing from '@/components/TokenPricing';
import Footer from '@/components/Footer';

// Current flow status in the application
type FlowStatus = 'upload' | 'analyzing' | 'style-selection' | 'generating' | 'result';

const Index = () => {
  const [status, setStatus] = useState<FlowStatus>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  
  // Simulate image processing progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (status === 'analyzing' || status === 'generating') {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 10) + 1;
          
          if (newProgress >= 100) {
            clearInterval(interval);
            
            // Move to next step
            if (status === 'analyzing') {
              setStatus('style-selection');
            } else if (status === 'generating') {
              // In a real app, this would be when we get the actual generated image
              setGeneratedImage(uploadedImage); // Just use uploaded image as a placeholder
              setStatus('result');
            }
            
            return 100;
          }
          
          return newProgress;
        });
      }, 500);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status, uploadedImage]);
  
  const handleImageSelect = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setStatus('analyzing');
  };
  
  const handleStyleSelect = (style: ArtStyle) => {
    setSelectedStyle(style);
    setStatus('generating');
  };
  
  const handleTryAnotherStyle = () => {
    setSelectedStyle(null);
    setGeneratedImage(null);
    setStatus('style-selection');
  };
  
  const getStyleName = () => {
    switch (selectedStyle) {
      case 'rough': return '약식 스케치';
      case 'detailed': return '상세 스케치';
      case 'color': return '밝은 컬러링';
      case 'artistic': return '예술적 스타일';
      default: return '';
    }
  };
  
  const renderMainContent = () => {
    switch (status) {
      case 'upload':
        return <ImageUploader onImageSelect={handleImageSelect} />;
        
      case 'analyzing':
        return <ProcessingStatus stage="analyzing" progress={progress} />;
        
      case 'style-selection':
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                스타일 선택
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                생성하고 싶은 초상화 스타일을 선택하세요. 각 스타일 당 1토큰이 사용됩니다.
              </p>
            </div>
            <StyleSelector onStyleSelect={handleStyleSelect} />
          </div>
        );
        
      case 'generating':
        return <ProcessingStatus 
          stage="generating" 
          progress={progress}
          style={getStyleName()}
        />;
        
      case 'result':
        return (
          <PortraitResultDisplay 
            originalImage={uploadedImage!}
            generatedImage={generatedImage!}
            styleName={getStyleName()}
            onTryAnotherStyle={handleTryAnotherStyle}
          />
        );
        
      default:
        return <div>오류가 발생했습니다.</div>;
    }
  };
  
  // Show hero section only on upload stage
  const showHero = status === 'upload';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {showHero && (
        <section className="py-12 portrei-gradient">
          <div className="container mx-auto px-4 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI 초상화 생성 서비스
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
              인공지능 기술로 당신의 사진을 예술적인 초상화로 변환하세요.
              4가지 독특한 스타일로 당신만의 작품을 만들어 보세요.
            </p>
          </div>
        </section>
      )}
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto mb-12">
            {renderMainContent()}
          </div>
          
          {showHero && (
            <>
              <ExampleGallery />
              <FeatureSection />
              <TokenPricing />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
