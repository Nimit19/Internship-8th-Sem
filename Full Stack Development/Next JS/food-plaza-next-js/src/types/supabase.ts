export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cart_items: {
        Row: {
          cart_id: number | null
          created_at: string | null
          food_item_id: number | null
          id: number
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          cart_id?: number | null
          created_at?: string | null
          food_item_id?: number | null
          id?: never
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          cart_id?: number | null
          created_at?: string | null
          food_item_id?: number | null
          id?: never
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "carts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_items_food_item_id_fkey"
            columns: ["food_item_id"]
            isOneToOne: false
            referencedRelation: "food_items"
            referencedColumns: ["id"]
          },
        ]
      }
      carts: {
        Row: {
          created_at: string | null
          id: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: never
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: never
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "carts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons: {
        Row: {
          code: string | null
          created_at: string | null
          discount: number | null
          expiry_date: string | null
          id: number
          ispercent: boolean | null
          updated_at: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          discount?: number | null
          expiry_date?: string | null
          id?: never
          ispercent?: boolean | null
          updated_at?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          discount?: number | null
          expiry_date?: string | null
          id?: never
          ispercent?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      food_categories: {
        Row: {
          created_at: string | null
          food_category_name: string | null
          id: number
          is_popular_category: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          food_category_name?: string | null
          id?: never
          is_popular_category?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          food_category_name?: string | null
          id?: never
          is_popular_category?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      food_items: {
        Row: {
          available_quantity: number | null
          created_at: string | null
          delivery_charge: number | null
          description: string | null
          food_name: string | null
          food_weather: string | null
          id: number
          image_url: string | null
          is_popular_food: boolean | null
          preparing_time: string | null
          price: number | null
          restaurant_food_category_id: number | null
          restaurant_id: number | null
          updated_at: string | null
        }
        Insert: {
          available_quantity?: number | null
          created_at?: string | null
          delivery_charge?: number | null
          description?: string | null
          food_name?: string | null
          food_weather?: string | null
          id?: never
          image_url?: string | null
          is_popular_food?: boolean | null
          preparing_time?: string | null
          price?: number | null
          restaurant_food_category_id?: number | null
          restaurant_id?: number | null
          updated_at?: string | null
        }
        Update: {
          available_quantity?: number | null
          created_at?: string | null
          delivery_charge?: number | null
          description?: string | null
          food_name?: string | null
          food_weather?: string | null
          id?: never
          image_url?: string | null
          is_popular_food?: boolean | null
          preparing_time?: string | null
          price?: number | null
          restaurant_food_category_id?: number | null
          restaurant_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "food_items_restaurant_food_category_id_fkey"
            columns: ["restaurant_food_category_id"]
            isOneToOne: false
            referencedRelation: "restaurant_food_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "food_items_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          amount: number | null
          cart_item_id: number | null
          created_at: string | null
          id: number
          order_id: number | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          cart_item_id?: number | null
          created_at?: string | null
          id?: never
          order_id?: number | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          cart_item_id?: number | null
          created_at?: string | null
          id?: never
          order_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_cart_item_id_fkey"
            columns: ["cart_item_id"]
            isOneToOne: false
            referencedRelation: "cart_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          coupon_id: number | null
          created_at: string | null
          id: number
          order_at: string | null
          order_data: Json | null
          order_status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          coupon_id?: number | null
          created_at?: string | null
          id?: never
          order_at?: string | null
          order_data?: Json | null
          order_status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          coupon_id?: number | null
          created_at?: string | null
          id?: never
          order_at?: string | null
          order_data?: Json | null
          order_status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_history: {
        Row: {
          amount: number | null
          amount_due: number | null
          amount_paid: number | null
          cancelled_at: string | null
          created_at: string | null
          id: number
          order_id: number | null
          payment_method: string | null
          status: string | null
          transaction_at: string | null
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          amount_due?: number | null
          amount_paid?: number | null
          cancelled_at?: string | null
          created_at?: string | null
          id?: never
          order_id?: number | null
          payment_method?: string | null
          status?: string | null
          transaction_at?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          amount_due?: number | null
          amount_paid?: number | null
          cancelled_at?: string | null
          created_at?: string | null
          id?: never
          order_id?: number | null
          payment_method?: string | null
          status?: string | null
          transaction_at?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_history_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurant_food_categories: {
        Row: {
          category_name: string | null
          created_at: string | null
          food_category_id: number | null
          id: number
          restaurant_id: number | null
          updated_at: string | null
        }
        Insert: {
          category_name?: string | null
          created_at?: string | null
          food_category_id?: number | null
          id?: never
          restaurant_id?: number | null
          updated_at?: string | null
        }
        Update: {
          category_name?: string | null
          created_at?: string | null
          food_category_id?: number | null
          id?: never
          restaurant_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_food_categories_food_category_id_fkey"
            columns: ["food_category_id"]
            isOneToOne: false
            referencedRelation: "food_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "restaurant_food_categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurants: {
        Row: {
          address: Json | null
          average_cost: string | null
          closing_time: string | null
          created_at: string | null
          id: number
          is_open: boolean | null
          latitude: number | null
          longitude: number | null
          menu_page: Json | null
          opening_time: string | null
          ratings: number | null
          shop_bg: Json | null
          shop_description: string | null
          shop_logo_url: string | null
          shop_name: string | null
          updated_at: string | null
        }
        Insert: {
          address?: Json | null
          average_cost?: string | null
          closing_time?: string | null
          created_at?: string | null
          id?: never
          is_open?: boolean | null
          latitude?: number | null
          longitude?: number | null
          menu_page?: Json | null
          opening_time?: string | null
          ratings?: number | null
          shop_bg?: Json | null
          shop_description?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: Json | null
          average_cost?: string | null
          closing_time?: string | null
          created_at?: string | null
          id?: never
          is_open?: boolean | null
          latitude?: number | null
          longitude?: number | null
          menu_page?: Json | null
          opening_time?: string | null
          ratings?: number | null
          shop_bg?: Json | null
          shop_description?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string | null
          id: number
          role_name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: never
          role_name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: never
          role_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          address: Json | null
          created_at: string | null
          full_name: string
          id: string
          phone_number: string | null
          profile_url: string | null
          role_id: number
          updated_at: string | null
        }
        Insert: {
          address?: Json | null
          created_at?: string | null
          full_name: string
          id: string
          phone_number?: string | null
          profile_url?: string | null
          role_id: number
          updated_at?: string | null
        }
        Update: {
          address?: Json | null
          created_at?: string | null
          full_name?: string
          id?: string
          phone_number?: string | null
          profile_url?: string | null
          role_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
