import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock3, Link2, ShieldCheck } from 'lucide-react';

const MeetingRoom = () => {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 hover:bg-blue-50">
              Active meeting
            </Badge>
            <Badge variant="outline" className="rounded-full border-emerald-200 bg-emerald-50/80 text-emerald-700">
              <ShieldCheck className="mr-1 h-3.5 w-3.5" />
              Secure
            </Badge>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Product sync</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              A clean Meet-style room for video, chat, and transcription updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
              <Link2 className="h-4 w-4 text-blue-600" />
              meet.google.com/demo-room
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
              <Clock3 className="h-4 w-4 text-blue-600" />
              45 min remaining
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
              <CalendarDays className="h-4 w-4 text-blue-600" />
              3 participants
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-full">
            Copy invite
          </Button>
          <Button className="rounded-full">
            Start presentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
