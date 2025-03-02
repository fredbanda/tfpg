import Script from "next/script"

export const GoogleAnalyticsTracking = () => {

    return (
        <>
        {/* Google Analytics Tracking */}
        <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-C2DJH1NFG6"
        strategy="afterInteractive"
        />
        <Script>
            {`        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C2DJH1NFG6');`}
        </Script>
      
        </>
    
    )
}