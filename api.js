import sanityClient from './Sanity';
let sanityQuery = (query, params)=> sanityClient.fetch(query, params);

export const getFeaturedResturants = ()=>{
   return sanityQuery(`
   *[_type == 'featured'] {
    ...,
    restaurants[]->{
    ...,
    type->{
        name
    },
    dishes[]->
    }
}
    `);
}

export const getCategories = ()=>{
    return sanityQuery(`
        *[_type == 'category']
    `);
}

export const getFeaturedResturantById = id=>{
    return sanityQuery(`
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `, {id})
}