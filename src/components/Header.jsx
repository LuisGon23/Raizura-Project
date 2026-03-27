import React, { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: '#c0392b' }} className='d-flex justify-content-between align-items-center px-4 py-3'>
      
      <div className='position-relative'>
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        {open && (
          <ul className='list-unstyled position-absolute mt-2 p-3' style={{
            backgroundColor: '#c0392b',
            minWidth: '160px',
            zIndex: 1000,
            top: '100%',
            left: 0
          }}>
            <li><a href='#' className='text-white text-decoration-none d-block py-1'>Home</a></li>
            <li><a href='#' className='text-white text-decoration-none d-block py-1'>Nosotros</a></li>
            <li><a href='#' className='text-white text-decoration-none d-block py-1'>Menú</a></li>
            <li><a href='#' className='text-white text-decoration-none d-block py-1'>Contacto</a></li>
          </ul>
        )}
      </div>

      <img src='/Raizura logo_Mesa de trabajo 1.png' alt='Raizura' style={{ height: '100px' }} />

    </header>
  )
}