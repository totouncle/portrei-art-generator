
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
        {stage === 'analyzing' ? '이미지 분석 중...' : `${style} 초상화 생성 중...`}
      </h3>
      
      <p className="text-muted-foreground mb-6">
        {stage === 'analyzing' 
          ? '얼굴 특성을 분석하고 최적의 프롬프트를 생성하고 있습니다.' 
          : '당신의 독특한 초상화를 생성하고 있습니다. 잠시만 기다려주세요.'}
      </p>
      
      <Progress value={progress} className="h-2 mb-2" />
      
      <p className="text-sm text-muted-foreground">
        {progress}% 완료
      </p>
    </div>
  );
};

export default ProcessingStatus;
