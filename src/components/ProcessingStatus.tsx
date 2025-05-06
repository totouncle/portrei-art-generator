
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProcessingStatusProps {
  stage: 'analyzing' | 'generating';
  progress: number;
  style?: string;
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({ 
  stage, 
  progress,
  style
}) => {
  return (
    <div className="w-full max-w-md mx-auto text-center py-10">
      <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-slow">
        <div className="w-12 h-12 portrei-gradient rounded-full"></div>
      </div>
      
      <h3 className="text-xl font-medium mb-2">
        {stage === 'analyzing' ? 'Analyzing Image...' : `Creating ${style} Portrait...`}
      </h3>
      
      <p className="text-muted-foreground mb-6">
        {stage === 'analyzing' 
          ? 'Analyzing facial features and generating the optimal prompt.' 
          : 'Creating your unique portrait. Please wait a moment.'}
      </p>
      
      <Progress value={progress} className="h-2 mb-2" />
      
      <p className="text-sm text-muted-foreground">
        {progress}% Complete
      </p>
    </div>
  );
};

export default ProcessingStatus;
