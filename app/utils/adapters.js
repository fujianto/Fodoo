export const ZomatoRestaurantSearch = ({ restaurants: data }) => {
  return data.map(
    ({
      restaurant: {
        id: id,
        name: name,
        location: { locality: locDt, city: cityDt, locality_verbose: locvDt },
        featured_image,
        user_rating: { aggregate_rating: ratingDt },
        cuisines,
        average_cost_for_two,
        currency,
        thumb,
        photos_url
      }
    }) => {
      return {
        id,
        image: featured_image || thumb,
        name,
        locality: locDt,
        location: locvDt,
        city: cityDt,
        rating: ratingDt,
        cuisines,
        cost: average_cost_for_two,
        currency
      };
    }
  );
};

