export default function Footer() {
  return (
    <footer className="bg-surface py-8 text-light/75">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} AVEC Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
