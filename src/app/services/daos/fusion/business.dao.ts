import { CategoryDao , LocationDao } from '.';
import { Coordinate } from '../../../core/models';

class BusinessDao {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: CategoryDao[];
  rating: number;
  coordinates: Coordinate[];
  transactions: string[];
  price: string;
  location: LocationDao;
  phone: string;
  display_phone: string;
}

export { BusinessDao }
