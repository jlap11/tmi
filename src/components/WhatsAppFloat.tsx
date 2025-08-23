import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { WhatsappLogo, X } from '@phosphor-icons/react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Mostrar tooltip automáticamente después de 3 segundos
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Ocultar tooltip después de 5 segundos adicionales
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const openWhatsApp = () => {
  const message = encodeURIComponent("Hola, estoy interesado en sus servicios.")
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
    setShowTooltip(false)
  }

  const hideButton = () => {
    setIsVisible(false)
  }

  const dismissTooltip = () => {
    setShowTooltip(false)
  }

  if (!isVisible) return null

  return (
  <div className="whatsapp-float">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 mr-2 max-w-xs">
          <div className="relative bg-white rounded-lg shadow-lg border p-4">
            <button
              onClick={dismissTooltip}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="pr-6">
              <div className="flex items-center gap-2 mb-2">
                <WhatsappLogo className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-sm">¿Necesitas ayuda?</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Chatea con nosotros por WhatsApp y obtén atención personalizada para tus proyectos industriales.
              </p>
              <Button 
                onClick={openWhatsApp}
                size="sm"
                className="mt-3 bg-green-600 hover:bg-green-700 text-white w-full"
              >
                Chatear ahora
              </Button>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative z-10">
        <Button
          onClick={openWhatsApp}
          size="lg"
          className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg border-4 border-white"
        >
          <WhatsappLogo className="h-7 w-7" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Button>

        {/* Pulse animation */}
        <div className="pointer-events-none absolute inset-0 z-0 rounded-full bg-green-600 animate-ping opacity-30"></div>

        {/* Close button */}
        <button
          onClick={hideButton}
          className="absolute -top-2 -right-2 z-20 h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}