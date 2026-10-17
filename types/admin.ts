export type AdminRole = "admin" | "staff";

export interface AdminUser {
  id: number;
  username: string;
  full_name: string;
  role: AdminRole;
  email?: string | null;
  phone?: string | null;
  department?: string;
  is_active: boolean;
  last_login_at?: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * ตัวช่วยเช็คสิทธิ์ (Helper Functions)
 */
export const isAdmin = (user: { role: AdminRole }): boolean => {
  return user.role === "admin";
};

export const isStaff = (user: { role: AdminRole }): boolean => {
  return user.role === "staff";
};

