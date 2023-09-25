import PropTypes from 'prop-types';
import * as _ from 'lodash';

import { CategoryItem } from '../category-item/category-item.component';

export const Directory = ({ categories }) => {

  console.log(categories);

  return (
    <div className="directory"> 
      <div className="ui three column grid">
        {
          _.map(categories, (item) => {
            return <CategoryItem key={item.id} item={item } />;        
          })
        }
      </div>
    </div>
  );
};

Directory.propTypes = {
  categories: PropTypes.array
};