
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
        title: "Only image files can be uploaded.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Size Limit",
        description: "Only images under 5MB can be uploaded.",
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
          Upload Image
        </h3>
        
        <p className="text-muted-foreground text-center max-w-md mb-4">
          Drag and drop or click to upload JPG, PNG files.
          For optimal results, choose a photo where the face is clearly visible.
        </p>
        
        <Button className="bg-portrei-primary hover:bg-portrei-secondary">
          Select Photo
        </Button>
      </label>
    </div>
  );
};

export default ImageUploader;
