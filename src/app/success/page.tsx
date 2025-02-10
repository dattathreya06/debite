// app/success/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import Button from '@/components/ui/button';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect after 5 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Message Sent!</h1>
          <p className="text-gray-300">
            Thank you for contacting us. We'll get back to you shortly.
          </p>
        </div>
        <Button
          onClick={() => router.push('/')}
          className="w-full"
        >
          Return to Home
        </Button>
        <p className="mt-4 text-sm text-gray-400">
          You'll be automatically redirected in a few seconds...
        </p>
      </div>
    </div>
  );
}