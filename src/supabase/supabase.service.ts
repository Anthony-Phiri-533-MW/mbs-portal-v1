import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  constructor(@Inject('SupabaseClient') private readonly supabase: SupabaseClient) {}

  async findAll(): Promise<any[]> {
    const { data, error } = await this.supabase
      .from('table_name')
      .select()
      .eq('column_name', 'value');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

