import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TranscriptionPanel = () => {
  return (
    <Card className="border-slate-200 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold text-slate-900">Live transcription</CardTitle>
        <p className="text-sm text-slate-500">Speaker labels and AI summary appear here in real time.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-[320px] space-y-3 overflow-y-auto pr-1">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">John Doe · 10:30 AM</p>
            <p className="mt-1 text-sm text-slate-600">Welcome everyone to today's meeting. Let's start with the agenda.</p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-700">AI Summary</p>
            <p className="mt-1 text-sm text-slate-700"><em>Meeting started with agenda discussion.</em></p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">Jane Smith · 10:32 AM</p>
            <p className="mt-1 text-sm text-slate-600">Thanks John. I'd like to discuss the quarterly results first.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">Mike Johnson · 10:33 AM</p>
            <p className="mt-1 text-sm text-slate-600">Sounds good. I have the presentation ready to share.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-full">
            Export transcript
          </Button>
          <Button className="rounded-full">
            Generate summary
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TranscriptionPanel;
