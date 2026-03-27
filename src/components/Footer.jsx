import React from 'react'

export const Footer = () => {
  return (
   <footer style={{ backgroundColor: '#FF0000' }} className="py-5">
        <div className="container text-center">
          <div className="d-flex justify-content-center gap-4 mb-4" style={{ fontSize: '2rem' }}>
            <a href="#" className="text-black"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-black"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-black"><i className="bi bi-envelope-fill"></i></a>
            <a href="#" className="text-black"><i className="bi bi-tiktok"></i></a>
            <a href="#" className="text-black"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-black"><i className="bi bi-telegram"></i></a>
          </div>
          <p className="text-black small fw-bold">
            © 2026 RAIZURA Todos los derechos reservados
          </p>
        </div>
      </footer>
  )
}