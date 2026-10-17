export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-3 py-1 bg-blue-500/30 text-blue-200 text-sm font-medium rounded-full mb-4">
            ระบบรักษาความปลอดภัย
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            IPSR Security
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl font-medium mb-2">
            สถาบันวิจัยประชากรและสังคม
          </p>
          <p className="text-blue-300 text-base sm:text-lg mb-8">
            มหาวิทยาลัยมหิดล
          </p>
          <p className="text-blue-100 text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            ระบบควบคุมการเข้า-ออกอาคารด้วยเทคโนโลยี QR Code
            ที่ทันสมัย ปลอดภัย และตรวจสอบได้
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="/login"
              className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              เริ่มใช้งานระบบ
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 border border-blue-300 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              ดูวิธีการใช้งาน
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {/* QR Code illustration */}
            <div className="w-full h-full bg-white/10 rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-4 p-8">
              <svg
                className="w-28 h-28 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {/* QR Grid visual */}
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 rounded-sm ${
                      [0, 1, 2, 5, 6, 7, 10, 11, 12, 15, 20, 21, 22, 24].includes(i)
                        ? "bg-white"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/80 text-xs font-medium">QR Code Scanner</p>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-green-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              ✓ ปลอดภัย
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

