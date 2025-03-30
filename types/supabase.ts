export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients_onboarding: {
        Row: {
          id: string
          user_id: string
          business_name: string | null
          website_url: string | null
          niche_description: string | null
          ai_persona: string | null
          brand_voice_keywords: string[] | null
          ai_voice_guide: string | null
          primary_goal: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          business_name?: string | null
          website_url?: string | null
          niche_description?: string | null
          ai_persona?: string | null
          brand_voice_keywords?: string[] | null
          ai_voice_guide?: string | null
          primary_goal?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string | null
          website_url?: string | null
          niche_description?: string | null
          ai_persona?: string | null
          brand_voice_keywords?: string[] | null
          ai_voice_guide?: string | null
          primary_goal?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      leads_qualified: {
        Row: {
          id: string
          session_id: string
          conversation_history: Json | null
          qualification_score: number | null
          summary: string | null
          contact_info: string | null
          status: string | null
          created_at: string
        }
        Insert: {
          id?: string
          session_id: string
          conversation_history?: Json | null
          qualification_score?: number | null
          summary?: string | null
          contact_info?: string | null
          status?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          conversation_history?: Json | null
          qualification_score?: number | null
          summary?: string | null
          contact_info?: string | null
          status?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 