const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    title: "ลงทะเบียนผู้ใช้งาน",
    desc: "เจ้าหน้าที่ลงทะเบียนชื่อ-นามสกุล และข้อมูลผู้ที่ต้องการเข้าอาคารเข้าสู่ระบบ",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: "รับ QR Code ส่วนตัว",
    desc: "ระบบสร้าง QR Code เฉพาะบุคคลที่มีข้อมูลแบบเข้ารหัส ไม่สามารถปลอมแปลงได้",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "สแกน QR Code ที่จุดตรวจ",
    desc: "ใช้กล้องของอุปกรณ์สแกน QR Code ที่จุดตรวจประจำอาคารหรือห้องที่กำหนด",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "ยืนยันตัวตนและบันทึกเวลา",
    desc: "ระบบตรวจสอบสิทธิ์โดยอัตโนมัติ บันทึกเวลาเข้า-ออก พร้อมแจ้งผลทันที",
  },
];

const features = [
  { icon: "🔒", title: "ปลอดภัยสูง", desc: "QR Code เข้ารหัสเฉพาะบุคคล ป้องกันการปลอมแปลง" },
  { icon: "📊", title: "ติดตามได้ Real-time", desc: "ดูข้อมูลการเข้า-ออกอาคารได้แบบ Real-time" },
  { icon: "🏢", title: "หลายจุดตรวจ", desc: "รองรับการติดตั้งหลายจุดทั่วทั้งอาคาร" },
  { icon: "📱", title: "ใช้งานง่าย", desc: "สแกนผ่านมือถือหรือแท็บเล็ต ไม่ต้องติดตั้งแอพ" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
            วิธีการทำงาน
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ระบบรักษาความปลอดภัยด้วย QR Code
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            ระบบควบคุมการเข้า-ออกอาคารของสถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล
            ด้วยการสแกน QR Code ที่แม่นยำ รวดเร็ว และปลอดภัย
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <div className="w-7 h-7 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-blue-800 rounded-3xl p-8 sm:p-12">
          <h3 className="text-white text-2xl font-bold text-center mb-8">
            จุดเด่นของระบบ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h4 className="text-white font-semibold mb-2">{f.title}</h4>
                <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

