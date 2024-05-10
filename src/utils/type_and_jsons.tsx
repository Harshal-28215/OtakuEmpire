export const categorylist = [
    {
        name: 'Top-airing',
        link: '/category/top-airing'
    },
    {
        name: 'most-popular',
        link: '/category/most-popular'
    },
    {
        name: 'Most-favorite',
        link: '/category/most-favorite'
    },
    {
        name: 'Completed',
        link: '/category/completed'
    },
    {
        name: 'Recently-updated',
        link: '/category/recently-updated'
    },
    {
        name: 'Recently-added',
        link: '/category/recently-added'
    },
    {
        name: 'Top-upcoming',
        link: '/category/top-upcoming'
    },
    {
        name: 'Subbed-anime',
        link: '/category/subbed-anime'
    },
    {
        name: 'Dubbed-anime',
        link: '/category/dubbed-anime'
    },
    {
        name: 'Movie',
        link: '/category/movie'
    },
    {
        name: 'Special',
        link: '/category/special'
    },
    {
        name: 'Ova',
        link: '/category/ova'
    },
    {
        name: 'Ona',
        link: '/category/ona'
    },
    {
        name: 'Tv',
        link: '/category/tv'
    },
]

export type Category = {
    data_id:string,
    title:string,
    poster:string,
    description:string,
    tvInfo:{
        showType:string,
        duration:string,
        sub:string,
        dub:string,
        ep:string | null,
    }
}

export type Animeinfo = {
    mal_id:number,
    trailer:{
        embed_url:string,
        images:{
        maximum_image_url:string,
        }
    },
    title_english:string,
    title:string,
    type:string,
    duration:string,
    status:string,
    score:number,
    synopsis:string,
    aired: {
        string:string
        },
    producers:[{
        name:string,
    }],
    studios:[{
        name:string,
    }],
    genres:[{
        name:string,
    }],
    
}

export type Character = {
    character:{
        mal_id:number,
        images:{
            webp:{
                image_url:string,
            }
        },
        name:string,
        },
        role:string,
        voice_actors?:[{
            person:{
                images:{
                    jpg:{
                        image_url:string,
                    }
                },
                name:string,
            },
            language:string,
        }]
    }

    export type Recomend = {
        entry:{
            title:string,
            images:{
                webp:{
                    large_image_url:string,
                }
            },
            mal_id:number,
        }
    }