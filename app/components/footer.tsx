export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} AVEC Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
