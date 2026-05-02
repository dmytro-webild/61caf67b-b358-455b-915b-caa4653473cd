"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="ClimateComfort"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Experience Perfect Indoor Comfort All Year Round"
      description="Expert heating, ventilation, and air conditioning solutions for your home. Reliable service, professional technicians, and year-round comfort."
      buttons={[
        { text: "Schedule Service", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/coworkers-refill-air-conditioner-freon_482257-90737.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Your Comfort is Our Mission"
      description="With over 20 years of experience, we provide top-tier HVAC services including installations, maintenance, and emergency repairs."
      metrics={[
        { value: "20+", title: "Years Experience" },
        { value: "15k", title: "Homes Served" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bald-man-with-beard-wearing-builder-jumpsuit-uniform-showing-middle-finger-doing-fuck-you-bad-expression-provocation-rude-attitude-screaming-excited_839833-27667.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Air Conditioning",          description: "Expert AC installation and repair services.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388946.jpg", imageAlt: "ac ventilation wall unit" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388966.jpg", imageAlt: "ac ventilation wall unit" },
        },
        {
          title: "Heating Systems",          description: "Furnace and heat pump expertise for cold days.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250266.jpg", imageAlt: "ac ventilation wall unit" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250247.jpg", imageAlt: "ac ventilation wall unit" },
        },
        {
          title: "Indoor Air Quality",          description: "Purification and filtration solutions.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/young-woman-using-home-technology_23-2149216659.jpg", imageAlt: "ac ventilation wall unit" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-holding-tablet_23-2148994178.jpg", imageAlt: "ac ventilation wall unit" },
        },
      ]}
      showStepNumbers={false}
      title="Comprehensive HVAC Solutions"
      description="We specialize in keeping your home environment perfect throughout every season."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "UltraCool AC Unit", price: "$2,499", variant: "Cooling", imageSrc: "http://img.b2bpic.net/free-photo/woman-turning-air-conditioner-using-tablet_259150-57148.jpg" },
        { id: "2", name: "HeatPro Furnace", price: "$3,200", variant: "Heating", imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388964.jpg" },
        { id: "3", name: "EcoFilter System", price: "$450", variant: "Quality", imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388955.jpg" },
        { id: "4", name: "Smart Thermostat", price: "$250", variant: "Control", imageSrc: "http://img.b2bpic.net/free-photo/people-interacting-with-ai-their-daily-lives_23-2151870989.jpg" },
        { id: "5", name: "Ventilation Pro", price: "$1,100", variant: "Ventilation", imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388943.jpg" },
        { id: "6", name: "HeatPump Elite", price: "$4,100", variant: "Heating", imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250265.jpg" },
      ]}
      title="Premium HVAC Units"
      description="Select from our curated list of high-efficiency climate control systems."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          tag: "Essential",          price: "$99",          period: "/year",          description: "Basic seasonal checkup.",          button: { text: "Select" },
          featuresTitle: "Includes:",          features: ["1 visit per year", "Basic filter check"],
        },
        {
          id: "pro",          tag: "Recommended",          price: "$199",          period: "/year",          description: "Full system protection.",          button: { text: "Select" },
          featuresTitle: "Includes:",          features: ["2 visits per year", "Priority scheduling", "Full cleaning"],
        },
        {
          id: "elite",          tag: "Comprehensive",          price: "$299",          period: "/year",          description: "Ultimate peace of mind.",          button: { text: "Select" },
          featuresTitle: "Includes:",          features: ["Unlimited service calls", "Discounted parts", "Extended warranty"],
        },
      ]}
      title="Maintenance Plans"
      description="Choose the right plan to keep your system running smoothly."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Alice Johnson", role: "Homeowner", company: "Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-goodlooking-tender-friendly-pretty-middleaged-30s-woman-extend-arm-hold-camera-hand-smiling-broadly-taking-selfie-photographing-record-videomessage-calling-husband_176420-51274.jpg" },
        { id: "2", name: "Bob Smith", role: "Homeowner", company: "Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/loving-couple-planning-redecorating-household_23-2148814343.jpg" },
        { id: "3", name: "Charlie Davis", role: "Property Mgr", company: "Managed", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-business-woman-posing-outdoors_23-2148603030.jpg" },
        { id: "4", name: "Diana Lee", role: "Homeowner", company: "Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg" },
        { id: "5", name: "Evan Wright", role: "Homeowner", company: "Resident", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-couple-toasting-with-wine-before-family-lunch-kitchen-focus-is-man_637285-5862.jpg" },
      ]}
      title="Client Success Stories"
      description="Hear what homeowners are saying about our service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "How often should I service my AC?", content: "We recommend servicing at least once a year, ideally in spring." },
        { id: "q2", title: "Are your technicians certified?", content: "Yes, all of our technicians hold HVAC industry standard certifications." },
        { id: "q3", title: "Do you offer emergency service?", content: "Yes, we are available 24/7 for urgent HVAC issues." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common concerns about HVAC maintenance and service."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      tag="Contact Us"
      title="Ready for Comfort?"
      description="Schedule your appointment today for a free estimate or maintenance visit."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="ClimateComfort"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}