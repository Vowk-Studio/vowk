function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vowk Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;