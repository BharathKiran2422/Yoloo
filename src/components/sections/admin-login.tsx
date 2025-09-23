'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { KeyRound } from 'lucide-react';
import { verifyAdminPassword } from '@/app/actions';

type AdminLoginProps = {
  onLoginSuccess: () => void;
};

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const isValid = await verifyAdminPassword(password);
      if (isValid) {
        onLoginSuccess();
      } else {
        toast({
          variant: 'destructive',
          title: 'Login Failed',
          description: 'The password you entered is incorrect.',
        });
      }
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'An error occurred during login. Please try again.',
        });
        console.error('Admin login error:', error);
    } finally {
        setIsLoading(false);
        setPassword('');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <KeyRound className="h-8 w-8" />
          </div>
          <CardTitle>Admin Access</CardTitle>
          <CardDescription>Enter the password to view messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
