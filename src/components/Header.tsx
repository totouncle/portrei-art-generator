
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "로그인 준비 중",
      description: "현재 Supabase 연동이 필요합니다. 곧 구현될 예정입니다.",
    });
  };

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg portrei-gradient flex items-center justify-center">
          <span className="text-white font-bold text-xl">P</span>
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-portrei-primary to-portrei-secondary bg-clip-text text-transparent">
          Portrei
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 text-sm bg-muted px-3 py-1 rounded-full">
          <span className="inline-block w-2 h-2 bg-portrei-primary rounded-full"></span>
          <span>토큰: 3개 남음</span>
        </div>
        
        <Button onClick={handleLogin} variant="outline" size="sm">
          로그인
        </Button>
        
        <Button className="hidden sm:flex bg-portrei-primary hover:bg-portrei-secondary" size="sm">
          토큰 구매
        </Button>
      </div>
    </header>
  );
};

export default Header;
