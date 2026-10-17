import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";

export interface AlertOptions {
  title?: string;
  text?: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  timer?: number;
}

/**
 * ฟังก์ชันกลางสำหรับเรียก SweetAlert2 ได้ทุกหน้า
 * ตัวอย่าง: showAlert({ title: 'สำเร็จ!', text: 'ดำเนินการเรียบร้อยแล้ว', icon: 'success' })
 */
export const showAlert = ({
  title = "แจ้งเตือน",
  text = "",
  icon = "info",
  confirmButtonText = "ตกลง",
  confirmButtonColor = "#1d4ed8",
  timer,
}: AlertOptions = {}) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    confirmButtonColor,
    timer,
  });
};

/**
 * แจ้งเตือนสำเร็จ
 */
export const showSuccess = (title = "สำเร็จ!", text = "ดำเนินการเรียบร้อยแล้ว") => {
  return showAlert({ title, text, icon: "success" });
};

/**
 * แจ้งเตือนข้อผิดพลาด
 */
export const showError = (title = "เกิดข้อผิดพลาด!", text = "กรุณาลองใหม่อีกครั้ง") => {
  return showAlert({
    title,
    text,
    icon: "error",
    confirmButtonColor: "#dc2626",
  });
};

/**
 * แจ้งเตือนคำเตือน
 */
export const showWarning = (title = "คำเตือน", text = "") => {
  return showAlert({
    title,
    text,
    icon: "warning",
    confirmButtonColor: "#d97706",
  });
};

/**
 * กล่องยืนยัน (Confirmation dialog) เช่น ยืนยันการลบ หรือยืนยันการบันทึก
 */
export const showConfirm = async (
  title = "คุณแน่ใจหรือไม่?",
  text = "การกระทำนี้ไม่สามารถย้อนกลับได้",
  confirmButtonText = "ยืนยัน",
  cancelButtonText = "ยกเลิก"
) => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    confirmButtonColor: "#1d4ed8",
    cancelButtonColor: "#6b7280",
    reverseButtons: true,
  });

  return result.isConfirmed;
};

export default showAlert;

