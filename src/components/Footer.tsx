'use client';

export default function Footer() {
  return (
    <footer className="relative bg-black py-24 border-t border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(5rem, 12vw, 10rem)',
            fontWeight: '300',
            color: 'rgb(160, 160, 160)',
            lineHeight: '0.9',
            letterSpacing: '0.08em',
            opacity: '0.8',
            fontStyle: 'italic'
          }}
        >
          Piku's
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
      `}</style>
    </footer>
  );
}