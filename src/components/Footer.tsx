function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 text-center mt-auto">
      <div className="flex items-center justify-between max-w-6xl mx-auto flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
