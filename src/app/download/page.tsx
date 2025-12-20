
'use client';

import { useEffect, useState } from 'react';
import { trackAppRedirect } from '@/app/actions';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { Loader2 } from 'lucide-react';

const APP_STORE_URL = "https://apps.apple.com/in/app/yoloo/id6751438492";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share";
const FALLBACK_URL = "/home"; // Redirect to homepage if detection fails

export default function DownloadPage() {
    const [status, setStatus] = useState('Detecting your device...');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        
        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            setStatus('Redirecting to the App Store...');
            trackAppRedirect('apple').then(() => {
                window.location.href = APP_STORE_URL;
            });
        } 
        // Android detection
        else if (/android/i.test(userAgent)) {
            setStatus('Redirecting to the Play Store...');
            trackAppRedirect('google').then(() => {
                window.location.href = PLAY_STORE_URL;
            });
        } 
        // Fallback for desktops or other OS
        else {
            setStatus('Device not recognized, redirecting to homepage...');
            window.location.href = FALLBACK_URL;
        }
    }, []);

    return (
        <PageTransitionWrapper>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-4">
                <Loader2 className="w-12 h-12 animate-spin text-primary mb-6" />
                <h1 className="text-2xl font-semibold text-foreground mb-2">Please wait</h1>
                <p className="text-muted-foreground">{status}</p>
            </div>
        </PageTransitionWrapper>
    );
}
