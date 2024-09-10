import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('example')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.supabaseService.findAll();
  }
}
