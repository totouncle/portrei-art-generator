
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const plans = [
  {
    name: 'Basic Package',
    tokens: 10,
    price: 5000,
    perToken: 500,
    isPopular: false
  },
  {
    name: 'Popular Package',
    tokens: 30,
    price: 12000,
    perToken: 400,
    isPopular: true
  },
  {
    name: 'Premium Package',
    tokens: 100,
    price: 30000,
    perToken: 300,
    isPopular: false
  }
];

const TokenPricing = () => {
  const { toast } = useToast();
  
  const handlePurchase = (plan: string) => {
    toast({
      title: "Payment System Coming Soon",
      description: "Stripe integration is needed. Will be implemented soon.",
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };
  
  return (
    <section id="pricing" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Token Packages
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Purchase tokens to generate portraits in various styles. 
          Each style generation uses 1 token.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-xl p-6 flex flex-col ${
                plan.isPopular ? 'border-portrei-primary shadow-lg relative' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-portrei-primary text-white py-1 px-3 rounded-bl-lg rounded-tr-lg text-xs font-medium">
                  Popular
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-2">
                {plan.name}
              </h3>
              
              <div className="text-3xl font-bold mb-1">
                ${formatPrice(plan.price/1000)}
              </div>
              
              <p className="text-muted-foreground mb-6">
                ${formatPrice(plan.perToken/1000)} per token
              </p>
              
              <div className="flex items-center mb-4">
                <div className="mr-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-portrei-primary font-bold">{plan.tokens}</span>
                </div>
                <div>
                  <p className="font-medium">{plan.tokens} Tokens</p>
                  <p className="text-sm text-muted-foreground">
                    Generate {plan.tokens} portraits
                  </p>
                </div>
              </div>
              
              <ul className="mb-6 flex-grow">
                <li className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  <span>All style options available</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  <span>High-resolution download</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  <span>Permanent storage of results</span>
                </li>
              </ul>
              
              <Button 
                className={plan.isPopular ? "bg-portrei-primary hover:bg-portrei-secondary" : ""}
                onClick={() => handlePurchase(plan.name)}
              >
                {plan.isPopular ? 'Buy Popular Package' : 'Buy Package'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenPricing;
