
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PortraitResultDisplayProps {
  originalImage: string;
  generatedImage: string;
  styleName: string;
  onTryAnotherStyle: () => void;
}

const PortraitResultDisplay: React.FC<PortraitResultDisplayProps> = ({
  originalImage,
  generatedImage,
  styleName,
  onTryAnotherStyle
}) => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // In a real app, this would trigger an actual download
    toast({
      title: "Download Started",
      description: "Your portrait image is downloading.",
    });
  };
  
  const handleShare = () => {
    // In a real app, this would open share options
    toast({
      title: "Sharing Feature Coming Soon",
      description: "Will be implemented soon.",
    });
  };
  
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your <span className="text-portrei-primary">{styleName}</span> Portrait
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-xl overflow-hidden">
          <div className="bg-muted py-2 px-4 border-b">
            <h3 className="font-medium">Original Image</h3>
          </div>
          <div className="p-4 flex justify-center">
            <img 
              src={originalImage} 
              alt="Original" 
              className="max-h-[400px] object-contain rounded-md"
            />
          </div>
        </div>
        
        <div className="border rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-portrei-primary to-portrei-secondary py-2 px-4 border-b">
            <h3 className="font-medium text-white">Generated Portrait</h3>
          </div>
          <div className="p-4 flex justify-center">
            <img 
              src={generatedImage} 
              alt="Generated Portrait" 
              className="max-h-[400px] object-contain rounded-md"
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="bg-portrei-primary hover:bg-portrei-secondary flex gap-2 items-center"
          onClick={handleDownload}
        >
          <Download size={16} />
          Download
        </Button>
        
        <Button 
          variant="outline" 
          className="flex gap-2 items-center"
          onClick={handleShare}
        >
          <Share size={16} />
          Share
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={onTryAnotherStyle}
        >
          Try Another Style
        </Button>
      </div>
    </div>
  );
};

export default PortraitResultDisplay;
