import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://crazzmedia.com';

export function SEOHead({
    title,
    description,
    keywords,
    canonicalPath,
    ogImage = `${BASE_URL}/og-image.jpg`,
    ogType = 'website',
    faqs = [],
    breadcrumbs = [],
    serviceSchema = null,
    schema = null,
}) {
    const location = useLocation();
    const currentPath = canonicalPath || location.pathname;
    const fullCanonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;

    useEffect(() => {
        // 1. Update Title
        if (title) {
            document.title = title;
        }

        // Helper to update or create meta tags
        const setMetaTag = (attrName, attrValue, content) => {
            if (!content) return;
            let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // 2. Primary Meta Tags
        if (description) {
            setMetaTag('name', 'description', description);
            setMetaTag('property', 'og:description', description);
            setMetaTag('property', 'twitter:description', description);
        }
        if (keywords) {
            setMetaTag('name', 'keywords', keywords);
        }
        if (title) {
            setMetaTag('name', 'title', title);
            setMetaTag('property', 'og:title', title);
            setMetaTag('property', 'twitter:title', title);
        }

        // 3. OpenGraph / Social
        setMetaTag('property', 'og:url', fullCanonicalUrl);
        setMetaTag('property', 'twitter:url', fullCanonicalUrl);
        setMetaTag('property', 'og:type', ogType);
        if (ogImage) {
            setMetaTag('property', 'og:image', ogImage);
            setMetaTag('property', 'twitter:image', ogImage);
        }

        // 4. Canonical Link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', fullCanonicalUrl);

        // 5. JSON-LD Schemas
        const defaultOrgSchema = {
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
            "@id": `${BASE_URL}/#organization`,
            "name": "Crazz Media",
            "url": BASE_URL,
            "logo": `${BASE_URL}/src/assets/crazz-media-logo.png`,
            "image": `${BASE_URL}/src/assets/crazz-media-logo.png`,
            "description": "Top 360° Digital Marketing Agency in Mumbai & India specializing in SEO, Web Design & Development, Social Media Marketing, Performance Marketing, and Branding.",
            "telephone": "+91-9082287249",
            "email": "info.crazzmedia@gmail.com",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mumbai Suburban",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400050",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
            },
            "areaServed": [
                { "@type": "City", "name": "Mumbai" },
                { "@type": "City", "name": "Navi Mumbai" },
                { "@type": "City", "name": "Thane" },
                { "@type": "City", "name": "Pune" },
                { "@type": "City", "name": "Delhi NCR" },
                { "@type": "City", "name": "Bengaluru" },
                { "@type": "Country", "name": "India" }
            ],
            "sameAs": [
                "https://www.instagram.com/crazzmedia?igsh=NzQ5d2hkMno3eDA1&utm_source=qr",
                "https://www.linkedin.com/company/107023675/",
                "https://wa.me/919082287249"
            ]
        };

        const schemasToInject = [defaultOrgSchema];

        // Breadcrumb Schema
        if (breadcrumbs && breadcrumbs.length > 0) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((b, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": b.name,
                    "item": `${BASE_URL}${b.path}`
                }))
            };
            schemasToInject.push(breadcrumbSchema);
        }

        // FAQ Schema
        if (faqs && faqs.length > 0) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            };
            schemasToInject.push(faqSchema);
        }

        // Service Schema
        if (serviceSchema) {
            schemasToInject.push({
                "@context": "https://schema.org",
                "@type": "Service",
                "provider": {
                    "@id": `${BASE_URL}/#organization`
                },
                ...serviceSchema
            });
        }

        // Custom schema
        if (schema) {
            schemasToInject.push(schema);
        }

        // Inject Script Tag
        let scriptTag = document.getElementById('dynamic-seo-schema');
        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.id = 'dynamic-seo-schema';
            scriptTag.type = 'application/ld+json';
            document.head.appendChild(scriptTag);
        }
        scriptTag.text = JSON.stringify(schemasToInject);

        return () => {
            // Keep head clean
        };
    }, [title, description, keywords, currentPath, fullCanonicalUrl, ogImage, ogType, faqs, breadcrumbs, serviceSchema, schema]);

    return null;
}
