function Promo() {
  return (
     <section className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase mb-10">PROMO LANZAMIENTO</h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. TARJETA: DISEÑO FIGMA (Nueva) */}
          <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-600 text-white text-center rounded-t-2xl -mt-8 py-2 mb-4">
              <h3 className="text-xl md:text-2xl font-bold uppercase">DISEÑO FIGMA</h3>
            </div>
            <p className="text-sm font-semibold text-center mb-4">Diseño UX/UI profesional.</p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li>• Entrega de archivos fuente en Figma 100% editables.</li>
              <li>• Prototipos interactivos para validación del flujo de usuario.</li>
              <li>• Creación de guía de estilos y componentes reutilizables.</li>
            </ul>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-600">30% OFF</span>
              <span className="text-xl md:text-2xl font-bold"></span>
            </div>
          </div>
          
          {/* 2. TARJETA: LANDING PAGE (Existente) */}
          <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-600 text-white text-center rounded-t-2xl -mt-8 py-2 mb-4">
              <h3 className="text-xl md:text-2xl font-bold uppercase">LANDING PAGE</h3>
            </div>
            <p className="text-sm font-semibold text-center mb-4">Diseño 100% a medida.</p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li>• Contenido optimizado para persuadir a tu público.</li>
              <li>• Integración de whatsapp, formas de pago y formularios.</li>
              <li>• Tu negocio estará en los primeros resultados de google.</li>
            </ul>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600">50% OFF</span>
              <span className="text-xl md:text-2xl font-bold"></span>
            </div>
          </div>
          
          {/* 3. TARJETA: TIENDA ONLINE (Nueva) */}
          <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="bg-green-600 text-white text-center rounded-t-2xl -mt-8 py-2 mb-4">
              <h3 className="text-xl md:text-2xl font-bold uppercase">TIENDA ONLINE</h3>
            </div>
            <p className="text-sm font-semibold text-center mb-4">Plataforma E-commerce completa.</p>
            <ul className="text-left space-y-2 mb-6 text-sm">
              <li>• Integración de pasarelas de pago (Mercado Pago, Stripe, etc.).</li>
              <li>• Gestión de stock, pedidos y facturación automatizada.</li>
              <li>• Diseño responsivo optimizado para una compra sencilla.</li>
            </ul>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-600">40% OFF</span>
              <span className="text-xl md:text-2xl font-bold"></span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Promo;