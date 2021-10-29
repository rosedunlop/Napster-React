import axios from 'axios'


const basicUrl = 'https://api.napster.com/v2.2'

export const fetchGenres = async () => {
    const config = {
        method: 'get',
        url: `${basicUrl}/genres`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=EF443FE3374DFED655257F19BE636299~000000000000000000000000000000~YAAQ3zEUAk8wkbZ8AQAAjGmowQ0+maMwl2uctd7O5X4oA3JmV6DxLCVTIYTThFMF/ynLleJpRDItXz7G5M1SQu6z2HvxmZLpSghzRt/V1nV0rJ3HGapLbxi5CCZIjJb2+t3/zOknGLm2lI95WRiyHlAQDydm7gFbu7XAzOlllxoHnHvgQiRCdZTYpvY0OP3kE6ljo+gJU5JhK+kqgXooctmLu60ZQbnxw2TqNtl2KEN6FymiGfFexV/ughkhz6/uIZTIitA+yLGblS+SQQtnvgatly779TkvVQztaSgbtCebaLB6SCTrBSsw9eUt+Yqqwv9SiSoz3X6LqJbEIMYxu+8KPbyZZA+nVUrR8sMT/YykuwNxMDZo+07NVw==; bm_sv=A6FE27FB79BAC5E1F3FB69060A428E4D~tu2dh5f+o89XJwQ2792YGsOSksxVwNWFygpytsBOr1UvrmDt/8pQcMja+fXytEvCIL0IWmGgwYGIMnJPaIeW84lOurefMf+d6VFeXYe/IWZBvoTKJq+lELljR1eHIFrcu55Cg8vQU4b+w+HdfgF3IbfKNKN8K87tcqA2VEj+UAI=',
        },
    }
    const response = await axios(config)
    return response.data.genres
}

export const fetchGenre = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/genres/${id}`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.genres
}
export const fetchGenreTopArtist = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/genres/${id}/artists/top?limit=10`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=EF443FE3374DFED655257F19BE636299~000000000000000000000000000000~YAAQ3zEUAk8wkbZ8AQAAjGmowQ0+maMwl2uctd7O5X4oA3JmV6DxLCVTIYTThFMF/ynLleJpRDItXz7G5M1SQu6z2HvxmZLpSghzRt/V1nV0rJ3HGapLbxi5CCZIjJb2+t3/zOknGLm2lI95WRiyHlAQDydm7gFbu7XAzOlllxoHnHvgQiRCdZTYpvY0OP3kE6ljo+gJU5JhK+kqgXooctmLu60ZQbnxw2TqNtl2KEN6FymiGfFexV/ughkhz6/uIZTIitA+yLGblS+SQQtnvgatly779TkvVQztaSgbtCebaLB6SCTrBSsw9eUt+Yqqwv9SiSoz3X6LqJbEIMYxu+8KPbyZZA+nVUrR8sMT/YykuwNxMDZo+07NVw==; bm_sv=A6FE27FB79BAC5E1F3FB69060A428E4D~tu2dh5f+o89XJwQ2792YGsOSksxVwNWFygpytsBOr1UvrmDt/8pQcMja+fXytEvCIL0IWmGgwYGIMnJPaIeW84lOurefMf+d6VFeXYe/IWYiwrjd9fBPiUW2gEmmAdpI92HmQduH9rYbYLjoeY87lMRnUKzOiAkc3WXEaVliBH8=',
        },
    }
    const response = await axios(config)
    console.log('This is the data', response.data.artists)
    return response.data.artists
}


export const fetchGenreTopAlbums = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/genres/${id}/albums/top?limit=10`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.albums
}

export const fetchGenreTopTracks = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/genres/${id}/tracks/top?limit=10`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
        
    }
    const response = await axios(config)
    return response.data.tracks
}

export const fetchGenreNewRelease = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/genres/${id}/albums/new?limit=5`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.albums
}

export const fetchArtist = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/artists/${id}`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.artists
    
}
export const fetchArtistBio = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/artists/${id}`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.artists[0].bios[0]
    
}

export const fetchArtistImage = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/artists/${id}/images`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.images[0]

}

export const fetchTopArtists = async () => {
    const config = {
        method: 'get',
        url: `${basicUrl}/artists/top?limit=10`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.artists
}

export const fetchTopTracks = async () => {
    const config = {
        method: 'get',
        url: `${basicUrl}/tracks/top?limit=10`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.tracks
}

export const fetchTopAlbums = async () => {
    const config = {
        method: 'get',
        url: `${basicUrl}/albums/top?limit=10`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.albums
}

export const fetchSearch = async (id) => {
    const config = {
        method: 'get',
        url: `${basicUrl}/search?query=${id}&type=artist`,
        headers: { 
                  'apikey': 'NWNmNzlhMDMtMGUzYi00OGJiLTg0YTUtMTRhOTcwNTcxMjJj', 
                  'Cookie': 'ak_bmsc=347C9925790D742241A03CC1115C677F~000000000000000000000000000000~YAAQ3zEUAh7ufLZ8AQAAPun5vA0eRQODUDyaKM/ViWs/bQqE+GHtLWf7uMcv8RmAFrvk8OKNfuebSCyq3ysM/lkIutKz8OZiLIfe0tABq0MBxa5WTCnd7XN85p0c7yds3KbqhpHS84ns+DBr4hY3lp93N3x9eQAQamYmYct2qxDScNVIZaRP8ZQJMUXJqj1s0mysfSvjyr020OAJaPU/4DSm2o54P6dz30uo5GqA008llDVcK8MpungEZv2vmf0XJHt96BP1SlRVNv17fTA2i/4PjSpy3NYnP0UN1pr3Ig0hCKI170fZBVuPa4uEtmGFAObrRsPQl9dPAjInr1iK9Ex62s5t+hfHMMxLg9yduZmPFmGJv3ZWgqkGtA==',
        },
    }
    const response = await axios(config)
    return response.data.search.data.artists
    

}



