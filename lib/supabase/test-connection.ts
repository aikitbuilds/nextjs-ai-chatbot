import { supabase } from './client'

export async function testSupabaseConnection() {
  try {
    // Try to fetch a single row from clients_onboarding table
    const { data, error } = await supabase
      .from('clients_onboarding')
      .select('*')
      .limit(1)

    if (error) {
      console.error('Supabase connection error:', error.message)
      return false
    }

    console.log('Supabase connection successful!')
    return true
  } catch (error) {
    console.error('Unexpected error testing Supabase connection:', error)
    return false
  }
} 