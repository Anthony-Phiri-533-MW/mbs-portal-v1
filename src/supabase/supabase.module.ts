import { Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

import { SupabaseService } from './supabase.service';
import { SupabaseController } from './supabase.controller';

@Module({
  providers: [
    {
      provide: 'SupabaseClient',
      useValue: createClient('https://fuxcvihidghyeqhjtcjq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1eGN2aWhpZGdoeWVxaGp0Y2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwODgwNDgsImV4cCI6MjAwMTY2NDA0OH0.-K6zjm2iNlyT5PepuTOFSCTQ-sxVK06LdQWEoCe8MNQ'),
    },
    SupabaseService,
  ],
  exports: ['SupabaseClient', SupabaseService],
  controllers: [SupabaseController],
})
export class SupabaseModule {}
