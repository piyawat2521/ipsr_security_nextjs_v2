# IPSR Security — ระบบรักษาความปลอดภัยอาคารด้วย QR Code

ระบบควบคุมและบันทึกการเข้า-ออกอาคารด้วยการสแกน QR Code สำหรับ **สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล (IPSR)**

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + Flowbite
- **QR Code Scanner:** `html5-qrcode` (รันบน Client Side เท่านั้น)
- **Alert System:** SweetAlert2 (ผ่าน Utility `lib/alert.ts`)
- **Database & Backend Infra:** Docker (MySQL 8.0 + phpMyAdmin)

---

## 🐳 ข้อมูลการเชื่อมต่อฐานข้อมูลใน Docker

| Service | Host | Port | Database | Username | Password |
|---|---|---|---|---|---|
| **MySQL** | `localhost` | `3306` | `ipsr_security` | `root` | *(ไม่มีรหัสผ่าน)* |
| **phpMyAdmin** | `localhost` | `8080` | - | `root` | *(ไม่มีรหัสผ่าน)* |

- **phpMyAdmin Web UI:** [http://localhost:8080](http://localhost:8080)
- **Next.js Connection String (DATABASE_URL):**  
  `mysql://root:@localhost:3306/ipsr_security`

---

## 🚀 ขั้นตอนการติดตั้งและรันฐานข้อมูลใน Docker

### 1. ตรวจสอบไฟล์ที่เกี่ยวข้อง

โปรเจกต์มีไฟล์คอนฟิกสำหรับ Docker ดังนี้:
- [`docker-compose.yml`](docker-compose.yml) — ตั้งค่า Service MySQL 8.0 และ phpMyAdmin
- [`sql/init.sql`](sql/init.sql) — สคริปต์สร้าง Database, ตาราง (Tables) และข้อมูลเริ่มต้น (Seed Data) อัตโนมัติเมื่อ Container เริ่มทำงานครั้งแรก

### 2. คำสั่งเริ่มต้นรันฐานข้อมูล (Start)

เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วสั่ง:

```bash
docker compose up -d
```

> **คำอธิบาย:** ธง `-d` (Detached mode) หมายถึงให้รันในเบื้องหลัง

### 3. ตรวจสอบสถานะ Containers

```bash
docker ps
```
จะพบ 2 containers รันอยู่:
- `ipsr_mysql` (Status: Healthy, Port `0.0.0.0:3306->3306/tcp`)
- `ipsr_phpmyadmin` (Port `0.0.0.0:8080->80/tcp`)

### 4. เข้าจัดการฐานข้อมูลผ่าน phpMyAdmin

1. เปิดเบราว์เซอร์ไปที่ [http://localhost:8080](http://localhost:8080)
2. ระบบจะล็อกอินให้โดยอัตโนมัติ (หรือใส่ Username: `root` และ Password เว้นว่าง)
3. จะพบฐานข้อมูล `ipsr_security` พร้อมตารางที่สร้างไว้:
   - `users`: ข้อมูลผู้ใช้งาน/เจ้าหน้าที่ รปภ.
   - `checkpoints`: จุดตรวจสแกน QR Code ประจำอาคาร
   - `scan_logs`: บันทึกประวัติการเดินตรวจสแกน

### 5. คำสั่งจัดการ Docker อื่นๆ ที่มีประโยชน์

```bash
# ดู Log การทำงานของฐานข้อมูล
docker compose logs -f

# หยุดการทำงาน (Stop containers)
docker compose down

# หยุดการทำงานพร้อมลบ Volume ข้อมูล (Reset Database ทั้งหมด)
docker compose down -v

# รันใหม่พร้อม Build สด
docker compose up -d --force-recreate
```

---

## 💻 การติดตั้งและรันเว็บแอปพลิเคชัน (Next.js)

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. รันใน Development Mode

```bash
npm run dev
```

เปิดดูหน้าเว็บที่ [http://localhost:3000](http://localhost:3000)

---

## 🔔 การใช้งานกล่องแจ้งเตือน SweetAlert2 (`lib/alert.ts`)

สามารถเรียกใช้ได้ง่ายในทุก Client Component (`'use client'`):

```tsx
'use client';

import { showAlert, showSuccess, showError, showWarning, showConfirm } from '@/lib/alert';

// 1. เรียกแบบกำหนดข้อความเอง
showAlert({
  title: 'สำเร็จ!',
  text: 'ดำเนินการเรียบร้อยแล้ว',
  icon: 'success', // 'success' | 'error' | 'warning' | 'info' | 'question'
});

// 2. เรียกแบบฟังก์ชันลัด
showSuccess('บันทึกสำเร็จ', 'ข้อมูลถูกบันทึกลงระบบแล้ว');
showError('เกิดข้อผิดพลาด', 'ไม่สามารถเชื่อมต่อได้');
showWarning('คำเตือน', 'กรุณากรอกข้อมูลให้ครบถ้วน');

// 3. กล่องยืนยันก่อนทำรายการ (Confirmation)
const handleAction = async () => {
  const confirmed = await showConfirm('ยืนยันการลบจุดตรวจ?');
  if (confirmed) {
    showSuccess('ลบเรียบร้อย');
  }
};
```

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
ipsr_security_nextjs_v2/
├── app/
│   ├── layout.tsx       # Root layout ภาษาไทย + Metadata
│   ├── page.tsx         # หน้าหลักเชื่อมต่อ Components
│   └── globals.css      # Tailwind CSS styles
├── components/
│   ├── Navbar.tsx       # แถบเมนูด้านบน + โลโก้ IPSR + ปุ่มเข้าสู่ระบบ
│   ├── Hero.tsx         # ส่วนหัวต้อนรับ IPSR Security สถาบันวิจัยประชากรและสังคม
│   ├── HowItWorks.tsx   # อธิบาย 4 ขั้นตอนการทำงานระบบ QR Code
│   └── Footer.tsx       # ส่วนท้ายเว็บ ข้อมูลติดต่อมหาวิทยาลัยมหิดล
├── lib/
│   └── alert.ts         # Utility กลางสำหรับเรียก SweetAlert2 ทุกหน้า
├── sql/
│   └── init.sql         # สคริปต์ตั้งต้นฐานข้อมูล MySQL
├── docker-compose.yml   # คอนฟิกรัน MySQL 8.0 & phpMyAdmin
└── README.md            # เอกสารประกอบโปรเจกต์
```
