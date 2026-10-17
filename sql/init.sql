-- สร้างฐานข้อมูล ipsr_security หากยังไม่มี
CREATE DATABASE IF NOT EXISTS `ipsr_security` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `ipsr_security`;

-- 1. ตารางผู้ใช้งาน / เจ้าหน้าที่ (users)
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `role` ENUM('admin', 'guard', 'staff') NOT NULL DEFAULT 'guard',
  `department` VARCHAR(100) DEFAULT 'ฝ่ายรักษาความปลอดภัย',
  `phone` VARCHAR(20) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. ตารางจุดตรวจสแกน QR Code (checkpoints)
CREATE TABLE IF NOT EXISTS `checkpoints` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `qr_code_key` VARCHAR(100) NOT NULL UNIQUE,
  `description` TEXT DEFAULT NULL,
  `is_active` BOOLEAN DEFAULT TRUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. ตารางประวัติการสแกน QR Code (scan_logs)
CREATE TABLE IF NOT EXISTS `scan_logs` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `checkpoint_id` INT NOT NULL,
  `user_id` INT DEFAULT NULL,
  `scanned_by_name` VARCHAR(100) NOT NULL,
  `scan_type` ENUM('patrol', 'entry', 'exit') NOT NULL DEFAULT 'patrol',
  `status` ENUM('success', 'failed') NOT NULL DEFAULT 'success',
  `note` TEXT DEFAULT NULL,
  `scanned_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_scan_checkpoint` FOREIGN KEY (`checkpoint_id`) REFERENCES `checkpoints` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_scan_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ข้อมูลตั้งต้นสำหรับการทดสอบ (Initial Seed Data)
INSERT INTO `users` (`username`, `password`, `full_name`, `role`, `department`) VALUES
('admin', 'admin1234', 'ผู้ดูแลระบบ IPSR', 'admin', 'งานเทคโนโลยีสารสนเทศ'),
('guard01', 'guard1234', 'นายสมชาย มั่นคง (รปภ. ประจำกะเช้า)', 'guard', 'ฝ่ายรักษาความปลอดภัย')
ON DUPLICATE KEY UPDATE `full_name` = VALUES(`full_name`);

INSERT INTO `checkpoints` (`name`, `location`, `qr_code_key`, `description`) VALUES
('จุดตรวจ 1: ทางเข้า-ออกหลัก อาคารประชาสังคมอุดมพัฒน์', 'ชั้น 1 ประตูหน้า', 'IPSR-CP-001', 'ประตูทางเข้าหลักด้านหน้าอาคาร'),
('จุดตรวจ 2: ทางหนีไฟ ชั้น 2', 'ชั้น 2 บันไดหนีไฟทิศตะวันออก', 'IPSR-CP-002', 'ตรวจความเรียบร้อยทางหนีไฟและอุปกรณ์ดับเพลิง'),
('จุดตรวจ 3: ห้องแม่ข่ายคอมพิวเตอร์ (Server Room)', 'ชั้น 3 ฝ่ายไอที', 'IPSR-CP-003', 'ห้องควบคุมระบบสารสนเทศ'),
('จุดตรวจ 4: ลานจอดรถด้านหลังอาคาร', 'ลานจอดรถชั้นใต้ดิน', 'IPSR-CP-004', 'พื้นที่จอดรถและทางเข้าด้านหลัง')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);
