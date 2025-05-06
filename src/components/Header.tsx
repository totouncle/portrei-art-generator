
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "Login Coming Soon",
      description: "Supabase integration is needed. Will be implemented soon.",
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
          <span>Tokens: 3 remaining</span>
        </div>
        
        <Button onClick={handleLogin} variant="outline" size="sm">
          Log In
        </Button>
        
        <Button className="hidden sm:flex bg-portrei-primary hover:bg-portrei-secondary" size="sm">
          Buy Tokens
        </Button>
      </div>
    </header>
  );
};

export default Header;
