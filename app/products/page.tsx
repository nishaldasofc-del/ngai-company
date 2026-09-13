import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductCore } from "@/components/products/product-core"
import { ProductStudio } from "@/components/products/product-studio"
import { ProductAPI } from "@/components/products/product-api"
import { CTASection } from "@/components/home/cta-section"
import { ProductEnterprise } from "@/components/products/enterprise"
import { ProductsPricing } from "@/components/products/pricing"
import { ProductZeno } from "@/components/products/product-zeno"

export const metadata: Metadata = {
  title: "Products - NGAI",
  description: "Explore NGAI products: Core inference engine, Studio visual builder, API & SDKs, and Enterprise solutions",
}

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <ProductsHero />
      <ProductCore />
      <ProductStudio />
      <ProductAPI />
      <ProductZeno />
      <ProductEnterprise />
      <ProductsPricing />
      <CTASection />
      <Footer />
    </main>
  )
}
