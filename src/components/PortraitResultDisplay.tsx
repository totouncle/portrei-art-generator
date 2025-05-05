
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
      title: "다운로드 시작",
      description: "초상화 이미지가 다운로드됩니다.",
    });
  };
  
  const handleShare = () => {
    // In a real app, this would open share options
    toast({
      title: "공유 기능 준비 중",
      description: "곧 구현될 예정입니다.",
    });
  };
  
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-center">
        당신의 <span className="text-portrei-primary">{styleName}</span> 초상화
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-xl overflow-hidden">
          <div className="bg-muted py-2 px-4 border-b">
            <h3 className="font-medium">원본 이미지</h3>
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
            <h3 className="font-medium text-white">생성된 초상화</h3>
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
          다운로드
        </Button>
        
        <Button 
          variant="outline" 
          className="flex gap-2 items-center"
          onClick={handleShare}
        >
          <Share size={16} />
          공유하기
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={onTryAnotherStyle}
        >
          다른 스타일 시도하기
        </Button>
      </div>
    </div>
  );
};

export default PortraitResultDisplay;
