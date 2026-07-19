import { getSupabaseClient } from '@/lib/supabase/client';

export async function getOrders(limit = 10, offset = 0) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .limit(limit)
    .offset(offset);

  if (error) throw error;
  return data;
}

export async function createOrder(order: any) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('orders')
    .insert([order])
    .select();

  if (error) throw error;
  return data?.[0];
}
