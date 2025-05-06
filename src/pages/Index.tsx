
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
      case 'rough': return 'Rough Sketch';
      case 'detailed': return 'Detailed Sketch';
      case 'color': return 'Light Coloring';
      case 'artistic': return 'Artistic Style';
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
                Select Style
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Choose a portrait style you'd like to generate. Each style uses 1 token.
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
        return <div>An error occurred.</div>;
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
              AI Portrait Generation Service
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
              Transform your photos into artistic portraits using AI technology.
              Create your unique artwork in 4 distinctive styles.
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
