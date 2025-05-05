
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const plans = [
  {
    name: '기본 패키지',
    tokens: 10,
    price: 5000,
    perToken: 500,
    isPopular: false
  },
  {
    name: '인기 패키지',
    tokens: 30,
    price: 12000,
    perToken: 400,
    isPopular: true
  },
  {
    name: '프리미엄 패키지',
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
      title: "결제 시스템 준비 중",
      description: "Stripe 결제 연동이 필요합니다. 곧 구현될 예정입니다.",
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };
  
  return (
    <section id="pricing" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          토큰 패키지
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          토큰을 구매하여 다양한 스타일의 초상화를 생성하세요. 
          각 스타일 생성당 1개의 토큰이 사용됩니다.
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
                  인기 상품
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-2">
                {plan.name}
              </h3>
              
              <div className="text-3xl font-bold mb-1">
                ₩{formatPrice(plan.price)}
              </div>
              
              <p className="text-muted-foreground mb-6">
                토큰당 {formatPrice(plan.perToken)}원
              </p>
              
              <div className="flex items-center mb-4">
                <div className="mr-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-portrei-primary font-bold">{plan.tokens}</span>
                </div>
                <div>
                  <p className="font-medium">토큰 {plan.tokens}개</p>
                  <p className="text-sm text-muted-foreground">
                    {plan.tokens}개의 초상화 생성 가능
                  </p>
                </div>
              </div>
              
              <ul className="mb-6 flex-grow">
                <li className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  <span>모든 스타일 옵션 이용 가능</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  <span>고해상도 다운로드</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  <span>결과물 영구 보관</span>
                </li>
              </ul>
              
              <Button 
                className={plan.isPopular ? "bg-portrei-primary hover:bg-portrei-secondary" : ""}
                onClick={() => handlePurchase(plan.name)}
              >
                {plan.isPopular ? '인기 패키지 구매하기' : '패키지 구매하기'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenPricing;
