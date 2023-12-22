import {client} from '../../app/client'

const {name, email, phone, logo, website} = client


export const add2Breadcrumbs = ({name1, url1, name2}) => (
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                position: 1,
                name: name1,
                item: url1
            },
            {
                "@type": "ListItem",
                position: 2,
                name: name2,
            }
        ]
    }

)


// export const add3Breadcrumbs = ({name1, url1, name2, url2, name3}) => (
//     {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         "itemListElement": [
//             {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: name1,
//                 item: ``
//             },
//             {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: name2,
//                 item: ``
//             },
//             {
//                 "@type": "ListItem",
//                 position: 3,
//                 name: name3
//             }
//         ]
//     }
//
// )

export const addImage = ({image}) => (
    {
        '@context': "https://schema.org/",
        '@type': "ImageObject",
        contentUrl: image,
        creator: {"@type": "Organization", "name": name}
    }
)

// export const addEvent = ({name, startDate, endDate, locationName, streetAddress, city, zip, state, country, image, description, url}) => (
//     {
//         "@context": "https://schema.org",
//         "@type": "Event",
//         name: name,
//         startDate: startDate,
//         endDate: endDate,
//         eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
//         eventStatus: "https://schema.org/EventScheduled",
//         location: {
//             "@type": "Place",
//             name: locationName,
//             address: {
//                 "@type": "PostalAddress",
//                 streetAddress: streetAddress,
//                 addressLocality: city,
//                 postalCode: zip,
//                 addressRegion: state,
//                 addressCountry: country
//             }
//         },
//         offers: {
//             "@type": "Offer",
//             url: url,
//             price: "0",
//             priceCurrency: "USD",
//             availability: "https://schema.org/InStock"
//         },
//         image: {
//             "@type": "ImageObject",
//             url: image
//         },
//         description: description,
//         organizer: {
//             "@type": "Organization",
//             name: name,
//             url: `https://${website}`
//         }
//     }
//
// )

// export const addVideo = ({videoName, speakerName, description, thumbnail, uploadDate, minutes, seconds, embedUrl}) => (
//     {
//         "@context": "https://schema.org",
//         "@type": "VideoObject",
//         "name": `${videoName} | ${speakerName.map(({name}) => name).join(', ')} | ${name}`,
//         "description": description,
//         "thumbnailUrl": thumbnail,
//         "uploadDate": uploadDate,
//         "duration": `PT${minutes}M${seconds}S`,
//         "embedUrl": `https://www.youtube.com/embed/${embedUrl}`
//     }
// )

export const addLocalBusiness = {
    '@context': 'https://schema.org',
    "@type": "LocalBusiness",
    image: {
        "@type": "ImageObject",
        url: logo
    },
    name: name,
    // sameAs: globals.socialLinks.map(({fullLink}) => (
    //     fullLink
    // )),
    // address: {
    //     "@type": "PostalAddress",
    //     streetAddress: streetAddress,
    //     addressLocality: city,
    //     addressRegion: state,
    //     postalCode: zip,
    //     addressCountry: "US"
    // },
    // geo: {
    //     "@type": "GeoCoordinates",
    //     latitude: 37.501160,
    //     longitude: -77.649350
    // },
    url: `https://${website}`,
    telephone: phone,
}


export const addLogo = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: `https://${website}`,
    logo: {
        "@type": "ImageObject",
        contentUrl: logo,
    },
    // sameAs: globals.socialLinks.map(({fullLink}) => (
    //     fullLink
    // )),
    name: name,
    description: 'Showing you the city the way you want to see it.',
    // address: {
    //     "@type": "PostalAddress",
    //     streetAddress: streetAddress,
    //     addressLocality: city,
    //     addressRegion: state,
    //     postalCode: zip,
    //     addressCountry: "US"
    // },
    contactPoint: {
        '@type': 'ContactPoint',
        email: email,
        telephone: phone,
    }
}

// export const addArticle = (title, image, date, speakerName) => (
//     {
//         '@context': "https://schema.org",
//         '@type': 'Article',
//         "headline": title,
//         "image": image,
//         "datePublished": date,
//         "author": speakerName.map(({name}) => (
//             {"@type": "Person", name: name}
//         ))
//     }
// )
