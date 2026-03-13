import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "./ChatWidget";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
      <ChatWidget />
    </div>
  );
};