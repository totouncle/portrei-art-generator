
import React, { useState, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  }, []);
  
  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      handleFiles(files);
    }
  }, []);
  
  const handleFiles = useCallback((files: FileList) => {
    const file = files[0];
    
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "이미지 파일만 업로드 가능합니다.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "파일 크기 제한",
        description: "5MB 이하의 이미지만 업로드 가능합니다.",
        variant: "destructive",
      });
      return;
    }
    
    onImageSelect(file);
  }, [onImageSelect, toast]);
  
  return (
    <div 
      className={`drop-zone p-10 flex flex-col items-center justify-center cursor-pointer ${isDragging ? 'active' : 'border-muted-foreground/30'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        id="file-upload" 
        className="hidden" 
        accept="image/*"
        onChange={handleFileInput}
      />
      
      <label htmlFor="file-upload" className="w-full flex flex-col items-center cursor-pointer">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
          <Upload className="h-8 w-8 text-portrei-primary" />
        </div>
        
        <h3 className="text-xl font-medium mb-2">
          이미지 업로드
        </h3>
        
        <p className="text-muted-foreground text-center max-w-md mb-4">
          JPG, PNG 파일을 드래그하거나 클릭하여 업로드하세요.
          최적의 결과를 위해 얼굴이 명확하게 보이는 사진을 선택하세요.
        </p>
        
        <Button className="bg-portrei-primary hover:bg-portrei-secondary">
          사진 선택
        </Button>
      </label>
    </div>
  );
};

export default ImageUploader;
